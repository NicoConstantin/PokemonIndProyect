const axios = require('axios');
const {Type} = require('../../db.js');
const {urlType} = require('../config/index.js');
let flag = true
function getTypes (req,res,next){
    if (flag){
        return axios.get(urlType)
        .then(response=>{
            response.data.results.forEach(type=>{
                Type.create({
                    type: type.name
                })
            })
        })
        .then(()=> {
            flag = false
            return res.sendStatus(200)
        })
        .catch(e=>next(e))
    }
    return res.sendStatus(208)
}

function getDBTypes (req,res,next){
    Type.findAll()
    .then((response)=> res.send(response))
    .catch(e=>next(e))
}

module.exports = {
    getTypes,
    getDBTypes
}