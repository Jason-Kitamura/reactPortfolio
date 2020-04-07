import React from 'react';
import realtorGif from '../assets/realtor.gif';
import farmersFriend from '../assets/farmer.gif';
import CMS from '../assets/cmsGif.gif';

class Portfolio extends React.Component{
    constructor(){
        super();
        this.state = {
            project : 'realtor'
        }
    }
    async changeRealtor( ){
        await this.setState( { project : 'realtor'});
        console.log('project', this.state.project)
    }
    async changeFarmer( ){
        await this.setState( { project : 'farmer'});
        console.log('project', this.state.project)
    }
    async changeCMS( ){
        await this.setState( { project : 'cms'});
        console.log('project', this.state.project)
    }
   

    render() {
        const project = this.state.project;
        let description;
        let gif;
        if( project === 'realtor' ){
            description = 'MY REALTOR is a real estate app designed for real estate agents. This is app allows them to create a customizable portfolio with their business information as well as add their current listings for users to view. Users can also email the real eastate agent directly from their profile page';
            gif = realtorGif
        } else if ( project === 'farmer'){
            description = "FARMER'S FRIEND is an app designed to help farmers of all scales to grow healthier crops. It uses a users location to determine environmental statistics like temperature, humidity, and soil moisture to suggest what crops are best suited for their location. Farmer's Friend also provides usefull information on how to grow the recommended crops";
            gif = farmersFriend
        } else if ( project === 'cms' ) {
            description = 'This is a Content Management System designed for managers to track their employees by role, salary and department. Managers can add departments and roles, add or remove employees, as well as update their salary, job title, and department info. Managers can then view tables that list their inputed data by employee. This app uses MySQL to store the information';
            gif = CMS
        }
        return(
            <div>
                <h3 className="center">Portfolio</h3>
                <div className="row">
                    <div className="col-sm-9 center" id="projects">
                        <div className="row">
                            <div className="col-sm-4 pointer" id="aboutMe" onClick={this.changeRealtor.bind(this)}>Realtor App</div>
                            <div className="col-sm-4 pointer" id="portfolio" onClick={this.changeFarmer.bind(this)}>Farmer's Friend</div>
                            <div className="col-sm-4 pointer" id="contact" onClick={this.changeCMS.bind(this)}>CMS</div>
                        </div>
                    </div>
                </div>
                <div id="projectDescription"className="center">
                    {description}
                </div>
                <div className="center" id="gifArea">
                    <img src={gif} id="gif" alt="realtorgif"/>
                </div>
                <br/>
            </div>
        )
    }
}

export default Portfolio;