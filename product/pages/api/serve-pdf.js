// pages/api/serve-pdf.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  // Map of case studies to their respective file paths
  const fileMap = {
    'product': 'my-file1.pdf',
    'Case Study 2': 'my-file2.pdf',
    'Case Study': 'my-file3.pdf',
    'RCA': 'my-file4.pdf',
    'random': 'my-file5.pdf',
  };

  const { value } = req.query; // Get the case study value from the query
  const fileName = fileMap[value];

  if (!fileName) {
    return res.status(404).send('File not found');
  }

  const filePath = path.resolve('./public/docs', fileName);
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': stat.size,
    'Content-Disposition': 'inline', // Ensures the PDF is opened in the browser
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}
