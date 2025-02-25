const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

const carros = [];


const renderPage = (page) => (req, res) => res.sendFile(path.join(PUBLIC_DIR, `${page}.html`));

app.get("/", renderPage("index"));
app.get("/lista-carros", renderPage("lista-carros"));
app.get("/formulario", renderPage("formulario"));

app.post("/carro", (req, res) => {
  const { modelo, marca, ano, cor, quilometragem, valor } = req.body;

  const novoCarro = { modelo, marca, ano, cor, quilometragem, valor };
  carros.push(novoCarro);
  console.log("Carro cadastrado:", novoCarro);

  res.send("Carro cadastrado com sucesso!");
});
app.get("/carro",(req,res)=>{
  res.send(carros);
})


app.use((req, res) => res.status(404).send("Página não encontrada!"));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
