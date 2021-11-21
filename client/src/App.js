import './App.css';
import LandingPage from './modules/components/LandingPage';
import {Route, Switch } from 'react-router-dom';

import Home from './modules/components/Home';
function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/pokemons' component={Home} />
        </Switch>
    </div>

  );
}

export default App;
