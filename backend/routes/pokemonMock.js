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

//metodo GET
router.get('/api/pokemonmock/:id', async function (req,res) {
    let pokemon = arr_PokemonMock.find(
        (x) => x.Id == req.params.id
    );
    if (pokemon) res.json(pokemon);
    else res.status(404).json({message: 'pokemon not found'});
});

//metodo POST
router.post('/api/pokemonmock/', (req,res) => {
    const { Nombre } = req.body;
    let pokemon = {
        Id: Math.floor(Math.random()*100),
        Nombre
    };
    arr_PokemonMock.push(pokemon);
    res.status(201).json(pokemon);
});

//metodo PUT
router.put('/api/pokemonmock/:id', (req,res) => {
    let pokemon = arr_PokemonMock.find(
        (x) => x.Id == req.params.id
    );

    if (pokemon) {
        const { Nombre } = req.body;
        pokemon.Nombre = Nombre;
        res.json({message: 'pokemon actualizado'});
    } else {
        res.status(404).json({message: 'pokemon no encontrado'})
    }
});

//metodo DELETE
router.delete('/api/pokemonmock/:id', (req,res) => {
    let pokemon = arr_PokemonMock.find(
        (x) => x.Id == req.params.id
    );

    if (pokemon) {
        arr_PokemonMock = arr_PokemonMock.filter(
            (x) => x.Id != req.params.id
        );
        res.json({message: 'pokemon eliminado'});
    } else {
        res.status(404).json({message: 'pokemon no encontrado'})
    }
});

module.exports = router;