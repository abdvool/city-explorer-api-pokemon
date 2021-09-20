'use strict';

const { response, request } = require('express');
const express = require ('express');

const server = express();

const pokeData = require('./assets/poke.json')

const PORT = 3001;



server.get('/test',(request,response)=>{

    response.send('API server wew')
})



//http://localhost:3001/pokemon
server.get('/pokemon',(req,res)=>{

    res.send(pokeData);
    
    })

    



//http://localhost:3001/pokemon?pokeName=charmander
server.get('/pokemon',(req,res)=>{

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