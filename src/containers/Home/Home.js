import React, {Component} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './home.css'


class Home extends Component {
    componentWillMount(){}

    componentDidMount(){}

    render(){
        return (
            <div>
                <Navigation />
                <div className="container">
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}


export default Home
