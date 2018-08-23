import React, { Component } from 'react';
import veggies from '../Data/vegetables.json'

class Potatoes extends Component {
    render() {
        return (
            <section>
               {/* <header>{veggies[this.props.match.params.category].title}</header> */}
              <h1>
                Potatoes are technically a starch, but today they are a vegetable!
              </h1>
              <ul>
                <li>
                   <img src={veggies.potatoes.photos[0].imageURL}/>
                </li>
                <li>
                    <img src={veggies.potatoes.photos[1].imageURL}/>
                </li>
                <li>
                    <img src={veggies.potatoes.photos[2].imageURL}/>
                </li>
              </ul>
            </section>
        );
    }
}

export default Potatoes