import React from "react";

const Jumbotron = () => {
	return(
        <div className="container-fluid bg-light p-5">
	        <h1 className="display-4">A Warm Welcome!</h1>
	        <p className="lead">This is  a jumbotron created using the bootstrap 5</p>
	        <hr className="my-4"/>
	        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
	        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
	    </div>
	);
};


export default Jumbotron;