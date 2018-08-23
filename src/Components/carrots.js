import React, { Component } from 'react';
import veggies from '../Data/vegetables.json'

class Carrots extends Component {
    render() {
        return (
            <section>
               {/* <header>{veggies[this.props.match.params.category].title}</header> */}
              <h1>
                There are so many types of carrots you'll need glasses to see them all!
              </h1>
              <ul>
                <li>
                   <img src={veggies.carrots.photos[0].imageURL}/>
                </li>
              </ul>
            </section>
        );
    }
}

export default Carrots