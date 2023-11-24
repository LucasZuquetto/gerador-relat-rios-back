import express from "express";
import PdfPrinter from "pdfmake";
import path from "path";

const app = express();

const __dirname = path.resolve(path.dirname(""));

//TODO
//receber os dados e criar o pdf
//estilizar o pdf
//criar um client side
//deploy

const data = [
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço: "Sem Endereço",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "Sem Site",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "RVP Imóveis",
      endereço:
         "R. Eng. Geraldo Magela de Mattos Sanábio, 422 - Recanto da Mata, Juiz de Fora - MG, 36083-802",
      site: "https://www.rvpimoveis.com.br/",
      apresentamos: "S",
      apresentamosNao: "",
   },
   {
      profissionais: "SMART HOUSE NEGÓCIOS IMOBILIÁRIOS",
      endereço:
         "Av. Barão do Rio Branco, 1820 - loja 03 - Centro, Juiz de Fora - MG, 36015-510",
      site: "http://www.smarthouseimob.com.br/",
      apresentamos: "",
      apresentamosNao: "Em andamento",
   },
];

app.get("/report", async (req, res) => {
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

   const body = [];
   for await (let dado of data) {
      const rows = new Array();
      rows.push(dado.profissionais);
      rows.push(dado.endereço);
      rows.push({ text: dado.site, color: "blue" });
      rows.push(dado.apresentamos);
      rows.push(dado.apresentamosNao);
      body.push(rows);
   }

   const docDefinitions = {
      background: {
         image: path.join(__dirname, "src", "OIP.jpeg"),
         opacity: 0.3,
         margin: [5, 300],
      },
      defaultStyle: { font: "Helvetica", fontSize: 10, alignment: "center" },
      header: ["lala"],
      pageBreakBefore: function (
         currentNode,
         followingNodesOnPage,
         nodesOnNextPage,
         previousNodesOnPage
      ) {
         return (
            currentNode.headlineLevel === 1 && followingNodesOnPage.length === 1
         );
      },
      content: [
         {
            table: {
               body: [
                  [
                     {
                        text: "PROFISSIONAIS/EMPRESAS",
                        bold: true,
                        color: "#434CD7",
                     },
                     {
                        text: "ENDEREÇO",
                        bold: true,
                        color: "#434CD7",
                     },
                     {
                        text: "SITE",
                        bold: true,
                        color: "#434CD7",
                     },
                     {
                        text: "APRESENTAMOS S/N",
                        bold: true,
                        colSpan: 2,
                        color: "#434CD7",
                     },
                     {},
                  ],
                  ...body,
               ],
               headerRows: 1,
               widths: [120, 150, 140, 30, 55],
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
               paddingRight: function (i, node) {
                  return i === node.table.widths.length - 1 ? 0 : 0;
               },
            },
         },
      ],
   };

   const pdfDoc = printer.createPdfKitDocument(docDefinitions);
   const chunks = [];
   pdfDoc.on("data", (chunk) => {
      chunks.push(chunk);
   });

   pdfDoc.end();

   pdfDoc.on("end", () => {
      const result = Buffer.concat(chunks);
      res.end(result);
   });
});

app.listen(3000, () => {
   console.log("server listening");
});
