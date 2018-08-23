import React, { Component } from 'react';
import veggies from '../Data/vegetables.json'

class Categories extends Component {
    componentDidMount()  {
        console.log({ data: veggies, keys: Object.keys(veggies)})
    }
    render() {
        return (
            <section>
                <h3>What veggie are you looking for today?</h3>
                <input type="text"></input>
                <button>search</button>
            </section>
        );
    }
}

export default Categories
