import React from 'react';
import './showreel.css';

class Showreel extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	return (
  		<iframe className="main_video" id="showreelVideo" src="https://player.vimeo.com/video/163051443?api=1&player_id=showreelVideo&color=2AA7A7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
		</iframe>
	);
  }
}

export default Showreel;