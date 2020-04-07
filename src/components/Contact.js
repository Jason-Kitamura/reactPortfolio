import React from 'react';

class Contact extends React.Component{
    render() {
        return(
            <div>
                <h3 className="center">Email Me</h3>
                <form className="contact1-form validate-form">
                    <div className="row">
                        <div className="col-sm-9" id="emailForm">
                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="email" className="form-control" id="userName" placeholder="John Smith"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label for="exampleFormControlInput1">Email</label>
                                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label for="exampleFormControlInput1">Subject</label>
                                    <input type="email" className="form-control" id="emailSubject" placeholder="Hello"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Message</label>
                                <input type="email" className="form-control" id="emailMessage"/>
                            </div>
                            <button id="email-Btn">Send <i className="fa fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                </form> 
            </div>
        )
    }
}

export default Contact;