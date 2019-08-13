import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Planets = () => {
	return (
		<div className="container-fluid">
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
										<Link
											to={"/single-planet/" + item.name + "/" + index}
											className="btn btn-primary">
											Learn more!
										</Link>
										<button
											onClick={() => actions.markAsFavorite(index, item.name)}
											type="button"
											className="btn btn-light float-right border-warning">
											<i className="far fa-heart" />
										</button>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		</div>
	);
};
export default Planets;
