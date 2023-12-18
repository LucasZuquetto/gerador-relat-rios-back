import express from "express";
import PdfPrinter from "pdfmake";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const blue = "#325cae";

const __dirname = path.resolve(path.dirname(""));

//to do
//form input use state unico
//organizar o código
//criar perfis para empresas, para nao ter que preencher os inputs
//tirar input de data e fazer dinamico
//ORGANIZAR sozinho a ordem de invalido e enviado
app.get("/health", (req,res) => {
   try {
      res.send("Server is listening")
   } catch (error) {
      console.error(error)
      res.sendStatus(500)
   }
})

app.post("/report", async (req, res) => {
   try {
      const data = req.body;
      console.log(data);
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

      const formatedData = [];
      for await (let dado of data.dados) {
         const rows = new Array();
         rows.push(dado.profissionais);
         rows.push(dado.endereço);

         if (dado.site === "Sem site") {
            rows.push({ text: dado.site });
         } else {
            rows.push({ text: dado.site, color: "#0000FF", link: dado.site });
         }
         rows.push(dado.apresentamos);
         rows.push(dado.apresentamosNao);
         formatedData.push(rows);
      }

      const docDefinitions = {
         pageSize: { width: 850, height: 590 },
         background: {
            image: path.join(__dirname, "src", "myconext.jpeg"),
            opacity: 0.2,
            margin: [5, 100],
            width: 600,
         },
         defaultStyle: { font: "Helvetica", fontSize: 10, alignment: "center" },
         header: {
            alignment: "left",
            columns: [
               {
                  text: [
                     `CLIENTE: `,
                     {
                        text: `${data.header.empresa}\n`,
                        bold: true,
                        color: "black",
                     },
                     "CONSULTORA: ",
                     {
                        text: `${data.header.consultora}\n`,
                        bold: true,
                        color: "black",
                     },
                     "CONTRATO: ",
                     {
                        text: `${data.header.contrato}`,
                        bold: true,
                        color: "black",
                     },
                  ],
                  color: blue,
                  bold: true,
                  fontSize: 11,
                  heights: 100,
                  margin: [40, 9, 0, 0], //
               },
               {
                  text: [
                     `PERÍODO DE DIVULGAÇÃO: `,
                     {
                        text: `${data.header.divulgação}\n`,
                        bold: true,
                        color: "black",
                     },
                     "PÚBLICO-ALVO: ",
                     {
                        text: `${data.header.publico}`,
                        bold: true,
                        color: "black",
                     },
                  ],
                  color: blue,
                  bold: true,
                  fontSize: 11,
                  margin: [0, 9],
               },
            ],
         },
         content: [
            {
               margin: [0, 20],
               table: {
                  dontBreakRows: true,
                  heights: 16,
                  body: [
                     [
                        {
                           text: "PROFISSIONAIS/EMPRESAS",
                           bold: true,
                           color: blue,
                        },
                        {
                           text: "ENDEREÇO",
                           bold: true,
                           color: blue,
                        },
                        {
                           text: "SITE",
                           bold: true,
                           color: blue,
                        },
                        {
                           text: "APRESENTAMOS S/N",
                           bold: true,
                           colSpan: 2,
                           color: blue,
                        },
                        {},
                     ],
                     ...formatedData,
                  ],
                  headerRows: 1,
                  widths: [205, 185, 210, 65, 65],
               },

               layout: {
                  hLineWidth: function (i, node) {
                     return i === 0 || i === node.table.body.length ? 1 : 1;
                  },
                  vLineWidth: function (i, node) {
                     return i === 0 || i === node.table.widths.length ? 1 : 1;
                  },
                  hLineColor: function (i, node) {
                     return i === 0 || i === node.table.body.length
                        ? "black"
                        : "gray";
                  },
                  paddingTop: function (i, node) {
                     return i === node.table.widths.length - 1 ? 3 : 3;
                  },
               },
            },
         ],
         footer: {
            text: `- ${data.header.empresa} -`,
            color: blue,
            fontSize: 9,
            bold: true,
         },
      };
      const pdfDoc = printer.createPdfKitDocument(docDefinitions);

      const chunks = [];
     
      pdfDoc.on("data", (chunk) => {
         chunks.push(chunk);
      });

      pdfDoc.end();

      pdfDoc.on("end", () => {
         const result = Buffer.concat(chunks);
         console.log("sending pdf");

         res.end(result);
      });
   } catch (error) {
      if(error === "Malformed table row, a cell is undefined."){
         console.error(error)
         return res.status(422).send(error)
      }
      console.error(error);
      res.sendStatus(500);
   }
});

app.listen(3000, () => {
   console.log("server listening");
});
