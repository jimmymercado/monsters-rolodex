import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      message:'Hello Popsie!',
      monsters: [
        {name: 'Frankenstein', id:100},
        {name: 'Dracula', id:101},
        {name: 'Zombie', id:102}
      ],
      searchField: ''
    };

  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters:users})) //overwrite monsters

  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});

  }

  render(){
    const {monsters, searchField} =  this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' onSearchChange={this.handleChange} />
        <button onClick={() => this.setState({message: this.state.message + ' MABUHAY!'})}>Click Me</button>
          
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;
