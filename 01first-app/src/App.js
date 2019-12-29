import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'adsf',name: 'Max', age: 28 },
      { id:'zxcv',name: 'Manu', age: 29 },
      { id:'qwer',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: true
  };
  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: 'Maximilian', age: 28 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    }
    
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons:persons})
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  togglePersonHandler=()=>{
    this.setState({showPerson:!this.state.showPerson})
  }
  render() {
    let persons = null
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)} />
          })}
        </div>
      )
    }else(persons = null)

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>{this.state.showPerson?'Hide':'Show'} persons</button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;