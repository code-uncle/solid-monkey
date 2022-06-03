const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

doc.addPage();

doc.pipe(fs.createWriteStream('test.pdf'));

