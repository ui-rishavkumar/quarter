import React from 'react';
import Button from "../button/button";
import "./newsletter.css";

function Newsletter(props) {
	return <>
		<div className="property_container">
			<div className="container">
				<div className="property_items">
					<div className="property_item">
						<h3>{props.heading}</h3>
						<p>{props.para}</p>
					</div>
					<div className="property_item">
					<Button type="secondary" content="Explore Properties"/>
					</div>
				</div>
			</div>
		</div>
		</>
}

export default Newsletter;
