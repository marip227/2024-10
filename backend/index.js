const express = require("express");
const pokemonMockrouter = require("./routes/pokemonMock.js")

const app = express();

app.use(pokemonMockrouter);

app.get("/", (req,res) => {
    res.send("Bienvenidos");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando sitio en el puerto ${port}`);
});