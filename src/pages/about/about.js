import React from 'react';
import './about.css';

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	return (
  		<div className="aboutWrapper">
	  		<h3>PROFILE</h3>
	  		<p>I’m an experienced freelance music composer for film, television, commercials and games. Previous work has been featured on Channel 4's Hollyoaks, and commercials (including MacMillian Cancer support) have been broadcast on ITV, E4 and Channel 5. Previous clients include Chevrolet, Cornetto, Playstation and Coca-Cola. More recently I have composed for the feature film Guardians shown at the East End Film Festival, and the documentary film Yubartas screened at the New York Wildlife Conservation Film Festival.
	  		</p>

			<h3>BACKGROUND</h3>
			<p>I have been writing music for media since 2006, writing professionally since 2012, and working as a full-time freelance composer since January 2016.
			</p>

			<p>In 2010 I composed the music for Danny Gonzalez and his short film ‘Alco-hold-up’, screened at the British Film Institute in London in 2010. This page shows a small selection of my work, and my most notable achievements since this first project.
			</p>
			
			<p>I was born and bred in Brighton, England, and graduated from the University of Leeds in 2012 with a first class honours B.Sc. degree in Music, Multimedia and Electronics (MME). While at University I discovered my penchant for composing music for media. I am also passionate about film scores, jazz, hip-hop and pop songs with good structure and writing. I now have 10 years experience with Logic Pro and a collection of instruments ranging from guitar (electric / acoustic / classical), bass (electric / upright) and percussion to clarinet, mandolin and Puerto Rican cuatro.
			</p>
		</div>
	);
  }
}

export default About;