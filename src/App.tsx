import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import './App.css';
import Home from './components/home';
import Create from './components/create';
import Update from "./components/update";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <header className="App-header">
          <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" exact component={Create} />
                    <Route path="/update/:id" component={Update} />
                </Switch>
           </Router>  
      </header>
    </div>
  );
}

export default App;
