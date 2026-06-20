const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/2025_AI_Integration_Checklist.pdf'));

doc.fontSize(24).fillColor('#22d3ee').text('2025 AI Integration Checklist', { align: 'center' });
doc.fontSize(16).fillColor('#475569').text('Vidhyonix IT Solutions', { align: 'center' });
doc.moveDown(2);

doc.fontSize(12).fillColor('#1e293b').text('Implementing Artificial Intelligence is no longer optional—it is required to stay competitive. However, 70% of AI initiatives fail due to poor planning. Use this 10-point checklist to guarantee your AI integration is successful, scalable, and secure.', {
  lineGap: 4
});
doc.moveDown(2);

// Helper function
const addPhase = (title) => {
  doc.fontSize(16).fillColor('#c026d3').text(title);
  doc.moveDown(0.5);
};

const addItem = (title, desc) => {
  doc.fontSize(12).fillColor('#0f172a').text(`[   ]  ${title}`, { continued: false });
  doc.fontSize(10).fillColor('#475569').text(`       ${desc}`, { lineGap: 4 });
  doc.moveDown(0.5);
};

addPhase('Phase 1: Strategic Alignment & Readiness');
addItem('1. Identify the Core Bottlenecks', 'Identify specific, measurable problems (e.g., manual data entry).');
addItem('2. Data Audit & Consolidation', 'Ensure your data is clean, structured, and accessible across silos.');
addItem('3. Security & Compliance Review', 'Ensure models comply with privacy laws (GDPR, HIPAA).');
doc.moveDown();

addPhase('Phase 2: Choosing the Right Technology');
addItem('4. Build vs. Buy Decision', 'Determine if you need a custom-trained model or an off-the-shelf API.');
addItem('5. Infrastructure Assessment', 'Check if cloud architecture can handle increased AI latency.');
addItem('6. UI/UX AI Integration', 'Plan intuitive interactions (chatbots, background processing, etc.).');
doc.moveDown();

addPhase('Phase 3: Implementation & Scaling');
addItem('7. "Human in the Loop" Fallback', 'Design a fallback mechanism where failed AI tasks route to a human.');
addItem('8. Start with a Micro-Pilot', 'Deploy to a 5% user segment to measure ROI before scaling.');
addItem('9. Implement Continuous Monitoring', 'Set up dashboards to track accuracy, response times, and API costs.');
addItem('10. Employee Upskilling', 'Train your team on prompt engineering and AI management.');
doc.moveDown(2);

doc.rect(50, doc.y, 500, 80).fill('#f1f5f9');
doc.y += 15;
doc.fontSize(14).fillColor('#0f172a').text('Ready to build your custom AI Ecosystem?', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#22d3ee').text('info@vidhyonix.com  |  vidhyonix.com', { align: 'center' });

doc.end();
