import React from "react";
import "./style.css";

export default function NewGalleryDetails() {
	return (
		<section className="new-gallery-details">
			<header>
				<h2>New Gallery</h2>
			</header>
			<main>
				<form id="new-gallery-form" className="new-gallery-form">
					<label htmlFor="gallery-name">Name</label>
					<input name="gallery-name" id="gallery-name" type="text" />

					<label htmlFor="gallery-description">Description</label>
					<textarea name="gallery-description" id="gallery-description" cols="30" rows="10"></textarea>
					
					<button type="submit">Create</button>
				</form>
			</main>
		</section>
	);
}