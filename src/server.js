import express from "express";
import PdfPrinter from "pdfmake";
import fs from "fs"

const app = express();

const data = [
   { name: "Lucas", value: 200, date: "23/11/2023" },
   { name: "Marcela", value: 150, date: "22/11/2023" },
   { name: "Manuela", value: 350, date: "21/11/2023" },
   { name: "Manequinho", value: 400, date: "23/10/2023" },
   { name: "Maneco", value: 200, date: "22/10/2023" },
];

app.get("/report", (req, res) => {
   const fonts = {
      // Courier: {
      //   normal: 'Courier',
      //   bold: 'Courier-Bold',
      //   italics: 'Courier-Oblique',
      //   bolditalics: 'Courier-BoldOblique'
      // },
      Helvetica: {
         normal: "Helvetica",
         bold: "Helvetica-Bold",
         italics: "Helvetica-Oblique",
         bolditalics: "Helvetica-BoldOblique",
      },
      // Times: {
      //   normal: 'Times-Roman',
      //   bold: 'Times-Bold',
      //   italics: 'Times-Italic',
      //   bolditalics: 'Times-BoldItalic'
      // },
      // Symbol: {
      //   normal: 'Symbol'
      // },
      // ZapfDingbats: {
      //   normal: 'ZapfDingbats'
      // }
   };
   const printer = new PdfPrinter(fonts);

   const docDefinitions = {
      defaultStyle: { font: "Helvetica" },
      content: [{ text: "Meu primeiro relatorio" }],
   };

   const pdfDoc = printer.createPdfKitDocument(docDefinitions);

   pdfDoc.pipe(fs.createWriteStream("Relatorio.pdf"))


   return res.send("foi");
});

app.listen(3000, () => {
   console.log("server listening");
});
