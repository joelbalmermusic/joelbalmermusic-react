import React from 'react';
import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	return (
  		<div className="contactWrapper">
	  		<h3>GET IN TOUCH</h3>
	  		<p>I'm always on the look out for potential projects or collaborations, remote or on-site! Feel free to <a href="mailto:joel@joelbalmermusic.co.uk">email me</a>, <a href="tel:+447910093639">call</a> or <a href="https://info531.youcanbook.me/">book a meeting</a> for more information about my rates.
	  		</p>

			<h3>LINKS</h3>
			<p>Please find selected credits on my <a href="http://www.joelbalmermusic.co.uk/Composer_CV.pdf" target="_blank">CV</a>, and find more of my work at the following links:
			</p>

			<p>
				<a href="https://vimeo.com/joelbalmer">Vimeo</a><br/>
				<a href="https://soundcloud.com/joel-balmer-music">Soundcloud</a>
			</p>
		</div>
	);
  }
}

export default Contact;