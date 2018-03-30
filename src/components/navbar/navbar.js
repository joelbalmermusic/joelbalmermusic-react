import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menuItemsArray = ["Showreel", "Work", "About", "Contact"];

    return (
      <ul>
        {menuItemsArray.map(item => {
          return (
            <li>
              <a
                className={item === this.props.currentPage ? "selected" : null}
                onClick={() => this.props.onClick(item)}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Navbar;
