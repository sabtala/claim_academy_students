import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      students: [],
    };
  }
 
  render() {
    return (
      <div>
          <h2 className="text-center">Students List</h2>

          <div className = "row">

              <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email </th>
                                <th> Address </th>
                                <th> Phone Number</th>
                                <th> Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>{student.phoneNumber}</td>
                                    </tr>
                                )
                            }

                        </tbody>


              </table>

          </div>
       
      </div>
    );
  }
}
 
export default App;