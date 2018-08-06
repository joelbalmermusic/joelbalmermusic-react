import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar/navbar.js";
import Showreel from "./pages/showreel/showreel.js";
import About from "./pages/about/about.js";
import Contact from "./pages/contact/contact.js";
import { Switch, Route } from "../node_modules/react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: "All"
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabItemName) {
    this.setState({ currentTab: tabItemName });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
            <Navbar onClick={this.handleClick} />
          </div>
        </header>

        <div className="body">
          <h1 className="App-intro">Joel Balmer Music</h1>
          <h3>Freelance composer for TV and film</h3>
          <Switch>
            <Route
              path="/Showreel"
              render={props => (
                <Showreel
                  currentTab={this.state.currentTab}
                  onClick={this.handleTabClick}
                />
              )}
            />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
