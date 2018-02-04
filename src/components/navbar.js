import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {  
    //MENU ITEMS
    const menuItemsArray = ["Showreel", "Work", "About", "Contact"];

    // this.props.onClick('Work');

    return (
      <ul>
        {
          //LOOP THROUGH MENU ITEMS
          menuItemsArray.map(item => {
            return (
              <li>
                <a className={ item === this.props.currentPage ? 'selected' : null } onClick={ () => this.props.onClick(item) }>
                  {item}
                </a>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Navbar;