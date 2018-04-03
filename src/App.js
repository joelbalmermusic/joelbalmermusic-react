import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar/navbar.js";
import Showreel from "./pages/showreel/showreel.js";
import About from "./pages/about/about.js";
import Contact from "./pages/contact/contact.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Showreel",
      currentTab: "All"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTabClick = this.handleClick.bind(this);
  }

  handleClick(menuItem) {
    this.setState({ currentPage: menuItem });
  }

  handleTabClick(tabItem) {
    this.setState({ currentTab: tabItem });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
            <Navbar
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </div>
        </header>

        <div className="body">
          <h1 className="App-intro">Joel Balmer Music</h1>
          <h2>Freelance composer for TV and film</h2>
          {this.state.currentPage === "Showreel" && (
            <Showreel
              currentTab={this.state.currentTab}
              onClick={this.handleTabClick}
            />
          )}
          {this.state.currentPage === "About" && <About />}
          {this.state.currentPage === "Contact" && <Contact />}
        </div>
      </div>
    );
  }
}

export default App;
