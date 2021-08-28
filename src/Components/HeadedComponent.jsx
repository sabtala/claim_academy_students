import React, { Component } from 'react'

export default class HeadedComponent extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          
        };
      }
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://claimacademy.net" className="navbar-brand">Claim Academy Student Manegement</a></div>
                    </nav>
                </header>
                
            </div>
        )
    }
}
