import React from "react";
import Characters from "../component/characters";
import Planets from "../component/planets";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Characters />
				<Planets />
			</React.Fragment>
		);
	}
}
