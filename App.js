import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    class PeopleList extends Component {
        render() {

            const people = this.props.names

            return <ul>
                {people.map((person) => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ul>
        }
    }
    return (
      <div className="App">
          <h1>People List</h1>
          <h2>List One</h2>
          <PeopleList names={[
              {name: 'Lukas'},
              {name: 'Maria'},
              {name: 'Pedro'}
          ]}/>
          <h2>List One</h2>
          <PeopleList names={[
              { name: 'Carlos' },
              { name: 'Junior' },
              { name: 'Carla' }
          ]}/>
      </div>
    );
  }
}

export default App;
