import React from "react";
import "./showreel.css";

class Showreel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tabItemsArray = [
      {
        name: "All",
        videoId: "163051443"
      },
      {
        name: "Film",
        videoId: "255175167"
      },
      {
        name: "Documentary",
        videoId: "256244177"
      },
      {
        name: "Commercial",
        videoId: "259461019"
      }
    ];

    return (
      <div className="showreelWrapper">
        <ul id="showreel-tabs" className="nav nav-tabs float-left tabs">
          {tabItemsArray.map(item => {
            return (
              <li
                className={
                  item.name === this.props.currentTab ? "active" : null
                }
              >
                <a onClick={() => this.props.onClick(item.name)}>{item.name}</a>
              </li>
            );
          })}
        </ul>

        <div className="tab-content">
          {tabItemsArray.map(item => {
            return (
              <div
                className={
                  "videoWrapper tab-pane fade in" + item.name ===
                  this.props.currentTab
                    ? " active"
                    : null
                }
              >
                <iframe
                  width="450"
                  height="253"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                  src={
                    "https://player.vimeo.com/video/" +
                    item.videoId +
                    "?color=2AA7A7"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Showreel;
