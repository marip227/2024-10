const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Bienvenidos");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando sitio en el puerto ${port}`);
});