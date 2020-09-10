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
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
      );


    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <button onClick={() => this.setState({message: this.state.message + ' MABUHAY!'})}>Click Me</button>
          
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
