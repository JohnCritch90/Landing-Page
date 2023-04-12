import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
		<div className="container">
			<div className="body">
				<Jumbotron />
			</div>
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
		</div>
		</div>
	);
};


export default Home;
