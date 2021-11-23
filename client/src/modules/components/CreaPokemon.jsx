import React, {useEffect, useState} from "react";
import {useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getTypes, postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./creaPoke.css";

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

    const [error, setError] = useState('');
    const [input, setInput]= useState(initialInput);
    useEffect(()=>{
        dispach(getTypes());
    }, [])
    

    function validatePokemon(e) {
        switch (e.target.name) {
            case "vida":
            case "fuerza":
            case "defensa":
            case "velocidad":
                if((e.target.value-1) < 0 || 149 < e.target.value-1 ) {
                    setError('debe ingresar un valor entre 1 y 150');
                } else {
                    setError('');
                }
                break;
            case 'imagen':
                console.log("entró en case imagen verificar aquí");
                //setError('Supongamos que mandaste cualquiera la imagen');
                break;
            default:
                    console.log("entró al default");
                    break;
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input[`${e.target.name}`]);
        e.target.placeholder=e.target.value;
        e.target.value="";
    }

    function handleCheck(e){
        let rep = input.tipos.indexOf(e.target.value);
        if (rep != -1 && e.target.checked) return setError("No se puede agregar un tipo repetido");
        if (-1 != rep) return setInput({ ...input,  tipos: input.tipos.filter(el => el.name !== e.target.value) });
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
        dispach(postPokemon(input));
        alert("Buen trabajo! Se creó tu pokémon correctamente");
        setInput(initialInput);
        history.push('/pokemons');
    }

    return (
        <div>
            <Link to={"/pokemons"} > <button>Volver</button></Link>
            <h2>Creá tu Pokémon</h2>
            <form onSubmit={e=>{handleSubmit(e)}}>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={input.nombre}  name="nombre" placeholder="totoro" 
                        className={error && 'danger'} 
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>} 
                </div>
                <div>
                <label htmlFor="">Imagen:</label>
                    <input type="text" value={input.imagen}  name="imagen"  placeholder="url de imagen"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>} 
                </div>
                <div>
                    <label htmlFor="">Vida:</label>
                    <input type="number" value={input.vida}  name="vida"  placeholder="60"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor="">Fuerza:</label>
                    <input type="number" value={input.fuerza} name="fuerza"  placeholder="53"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor="">Defensa:</label>
                    <input type="number" value={input.defensa}  name="defensa" placeholder="45"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor="">Velocidad:</label>
                    <input type="number" value={input.velocidad}  name="velocidad" placeholder="64"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor="">Altura:</label>
                    <input type="number" value={input.altura}  name="altura" placeholder="90"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor="">Peso:</label>
                    <input type="number" value={input.peso}  name="peso" placeholder="120"
                        className={error && 'danger'}    
                        onChange={(e) => validatePokemon(e)} />
                    {!error ? null : <span>{error}</span>}
                </div>
                <div>
                    <label htmlFor=""> <p> Tipos:</p> </label>
                
                {   tipos?.map( tip => { 
                    return (<label htmlFor="" key={tip.name}> {tip.name}
                    <input type="checkbox" value={tip.name}  name={tip.name} onChange={e=>handleCheck(e)} /> 
                    </label> )})
                }
                <ul> <li>{ input.tipos?.map(el=>el + " , ") }</li></ul>
                </div> 
                <button onClick={e=>vaciarCampos(e)} > Vaciar Campos</button>
                <button type="submit" > Crear Pokémon </button> 
            </form>
        </div>
    )
}