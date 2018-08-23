import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import veggies from './Data/vegetables.json'

class VegNav extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li>
                        <Link to="/">Home::: ALL VEGETABLES</Link>
                    </li>
                    <li>
                        <Link to="/potatoes">Potatoes</Link>
                    </li>
                    <li>
                        <Link to="/carrots">Carrots</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default VegNav;