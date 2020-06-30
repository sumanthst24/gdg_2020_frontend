import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import IntroPart from './components/body/IntroPart/IntroPart.js';
import AboutGDG from './components/body/AboutGDG/AboutGDG.js';
import EventsMeetups from './components/body/EventsMeetups/EventsMeetups.js';
import OurPartners from './components/body/OurPartners/OurPartners.js';
import FollowUS from './components/body/FollowUS/FollowUS.js';
import Footer from './components/Footer/Footer.js';

function App() {
	return (
		<div className="App">
			<NavBar />
			<IntroPart />
			<AboutGDG />
			<EventsMeetups />
			<OurPartners />
			<FollowUS />
			<Footer />
		</div>
	);
}

export default App;
