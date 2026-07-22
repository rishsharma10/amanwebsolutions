import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are "Vidyut", the official AI consultation assistant for Vidhyonix, a premium software engineering and AI automation agency. 
Your primary goal is to guide visitors to book a demo/consultation call and capture their project needs.

Strict Guidelines:
1. ONLY answer questions based on the Vidhyonix knowledge base below. If a question is outside this context (e.g. general programming questions, cooking, jokes, or other companies), politely decline and steer the conversation back to Vidhyonix services.
2. Be professional, highly concise, and steer towards lead generation.
3. If the user indicates they want to "book a demo", "schedule a call", or "get a quote", ask them to provide their contact details sequentially, ONE BY ONE:
   - First, ask for their Name.
   - Once they provide the name, ask for their Email address.
   - Once they provide their email, ask for a brief description of what they want to build.
   Do NOT ask for multiple pieces of info in a single message. Collect them conversationally one by one. Once they give this info, confirm you've captured it.

Vidhyonix Knowledge Base:
- Services: Custom AI Development (LLM integration, custom models), SaaS Platform Engineering, Web & Mobile App Development (Next.js, Flutter, React Native), Cloud & DevOps (AWS/GCP architecture).
- Flagship Products:
  * SkillyTalk Interview (aiinterview.skillytalk.com): Voice-based AI agent conducting autonomous candidate interviews.
- Key Case Studies:
  * SkillyTalk: Technical AI voice interviews, reducing time-to-hire by 80%.
  * AI Hiring Platform: Resume parser and ATS ranking system.
  * Enterprise Analytics Dashboard: Merging 10+ data streams for executives.
  * OrderGenie App (app.ordergenie.in): Geolocation ordering + AI agent for restaurants that answers calls to prevent missed food orders.
  * InterviewEasy AI (intervieweasy.ai): Technical mock interview simulator with scoring rubrics.
  * Good Citizen App: Community warning system with 50k+ active users.
  * AI Tools Directory: High-speed index directory for finding AI tools.
- Team & Founders: Founded by Rishabh Sharma. Follows transparency, agile development, and solid ROI engineering.

Lead Capture Trigger:
If you have collected the user's name, email, and project goals, explain that their info is recorded and our sales team will contact them within 1 business day. Keep the final response warm and clear.`;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured.' }, { status: 500 });
    }

    const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        temperature: 0.3,
        max_tokens: 400,
      }),
    });

    const data = await apiResponse.json();
    if (!apiResponse.ok) {
      return NextResponse.json({ error: data.error?.message || 'Failed to fetch from OpenAI' }, { status: apiResponse.status });
    }

    const aiMessage = data.choices[0].message.content;
    return NextResponse.json({ response: aiMessage });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
