import React from "react";
import "./showreel.css";

class Showreel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="showreelWrapper">
        <ul id="showreel-tabs" className="nav nav-tabs float-left tabs">
          <li className="active">
            <a data-toggle="tab" href="#menu1">
              ALL
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu2">
              FILM
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu3">
              DOCUMENTARY
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu4">
              COMMERCIAL
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="menu1" className="videoWrapper tab-pane fade in active">
            <iframe
              src="https://player.vimeo.com/video/163051443?color=2AA7A7"
              width="450"
              height="253"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <div id="menu2" className="videoWrapper tab-pane fade">
            <iframe
              src="https://player.vimeo.com/video/255175167?color=2AA7A7"
              width="450"
              height="253"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <div id="menu3" className="videoWrapper tab-pane fade">
            <iframe
              src="https://player.vimeo.com/video/256244177?color=2AA7A7"
              width="450"
              height="253"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <div id="menu4" className="videoWrapper tab-pane fade">
            <iframe
              src="https://player.vimeo.com/video/259461019?color=2AA7A7"
              width="450"
              height="253"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Showreel;
