import React from "react";
import "./style.css";

export default function NewPictureDetails() {
	return (
		<section className="new-picture-details">
			<header>
				<h2>New Picture</h2>
			</header>
			<main>
				<label htmlFor="picture-name">Name</label>
				<input type="text" name="picture-name" id="picture-name"/>
			</main>
		</section>
	);
}