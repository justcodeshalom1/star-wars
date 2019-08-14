import React from "react";
import Characters from "../component/characters";
import Planets from "../component/planets";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<h1 className="text-danger mb-5 mt-5">Star Wars Characters</h1>
						<Characters />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<h1 className="text-danger mb-5 mt-5">The Planets</h1>
						<Planets />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
