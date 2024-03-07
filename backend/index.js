const express = require('express');
const multer = require('multer');

const pdf2json = require('pdf2json');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

const fs = require("fs")

// cores config
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// pdf to text
app.post('/pdf_to_text', upload.single('pdf'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }


    const pdfParser = new pdf2json();

    pdfParser.loadPDF(req.file.path);

    pdfParser.on('pdfParser_dataError', errData => {
        console.error(errData.parserError);
        res.status(500).json({ error: 'Error parsing PDF' });
    });

    pdfParser.on('pdfParser_dataReady', pdfData => {

        // console.log(pdfData.Pages[0].Texts);

        const text = pdfData.Pages.reduce((acc, page) => {
            page.Texts.forEach(text => {

                console.log(text.R);
                acc += text.R.reduce((acc, textSegment) => acc + decodeURIComponent(textSegment.T), ' ');
            });
            return acc;
        }, ' ');


        // delete file uploaded
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error(err);
            }
        });

        res.json({ text });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
