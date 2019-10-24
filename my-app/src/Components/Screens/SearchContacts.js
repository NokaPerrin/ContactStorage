import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

export default class SearchContacts extends Component {
    render() {
        return (
            <div className="HomeBtn">
                Search your SearchContacts
                <br></br>
                <Link className="Add" to="/" >Back Home</Link>
            </div>
        )
    }

}