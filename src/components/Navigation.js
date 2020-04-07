import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class Navigation extends React.Component{
    render() {
        return(
            <div className="row">
                <div className="col col-sm-6" id="navigation">
                    <div className="row">
                        <Link to = "/" className="col-4 pointer" id="aboutMe" >About Me</Link>
                        <Link to = "/portfolio" className="col-4 pointer" id="portfolio" >Portfolio</Link>
                        <Link to = "/contact" className="col-4 pointer" id="contact" >Contact</Link>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Navigation;