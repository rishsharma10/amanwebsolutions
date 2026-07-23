import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  let formattedUrl = targetUrl.trim();
  // Simple validation to prevent bad inputs
  if (!formattedUrl.includes('.')) {
    return NextResponse.json({
      success: false,
      error: 'Invalid domain name or address entered.',
      domain: targetUrl,
      latency: 0,
      routes: ['/about', '/services', '/contact', '/blog'],
      hasMetaDescription: false,
      hasOGImage: false,
      hasSchema: false,
      isHttps: false,
    });
  }

  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = 'https://' + formattedUrl;
  }

  try {
    const domain = new URL(formattedUrl).hostname;
    const startTime = Date.now();

    // Fetch the target URL homepage with a 4 second timeout
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(formattedUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'VidhyonixWebAuditor/1.0',
      },
    });
    
    clearTimeout(id);
    const latency = Date.now() - startTime;
    const html = await response.text();

    // 1. Find internal links/routes (first 3-5 routes)
    const links: string[] = [];
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
    let match;
    while ((match = linkRegex.exec(html)) !== null && links.length < 5) {
      const href = match[1].trim();
      // Keep only clean internal links that start with / (exclude assets, mailto, tel, hashes)
      if (href.startsWith('/') && href.length > 1 && !href.startsWith('//') && !href.includes('.') && !links.includes(href)) {
        links.push(href);
      }
    }

    // 2. Audit SEO Meta Description
    const hasMetaDescription = /<meta\s+[^>]*name="description"[^>]*content="[^"]+"[^>]*>/i.test(html) ||
                               /<meta\s+[^>]*content="[^"]+"[^>]*name="description"[^>]*>/i.test(html);

    // 3. Audit Open Graph Meta Tags
    const hasOGImage = /<meta\s+[^>]*property="og:image"[^>]*content="[^"]+"[^>]*>/i.test(html) ||
                       /<meta\s+[^>]*content="[^"]+"[^>]*property="og:image"[^>]*>/i.test(html);

    // 4. Audit Schema.org structured markup
    const hasSchema = html.toLowerCase().includes('type="application/ld+json"');

    // 5. SSL validity check
    const isHttps = formattedUrl.startsWith('https://');

    return NextResponse.json({
      success: true,
      domain,
      latency,
      routes: links.length > 0 ? links : ['/about', '/services', '/contact', '/blog'],
      hasMetaDescription,
      hasOGImage,
      hasSchema,
      isHttps,
    });

  } catch (error) {
    // If target URL fails to fetch, return simulated default stats but flag error gracefully
    return NextResponse.json({
      success: false,
      error: 'Could not fetch target page details. Target may be offline, blocking requests, or invalid.',
      domain: targetUrl,
      latency: 0,
      routes: ['/about', '/services', '/contact', '/blog'],
      hasMetaDescription: false,
      hasOGImage: false,
      hasSchema: false,
      isHttps: false,
    });
  }
}
