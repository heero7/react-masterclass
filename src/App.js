import React, { Component } from 'react';
import './App.css';

// * My simple Examples
import MyInfo from "./components/MyInfo";

class App extends Component {
  render() {
    return (
      <div> 
        <MyInfo name={"Harrison Smith"} age={26} funFact={"I love fuzzy cats!"} />
        <MyInfo name={"Mega Man"} age={"??"} funFact={"Dr. Light is my creator"} />
      </div>
    );
  }
}

export default App;
