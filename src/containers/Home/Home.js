import React, {Component} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import VideoFeed from '../../components/VideoFeed/VideoFeed'
import './home.css'


class Home extends Component {
    componentWillMount(){}

    componentDidMount(){}

    render(){
        return (
            <div>

                <div className="col-md-12">
                    <div className="col-md-7 top-video">
                        <div className="col-md-12">
                            <h1>Top Video Palermo</h1>
                            <div>
                                <img alt="" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/61hGibmhRgL.jpg"/>
                            </div>
                            <h2>Test Text</h2>
                        </div>
                    </div>
                    <div className="col-md-4 video-feed-container">
                        <VideoFeed />
                    </div>
                </div>
            </div>
        )
    }
}


export default Home
