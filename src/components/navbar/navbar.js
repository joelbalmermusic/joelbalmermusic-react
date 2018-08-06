import React from "react";
import "./navbar.css";
import { Link } from "../../../node_modules/react-router-dom";

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
              {/* <a
                className={item === this.props.currentPage ? "selected" : null}
                onClick={() => this.props.onClick(item)}
              >
                {item}
              </a> */}
              <Link to={"/" + item}>{item}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Navbar;
