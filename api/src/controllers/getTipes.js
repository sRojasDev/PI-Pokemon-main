//const axios= require('axios');
const { TYPES_API } = require("../../config/endPoints");
const {asyncGetApi} = require('./getsApi');
const { Tipo } = require('../db');
 
async function getTypes(){
    const tipos1= await asyncGetApi(TYPES_API)
            
    const arrTipos1= tipos1.map(el=>el.name);
    
    // return res.send(arrTipos);
    arrTipos1.forEach(elem => {
    Tipo.findOrCreate({
        where: { name: elem }
    });
});
    return (console.log("se cargaron los tipos de pokemon"));
}
module.exports= {
    getTypes
};