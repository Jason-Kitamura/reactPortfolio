import React from 'react';
import profilePic from '../assets/profilePic.png'

class AboutMe extends React.Component{
    render() {
        return(
            <div>
                <h3 className="center">About Me</h3>
                <div >
                    <img src={profilePic} alt="profile pic" id="profilePic"/>
                </div>
                    <br/>
                <div className="row">
                    <div className="col col-sm-6" id="docLinks">
                        <div className="row">
                            <div className="col-4"><a href="https://www.linkedin.com/in/jason-kitamura-7968a719b/" rel="noopener noreferrer" target="_blank"  style={{color: 'whitesmoke'}}><i className="fa fa-linkedin" ></i>&nbsp;LinkedIn</a></div>
                            <div className="col-4"><a href="https://github.com/Jason-Kitamura" target="_blank" rel="noopener noreferrer" style={{color: 'whitesmoke'}}><i className="fa fa-github"></i>&nbsp;Github</a></div>
                            <div className="col-4 pointer" id="resume"><i className="fa fa-download" ></i>&nbsp;Resume</div>
                        </div>
                    </div>
                </div>
                <div id="bio">
                    <p><b>"Hi, My name is Jason!</b></p>
                    <p> "I am a recent university graduate with a business degree in economics, currently exploring the world of web development. I spent my past few summers replainting cut-down forests in Northern Ontario and Alberta! For the past 6 months I worked for a Google parter called StrataPrime where I provided IT infrastructure support. I am looking to dive deeper into the tech world, hence why I am taking this course!"</p>
                </div>
            </div>
        )
    }
}

export default AboutMe;