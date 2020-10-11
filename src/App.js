import React from 'react';
import BookList from './components/BookList';
import Search from './components/Search';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Show from './components/Show';

function App() {
  return (
    <>
    <Router>
      <Switch> 
        <Route exact path="/" component={Search}/> 
        <Route exact path="/list" component={BookList}/> 
        <Route path="/show/:id" component={Show}/>
      </Switch>
    </Router>     
    </>
  );
}

export default App;
