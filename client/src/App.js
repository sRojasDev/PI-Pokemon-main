import './App.css';
import {Route, Switch } from 'react-router-dom';

import Home from './modules/components/Home';
import LandingPage from './modules/components/LandingPage';
import CreaPokemon from './modules/components/CreaPokemon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/pokemons' component={Home} />
        <Route path='/crear' component={CreaPokemon} />
        </Switch>
    </div>

  );
}

export default App;
