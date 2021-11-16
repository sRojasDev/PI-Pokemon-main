const { TYPES_API } = require("../../config/endPoints");
const {asyncGetApi} = require('./getsApi');
const { Tipo } = require('../db'); //importo modelo conectado

let paso=0;

async function contrTypes(req,res,next){ 
    if(!paso) {
            const tipos= await asyncGetApi(TYPES_API)
            
            const arrTipos= tipos.map(el=>el.name);
            console.log(arrTipos);
      // return res.send(arrTipos);
            arrTipos.forEach(elem => {
                Tipo.findOrCreate({
                    where: { name: elem }
                });
            });
            const verTipos=await Tipo.findAll()
                    .catch( err => next(err) )
        return res.send(verTipos);    
    }else{
        console.log("llegó al else, ya pasó");
        const types=await Tipo.findAll()
        .catch( err => next(err) )
return res.send(types);
    }
}
module.exports= contrTypes;
