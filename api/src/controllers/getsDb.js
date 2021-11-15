const { Pokemon } = require('../db.js'); //importo modelo conectado

function getByName_Bd (name){
    let promise = Pokemon.findAll({ where: { name: name }})
return  promise;
}  
function getById_Bd (id){
    let promise = Pokemon.findAll({ where: { id: id }})
return  promise;
}
function getAll_Bd (){
    let promise = Pokemon.findAll({
        include:{
            model: Tipo,
            attributes:['name'],
        }
    })
return  promise;
}  
    // return Pokemon.findAll({
    //     where: {
    //         name:name,
    //     }})
    //     .then( (pokemons) => res.send(pokemons))
    //     .catch((err)=>  next(err));
    // }   
module.exports= {
    getByName_Bd,
    getAll_Bd,
    getById_Bd,
};