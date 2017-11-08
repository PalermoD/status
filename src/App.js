import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home'
import Categories from './containers/Categories/Categories'
import './App.css';


const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/categories" component={Categories} />
            </Switch>
        </Router>
    )
}

export default App;
