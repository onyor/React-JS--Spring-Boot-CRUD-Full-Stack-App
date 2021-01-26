import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">Employee Management App</a>
                            <a href="http://localhost:3000/employees" className="navbar-brand">Employees</a>
                            <a href="http://localhost:3000/add-employee/_add" className="navbar-brand">Add Epployee</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
