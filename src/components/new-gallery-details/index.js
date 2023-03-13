import React, { useState } from "react";
import "./style.css";

export default function NewGalleryDetails() {
	const [galleryName, setGalleryName] = useState("");
	const [galleryDescription, setGalleryDescription] = useState("");

	const submit = event => {
		event.preventDefault();

		if(galleryName)

		setGalleryName("");
		setGalleryDescription("");
	};

	return (
		<section className="new-gallery-details">
			<header>
				<h2>New Gallery</h2>
			</header>
			<main>
				<form onSubmit={submit} id="new-gallery-form" className="new-gallery-form">
					<label htmlFor="gallery-name"><span>Name</span>{!galleryName && <span>Required</span>}</label>
					<input value={galleryName} onChange={event => setGalleryName(event.target.value)} name="gallery-name" id="gallery-name" type="text" />

					<label htmlFor="gallery-description"><span>Description</span>{!galleryDescription && <span>Required</span>}</label>
					<textarea value={galleryDescription} onChange={event => setGalleryDescription(event.target.value)} name="gallery-description" id="gallery-description" cols="30" rows="10"></textarea>

					<button type="submit">Create</button>
				</form>
			</main>
		</section>
	);
}