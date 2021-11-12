
function getAllPoke(req,res,next){
    try{
        console.log("ok");
        res.send('funciona la ruta get pokemons');
    } catch(error){
        next(error);
    }    
}
function getPokemonById(req,res,next){
    try{
        res.send('funciona la ruta mostrar por ID');
    } catch(error){
        next(error);
    }    
}
module.exports= {
    getAllPoke,
    getPokemonById,
};