import './App.css';
import {Route, Switch } from 'react-router-dom';

import Home from './modules/components/Home';
import LandingPage from './modules/components/LandingPage';
import CreaPokemon from './modules/components/CreaPokemon';
import Detail from './modules/components/Detail';
import { Router } from 'react-router';
import {createGlobalStyle} from 'styled-components';
import Logo from './modules/components/Logo';

function App() {
  const GlobalStyle= createGlobalStyle`
  a{
    text-decoration: none;
  }
  select{
    padding: 1.2rem;
    background:#2F4F4F;
    color:#AFEEEE;
  }
  input{
    padding: 0.8rem;
    margin-bottom:0.5rem ;
}
label{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
button{
  border-radius: 5px;
  padding: 5px;
  background:#fff; 
  color: rgb(15, 95, 95);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
}
h1{
  margin: auto 0;
}
p{
  margin:0;
}

  `;
  return (
    <div className="App">
      <GlobalStyle/>
      <Logo className="logo"/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact  path='/pokemons' component={Home} />
        <Route exact path='/crear' component={CreaPokemon} />
        <Route exact path='/pokemons/:id' component={Detail} />
        </Switch>
        
    </div>

  );
}

export default App;
