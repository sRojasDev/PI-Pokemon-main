import './App.css';
import {Route, Switch } from 'react-router-dom';

import Home from './modules/components/Home';
import LandingPage from './modules/components/LandingPage';
import CreaPokemon from './modules/components/CreaPokemon';
import Detail from './modules/components/Detail';

function App() {
  return (
    <div className="App">
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
