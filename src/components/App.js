import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Quote from './Quote';
import Calculator from './Calculator';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
  );
}

export default App;
