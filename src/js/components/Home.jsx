import React from "react";
import cardImg from '../../img/braden-collum-AFlG5jpMvYg-unsplash.jpg'

const Home = () => {
	return (
		<>
		<div className="container-fluid bg-dark py-3">
			<div className="row">
				<div className="col-6 d-flex align-items-center py-1">
					<h3 className="text-white">Start Bootstrap</h3>
				</div>
				<div className="col-6 d-flex justify-content-end">
					<ul className="list-group list-group-horizontal list-group-flush">
						<li className="list-group-item text-white">Home</li>
						<li className="list-group-item text-white">About</li>
						<li className="list-group-item text-white">Services</li>
						<li className="list-group-item text-white">Contact</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div className="container bg-light p-4 mt-4 rounded-4">
			<h1 className="pt-5 fw-light" style = {{fontSize: "4rem"}}>A Warm Welcome!</h1>
			<p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint dicta explicabo, nobis distinctio iure quod nam molestias ea, asperiores quibusdam reiciendis molestiae eaque ipsum dignissimos inventore vero, ullam sit.</p>
			<button className="btn btn-primary mb-4">Call to action!</button>
		</div>

		<div className=" row mt-3">
			<div className="col-3 border rounded">
				<img src={cardImg} className="img-fluid rounded" alt="Lombard Street, San Francisco"/>
				<p className="display-6 text-center p-2">Class title</p>
				<p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae tenetur non deserunt</p>
				<div className="border-top py-2">
					<button className="btn btn-primary mx-auto d-block">Find Out More!</button>
				</div>
			</div>
			
			
		</div>
		</>
	);
	
};

export default Home;