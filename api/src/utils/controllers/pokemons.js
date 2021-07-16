const axios = require ('axios');
const {Pokemon,Type} = require('../../db.js');
const {urlPoke} = require('../config/index.js')
const {partInfoGetter,fullInfoGetter,promiseGenerator,InfoGetterDB} = require ('../functions/routesFunctions.js')

function getPokemon (req,res,next){ 
    let {name} = req.query;
    let limitAxios = 40;
    if(!name){
            axios.get(`${urlPoke}?limit=${limitAxios}`)
            .then(response => response.data.results)
            .then(pokeApi =>{ 
                let array1 = pokeApi.map(pok=>axios.get(pok.url));
                let array2 = Pokemon.findAll({
                    attributes:["name","img","str"],
                    include: Type
                });
                return Promise.all(array1.concat(array2));
            })
            .then(response=>{
                let API = response.splice(0,limitAxios).map(partInfoGetter);
                let DB = response[0].map(poke=>{
                    return {
                        name : poke.name,
                        img : poke.img,
                        str: poke.str,
                        type: poke.types.map(relation=> relation.type)
                    }
                })
                return res.send([API,DB]);
            })
            .catch(e => next(e))
    }
    if(name){
        return res.redirect(`/pokemons/name?name=${name}`); //para no seguir agregando contenido a esta ruta
    };
}
function getPokemonName(req,res,next){ 
    let findedDB = Pokemon.findOne({
            attributes: {exclude:["createdAt","updatedAt"]},
            where:{
                name : req.query.name
            },
            include: Type
        });
    let findedAPI = axios.get(`${urlPoke}/${req.query.name}`);
    Promise.allSettled([findedDB,findedAPI])
    .then(response=>{
        if (response[1].status === "fulfilled"){
            return res.send(fullInfoGetter(response[1].value));
        }
        if(response[0].value){
            let pokemon = InfoGetterDB(response[0].value);
            return res.send(pokemon);
        }
        else{
            return res.status(404).send("doesn´t exist a pokemon with that name");
        }
    })
    .catch(e=>next(e))
}

function getPokemonId (req,res,next){
    let idParams = req.params.idPokemon;
    if(idParams%1 === 0){ //revisar
        axios.get(`${urlPoke}/${idParams}`) 
        .then(fullInfoGetter)
        .then(response=>res.send(response))
        .catch(e=>next(e))
    }
    else {
        Pokemon.findOne({
            attributes: {exclude:["createdAt","updatedAt"]},
            where:{
                id : idParams
            },
            include: Type
        })
        .then((pokefind)=>{
            let finded = InfoGetterDB(pokefind)
            res.send(finded)
        })
        .catch(e=>next(e))
    }
}

function postPokemon (req,res,next){
    Promise.allSettled(promiseGenerator(req,urlPoke))
    .then(response => {
        if(response[2].value){
            throw new Error ("you can't create a pokemon that exists");
        }
        let typesIds = response[0].value.map(value => {
            return value.dataValues.id;
        });
        let obj = {
            pCreated : response[1].value,
            typesIds
        }
        return obj;
    })
    .then(obj => {
        const {pCreated,typesIds} = obj;
        pCreated.addTypes(typesIds);
        res.send(pCreated);
    })
    .catch(e=>next(e))
    }

module.exports = {
    getPokemon,
    getPokemonId,
    getPokemonName,
    postPokemon
}