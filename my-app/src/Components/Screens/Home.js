import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="HomeBtn">
                <Link className="Add" to="/add-contact" >Add Contact</Link>
                <Link className="View" to="/search-contacts" >View Contacts</Link>
            </div>
        )
    }

}