import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Admin extends Component {
    render() {
        return (
            <div>
                Awesome! You are logged in.
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
