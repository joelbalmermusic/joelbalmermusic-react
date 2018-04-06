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

    const tabItemsLookup = {};
    tabItemsArray.forEach(item => {
      tabItemsLookup[item.name] = item;
    });

    return (
      <div className="showreel-wrapper">
        <ul id="showreel-tabs" className="nav nav-tabs tabs nav-justified">
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
          <div
            className={
              "video-wrapper tab-pane fade in" +
                tabItemsLookup[this.props.currentTab].name ===
              this.props.currentTab
                ? " active"
                : null
            }
          >
            <iframe
              className="vimeo-video"
              title={tabItemsLookup[this.props.currentTab].name}
              height="300px"
              width="350px"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              src={
                "https://player.vimeo.com/video/" +
                tabItemsLookup[this.props.currentTab].videoId +
                "?color=2AA7A7"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Showreel;
