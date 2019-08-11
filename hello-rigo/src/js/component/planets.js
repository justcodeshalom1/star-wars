import React from "react";
import { Context } from "../store/appContext";
const Planets = () => {
	return (
		//<div className="container">
		<div className="row">
			<Context.Consumer>
				{({ store, actions }) => {
					return store.planets.map((item, index) => {
						return (
							<div key={index} className="card col-3">
								<img src="http://placehold.it/400x200" className="card-img-top" />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.population}</p>
									<p className="card-text">{item.terrain}</p>
									<a href="#" className="btn btn-primary">
										Learn more!
									</a>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</div>
		//</div>
	);
};
export default Planets;
