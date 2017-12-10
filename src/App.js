import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home'
import Categories from './containers/Categories/Categories'
import Navigation from './components/Navigation/Navigation'
import './App.css';


const App = () => {
    return(
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
            </div>
        </Router>
    )
}

export default App;
