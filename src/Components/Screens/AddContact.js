import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="HomeBtn">
                This is where you are going to add a contact.
                <br></br>
                <Link className="View" to="/" >Go Home</Link>
            </div>
        )
    }

}