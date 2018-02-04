import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button.js';
import Navbar from './components/navbar/navbar.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Showreel"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (menuItem) {
    this.setState({ currentPage: menuItem })

    //swap out/content
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
            <Navbar onClick={this.handleClick} currentPage={ this.state.currentPage }/>
          </div>
        </header>

        <div className="body">
          <h1 className="App-intro">Joel Balmer Music</h1>
          <h2>Freelance composer for TV and film</h2>
          
          <iframe className="main_video" id="showreelVideo" src="https://player.vimeo.com/video/163051443?api=1&player_id=showreelVideo&color=2AA7A7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>

          <Button text="This is a button!" />
        </div>
      </div>
    );
  }
}

export default App;
