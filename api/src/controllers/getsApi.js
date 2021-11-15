const axios= require('axios');
const {
    ALL_POKEMONS_API,
    POK_PARAMS_API,  //concatenar id
    POK_QUERY_API, //concatenar name
}= require("../../config/endPoints");  //endpoint para las llamadas.

async function Detail(arr) {
    let countBreak =0;
    let i=0;
    let result=[];
    while(countBreak<41 && i<arr.length){
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
        i+=1;
        countBreak = countBreak+1;
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
            return await Detail(arreglo);

        case POK_PARAMS_API:
            let apiParams = await axios.get(`${POK_PARAMS_API}${dato}`);
            console.log("desde params api"+ dato);
            const resultParam = apiParams.data;
            return resultParam
            
        case POK_QUERY_API:
            const apiQuery = await axios.get(`${urlpath}name=${dato}`)
            console.log("desde query api"+dato);
            const resultQuery = apiQuery.data;
            return resultQuery
        default:{
            console.log("entró al default");
            let infor = await axios.get(urlpath)
            .then(el =>{
                return {
                    result: el.data.results,
                }})
            return infor
        }
    }
}
module.exports= {
    Detail,
    asyncGetApi,
}
