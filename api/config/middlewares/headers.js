const { PORT_FRONT} = process.env;
//headers
function setHeaders (req, res, next) {    //medlewere 
    res.header('Access-Control-Allow-Origin', `http://localhost:${PORT_FRONT}`); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');//headers que permite setear al front
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); //contiuar ejecutando
}
module.exports= setHeaders;