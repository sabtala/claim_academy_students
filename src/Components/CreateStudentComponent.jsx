import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class CreateStudentComponent extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phoneNumber: ''
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
      }

      saveStudent = (e) => {
          e.preventDefault();
          let student = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, address: this.state.address, phoneNumber: this.state.phoneNumber};
          console.log('student =>' + JSON.stringify(student));
          StudentService.createStudent(student).then(res =>{
            this.props.history.push('/students');
          });
      }
      changeFirstNameHandler = (event) => {
          this.setState({firstName: event.target.value});
      } 

      changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    } 

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    } 

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    } 

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    } 

    cancel(){
        this.props.history.push('/students');
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "car col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                         value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                         value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                         value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                         value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                         value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
