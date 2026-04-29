import fs from 'fs';
import PDFDocument from 'pdfkit';

const sourcePath = './public/CV_Tech_Senior.md';
const outputPath = './public/CV_Tech_Senior.pdf';

const markdown = fs.readFileSync(sourcePath, 'utf8');
const lines = markdown.split(/\r?\n/);

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

doc.font('Helvetica').fontSize(12).fillColor('#000000');

const writeLine = (text, options = {}) => {
  if (options.size) doc.fontSize(options.size);
  if (options.bold) doc.font('Helvetica-Bold');
  else doc.font('Helvetica');
  if (options.indent) doc.text(text, { indent: options.indent, continued: false });
  else doc.text(text);
  if (options.size) doc.fontSize(12);
};

for (const rawLine of lines) {
  const line = rawLine.trimEnd();

  if (line.startsWith('# ')) {
    doc.moveDown(0.5);
    writeLine(line.replace('# ', ''), { size: 24, bold: true });
    doc.moveDown(0.5);
    continue;
  }

  if (line.startsWith('## ')) {
    doc.moveDown(0.4);
    writeLine(line.replace('## ', ''), { size: 16, bold: true });
    doc.moveDown(0.2);
    continue;
  }

  if (line === '---') {
    doc.moveDown(0.5);
    continue;
  }

  if (line.startsWith('- ')) {
    writeLine('• ' + line.slice(2));
    continue;
  }

  if (line.startsWith('**') && line.includes('** —')) {
    const [label, rest] = line.split(' — ');
    writeLine(label.replace(/\*\*/g, ''), { bold: true });
    writeLine(rest);
    continue;
  }

  if (line === '') {
    doc.moveDown(0.2);
    continue;
  }

  writeLine(line);
}

doc.end();

stream.on('finish', () => {
  console.log(`PDF generated at ${outputPath}`);
});
