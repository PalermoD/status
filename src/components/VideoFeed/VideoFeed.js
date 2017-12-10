import React, {Component} from 'react'
import './videoFeed.css'

class VideoFeed extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

                <div className="holder col-md-12">
                    <h2>Video Feed</h2>
                    <div className="video">
                        <img alt="" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/61hGibmhRgL.jpg"/>
                        <h4>Starwars meets paint</h4>
                    </div>
                    <hr/>
                    <div className="video">
                        <img alt="" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/61hGibmhRgL.jpg"/>
                        <h4>Starwars meets paint</h4>
                    </div>
                    <hr/>
                    <div className="video">
                        <img alt="" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/61hGibmhRgL.jpg"/>
                        <h4>Starwars meets paint</h4>
                    </div>
                    <hr/>
                    <div className="video">
                        <img alt="" className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/I/61hGibmhRgL.jpg"/>
                        <h4>Starwars meets paint</h4>
                    </div>
                    <hr/>
                </div>

        )
    }
}

export default VideoFeed
