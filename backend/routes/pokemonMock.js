const express = require("express");
const router = express.Router();

let arr_PokemonMock = [
    {
        "Id": 1,
        "Nombre": "Bulbasaur"
    },
    {
        "Id": 2,
        "Nombre": "Ivysaur"
    },{
        "Id": 3,
        "Nombre": "Venusaur"
    },{
        "Id": 4,
        "Nombre": "Charmander"
    },{
        "Id": 5,
        "Nombre": "Charmeleon"
    },{
        "Id": 6,
        "Nombre": "Charizard"
    },{
        "Id": 7,
        "Nombre": "Squirtle"
    },{
        "Id": 8,
        "Nombre": "Wartortle"
    },{
        "Id": 9,
        "Nombre": "Blastoise"
    },
];

router.get('/api/pokemonmock', async function (req,res) {
    res.json(arr_PokemonMock);
});

router.get('/api/pokemonmock/:id', async function (req,res) {
    let pokemon = arr_PokemonMock.find(
        (x) => x.Id == req.params.id
    );
    if (pokemon) res.json(pokemon);
    else res.status(404).json({message: 'pokemon not found'});
});

module.exports = router;