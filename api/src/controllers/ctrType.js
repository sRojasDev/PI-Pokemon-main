function contrTypes(req,res,next){
    try{
        res.send('funciona la ruta Types');
    } catch(error){
        next(error);
    }    
}
module.exports= contrTypes;
