const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./connection/database");
const Pergunta = require("./connection/Pergunta");

connection.authenticate()
    .then(() => {
        console.log("Conexão feita com banco de dados!");
    })
    .catch((error) => {
        console.log(error);
    })

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/", function (req, res) {
    res.render("index");
});

app.get("/perguntar", function (req, res) {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
});