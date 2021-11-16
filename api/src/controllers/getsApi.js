const axios= require('axios');
const {
    ALL_POKEMONS_API,
    POK_PARAMS_API,  //concatenar id
    POK_QUERY_API, //concatenar name
}= require("../../config/endPoints");  //endpoint para las llamadas.

async function Detail(arr, stop= 40) {
    let countBreak =0;
    let i=0;
    let result=[];
    while(countBreak<stop && i<arr.length){
        let infoPk = await axios.get(arr[i].url)
            .then(el =>{
                return {
                    imagen: {fija: el.data.sprites.versions["generation-iv"].platinum.front_default,
                            gif: el.data.sprites.versions["generation-v"]["black-white"].animated.front_default},
                    nombre: el.data.name,
                    tipos: el.data.types.map(e=> e.type.name),   //types[0].type.name
                    id: el.data.id,
                    vida:el.data.stats[0].base_stat,
                    fuerza:el.data.stats[1].base_stat,
                    defenza:el.data.stats[2].base_stat,
                    velocidad:el.data.stats[5].base_stat,
                    altura: el.data.height,   //imagen animada: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
                    peso: el.data.weight,
                }
            })
        i= i+1;
        countBreak++;
        result=[...result, infoPk];
    }
    
    return result;
} 
async function asyncGetAux(urlAux) {
    let inform = await axios.get(urlAux)
            .then(el =>{
                return {
                    result: el.data.results,
                }
            })
            return inform.result
} 

async function asyncGetApi( urlpath= ALL_POKEMONS_API, dato = null) {
    switch (urlpath){
        case ALL_POKEMONS_API:
            let info = await axios.get(urlpath)
                    .then(el =>{
                        return {
                            result: el.data.results,
                            link: el.data.next,
                        }})
            let complemento= await asyncGetAux(info.link);
            const arreglo= info.result.concat(complemento);
            let freno= 40 - dato;
            return await Detail(arreglo, freno);

        case POK_PARAMS_API:
            console.log("desde params api"+ dato);
            const resultParam = Detail([{url:`${POK_PARAMS_API}${dato}`}], 1);
            return resultParam
            
        case POK_QUERY_API:
            console.log("desde query api"+dato);
            const resultQuery=  Detail([{url:`${urlpath}name=${dato}`}], 1);
            return resultQuery
        default:{
            console.log("entró al default");
            let infor = await axios.get(urlpath)
            .then(el => el.data.results)
            return infor
        }
    }
}
module.exports= {
    Detail,
    asyncGetApi,
    asyncGetAux,
}
