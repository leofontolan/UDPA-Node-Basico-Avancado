const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send('Recebi o seu nome: ' + req.body.name);
});

app.get("/", (req, res) => {
  res.send(`
        <form action="/" method="post">
        Nome: <input type="text" name="name" placeholder="name">
        <button type="submit">Enviar Nome</button>
    `);
});

app.get('/tests/:idUsers?', (req, res) => {
  console.log(req.params);
  console.log(res.send('OLÁ'));
});

app.get('/tests2', (req, res) => {
  console.log(req.query);
  console.log(res.send(req.query));
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
