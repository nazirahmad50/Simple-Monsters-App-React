import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    monsters: []
  }

  componentDidMount(){
    axios("https://jsonplaceholder.typicode.com/users").then(res =>{
      this.setState({
        monsters: res.data
      })
    })
  }

  render(){
  return (
    <div className="App">
     {
       this.state.monsters.map(m =>(
          <h1 key={m.id}>{m.name}</h1>
       ))
     }
    </div>
  );
  }
}

export default App;
