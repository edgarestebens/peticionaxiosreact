import React, { Component } from 'react';
import axios from 'axios' 
import {Button} from 'react-bootstrap'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state={
      names:[]
    };

    axios.get("http://localhost:3001/names")
      .then(response =>{
        this.setState({
          names:response.data
        })
      })
      .catch(error =>{
        console.log(error);
      })
  }
  render() {
    return (
      <div>
       <Button bsStyle="primary">Primary</Button>
        <ul>
          {this.state.names.map(name =>
            <li key={name}>{name}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
