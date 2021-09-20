'use strict';

const { response, request } = require('express');
const express = require ('express');

const server = express();

const pokeData = require('./assets/poke.json')

const PORT = process.env.PORT;


server.get('/test',(request,response)=>{

    response.send('API server wew')
})



//http://localhost:3001/pokemon
//https://pokemon301d33.herokuapp.com/pokemon  
server.get('/pokemon',(req,res)=>{

    res.send(pokeData);
    
    })

    



//localhost:3001/getPokemon?pokeName=charmander
//https://pokemon301d33.herokuapp.com/getPokemon?pokeName=charmander

server.get('/getPokemon',(req,res)=>{

    let pokemonName = req.query.pokeName

    console.log(req.query)
    console.log(req.query.pokeName)

    let pokeInfo = pokeData.results.find((item)=>{

        if(item.name === pokemonName){return item}
    })
    console.log('pokeInfo',pokeInfo)
    res.send(pokeInfo);

    })










    




server.get('*',(request,response)=>{

response.status(404).send('Error 404 page not found')

})





server.listen(PORT,()=>{

console.log(`listening on port ${PORT}`)


})