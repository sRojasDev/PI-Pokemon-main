import React, {useEffect, useState} from "react";
import {useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getTypes, postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./creaPoke.css";
export const arrTipos=["Normal" ,"Pelea" , "Volador" , "Veneno" , "Tierra", "Roca", "Insecto", "Fantasma", "Acero", "Fuego", "Agua" , "Hierba", "Eléctrico" , "Psíquico", "Hielo", "Dragón", "Oscuro", "Hada", "Desconocido", "Sombra"];
function validarSubmit(input, sub=false){
    let errors = {};
    if(sub && !input.nombre ) { 
        errors.submit=false;
        console.log(errors);
        return errors.submit;
    }
    else if (sub && !input.tipos[0]){
        errors.submit=false;
        console.log(errors);
        return errors.submit;
    }
    
    else if(!input.nombre ){ 
        errors.nombre="Debe tener un Nombre"; 
        errors.Nosubmit=false;
    }
    else if(!input.vida){  errors.vida="Agrega su valor Vida" }
    else if(!input.fuerza){  errors.fuerza="Necesita la propiedad Fuerza" }
    else if(!input.defensa){  errors.defensa="La propiedad Defensa no puede estar vacía"}
    else if(!input.velocidad){  errors.velocidad="Define cual será su Velocidad"}
    else if(!input.altura){  errors.altura="Otorgale una Altura" }
    else if(!input.peso){  errors.peso="Establece su Peso" }
    else if(!input.tipos){  
        errors.tipos="Debe tener por lo menos un tipo de pokémon definido";
}
    else if(sub && !input.tipos){ errors.tipos="Debes agregar por lo menos un tipo de Pokémon";
    errors.submit=false;
    return errors.submit;
}
    
    // else if(input.nombre && input.tipos) { 
    //     errors.submit=true;
    //     console.log(errors);
    //     return errors.submit;
    // }
    return errors  
}


export default function CreaPokemon(){
    const dispach= useDispatch();
    const history= useHistory();
    const tipos= useSelector((state)=> state.tipos);
    const initialInput={
        nombre:"",
        imagen:"",
        vida:0,
        fuerza:0,
        defensa:0,
        velocidad:0,
        altura: 0,
        peso: 0,
        tipos: [],
        ofDB: true,
    }

    const [error, setError] = useState({});
    const [input, setInput]= useState(initialInput);
    useEffect(()=>{
        dispach(getTypes());
    }, [])
    

    function validatePokemon(e) {
        
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        setError(validarSubmit({
            ...input,
            [e.target.name]: e.target.value,
        }));

        e.target.placeholder=e.target.value;
        e.target.value="";
    }
    function todobien() {
        dispach(postPokemon(input));
        alert("Buen trabajo! Se creó tu pokémon correctamente");
        setInput(initialInput);
        history.push('/pokemons');
    }

    function handleCheck(e){
        let rep = input.tipos.indexOf(e.target.value);
        if (rep !== -1 && e.target.checked) return setError("No se puede agregar un tipo repetido");
        if (-1 !== rep) return setInput({ ...input,  tipos: input.tipos.filter(el => el.name !== e.target.value) });
        if(input.tipos.length <2 ){ 
            if (!e.target.checked && rep !== -1){
                console.log("primerif");
                setInput({
                    ...input,
                    tipos: input.tipos.splice( rep, 1 ),
                })
            } else  {
                setInput({
                    ...input,
                    tipos: [...input.tipos, e.target.name],
                })
            } //setError("Solo se pueden agregar 2 tipos");
        }
        if(2 <= input.tipos.lentgh){
            console.log("segundo if check "+e.target.checked)
            if(e.target.checked){
                let repetido= input.tipos.includes(e.target.value)? setError("No se puede agregar un tipo repetido"):setInput({
                    ...input,
                    tipos:[...input.tipos, e.target.value]
                })
                console.log("repetido"+repetido);
            }  else {
                setInput({
                ...input,
                tipos: input.tipos.filter(el => el.name !== e.target.value),
            })
        }
        }
    console.log(input.tipos);
    }
    function vaciarCampos(e){
        e.preventDefault();
        renderChecksTipos();
        setInput(initialInput);
        setError({});
        console.log(input);
    }
    function renderChecksTipos(){
        return tipos?.map( tip => { 
            return (<label htmlFor="" key={tip.name}> {tip.name}
            <input type="checkbox" value={tip.name}  name={tip.name} onChange={e=>handleCheck(e)} /> 
            </label> )})  
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        let ok= validarSubmit(input, true);
        if (ok) console.log(`se cargó img= ${input.imagen}`);
        (ok?todobien():alert("Para cargar un nuevo pokemon completa sus datos, la url de imagen puede omitirse"));
        
    }

    return (
        <div>
            <Link to={"/pokemons"} > <button>Volver</button></Link>
            <h2>Creá tu Pokémon</h2>
            <form onSubmit={e=>{handleSubmit(e)}}  className="form">
                <div className="inputs">
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={input.nombre}  name="nombre" placeholder="totoro" 
                        className={error.nombre && 'danger'} 
                        onChange={(e) => validatePokemon(e)} />
                    {!error.nombre ? null : <span className="error">{error.nombre}</span>} 
                </div>
                <div>
                <label htmlFor="">Imagen:</label>
                    <input type="text" value={input.imagen}  name="imagen"  placeholder="url de imagen"
                        className={error.imagen && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                      {/* !error ? null : <span>{}</span>}  */}
                </div>
                <div>
                    <label htmlFor="">Vida:</label>
                    <input type="number" value={input.vida}  name="vida"  placeholder="60"
                        className={error.vida && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.vida && error.nombre ? null : <span className="error">{error.vida}</span>}
                </div>
                <div>
                    <label htmlFor="">Fuerza:</label>
                    <input type="number" value={input.fuerza} name="fuerza"  placeholder="53"
                        className={error.fuerza && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.fuerza  ? null : <span className="error">{error.fuerza}</span>}
                </div>
                <div>
                    <label htmlFor="">Defensa:</label>
                    <input type="number" value={input.defensa}  name="defensa" placeholder="45"
                        className={error.defensa && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.defensa ? null : <span className="error">{error.defensa}</span>}
                </div>
                <div>
                    <label htmlFor="">Velocidad:</label>
                    <input type="number" value={input.velocidad}  name="velocidad" placeholder="64"
                        className={error.velocidad && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.velocidad ? null : <span className="error">{error.velocidad}</span>}
                </div>
                <div>
                    <label htmlFor="">Altura:</label>
                    <input type="number" value={input.altura}  name="altura" placeholder="90"
                        className={error.altura && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.altura ? null : <span className="error" >{error.altura}</span>}
                </div>
                <div>
                    <label htmlFor="">Peso:</label>
                    <input type="number" value={input.peso}  name="peso" placeholder="120"
                        className={error.peso && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error.peso ? null : <span  className="error">{error.peso}</span>}
                </div>
                </div>
                <br/>
                <label htmlFor="" > <p> Tipos:</p> </label>
                <div className="tiposChecks">
                    {/* <label htmlFor=""> <p> Tipos:</p> </label> */}
                
                {   tipos?.map( tip => { 
                    let index= tipos.indexOf(tip);
                    return (<label htmlFor="" key={tip.name}> 
                    <input type="checkbox" value={tip.name}  name={tip.name} onChange={e=>handleCheck(e)} />  {` ${arrTipos[index]}`} 
                    </label> )})
                }
                <ul> <li>{ input.tipos?.map(el=>el + " , ") }</li></ul>
                
                <button onClick={e=>vaciarCampos(e)} className="btn" > Vaciar Campos</button>
                <button type="submit" className="btn"  onClick={e=>handleSubmit(e)} > Crear Pokémon </button> 
                </div> 
            </form>
        </div>
    )
}