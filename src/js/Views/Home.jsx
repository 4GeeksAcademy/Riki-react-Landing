import React from "react";

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
	return (
		<>
			<div style={{ "display": "flex", "flex-direction": "column", "min-height": "100vh" }}>
				<nav style={{ "flex-grow": "0" }}>
					<Navbar titulo='Mi Pagina' />
				</nav>
				<main style={{ "flex-grow": "1" }}>
					<div className="container mt-5">
						<Jumbotron />
					</div>
					<div className="container mt-5">
						<div className="row row-cols-1 row-cols-md-4 g-4">
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</main>
				<footer style={{ "flex-grow": "0", "padding": "0", "margin": "0" }}>
					<Footer />
				</footer>
			</div >
		</>
	);
};

export default Home;