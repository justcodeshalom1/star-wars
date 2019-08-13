import React from "react";
import { Link } from "react-router-dom";
import Characters from "../component/characters";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<Characters />
			</div>
		);
	}
}
