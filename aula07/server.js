const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
        <form action="/" method="post">
        Nome: <input type="text" name="name" placeholder="name">
        <button type="submit">Enviar Nome</button>
    `);
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send('Recebi o seu nome: ');
});



app.get("/contact", (req, res) => {
  res.send('Contact me at: <a href="mailto:leo@fontolan.com.br">');
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
