import React from 'react';
import './showreel.css';

class Showreel extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	return (
        <div className="showreelWrapper">
            <ul className="tabs">
                <li className="tab">Yes</li>
                <li className="tab">Yes</li>
                <li className="tab">Yes</li>
            </ul>

      		<iframe src="https://player.vimeo.com/video/163051443" width="450" height="253" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>

        </div>
	);
  }
}

export default Showreel;