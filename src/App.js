import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './containers/Home/Home'
import Categories from './containers/Categories/Categories'
import Navigation from './components/Navigation/Navigation'
import Signin from './components/Auth/signin'
import './App.css';


const App = () => {
    return(
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/signin" component={Signin} />
            </div>
        </Router>
    )
}

export default App;
