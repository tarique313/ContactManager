import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="Gazi Tarique Mahmud"
            email="mahmud@email.com"
            phone="014444444" />
          <Contact name="Asif Mahmud"
            email="asif@email.com"
            phone="013333333" />
        </div>
      </div>
    );
  }
}

export default App;
