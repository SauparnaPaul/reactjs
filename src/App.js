import React from 'react';
import BookList from './components/BookList';
import Search from './components/Search';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Show from './components/Show';
import LoginComponent from './components/LoginComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';

function App() {
  return (
    <>
    <Router>
      <Switch> 
        <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/login" component={LoginComponent}/>
        <AuthenticatedRoute exact path="/search" component={Search}/> 
        <AuthenticatedRoute exact path="/list" component={BookList}/> 
        <AuthenticatedRoute exact path="/show/:id" component={Show}/>
      </Switch>
    </Router>     
    </>
  );
}

export default App;
