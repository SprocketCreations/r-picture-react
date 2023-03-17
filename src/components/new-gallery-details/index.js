import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../utils";
import "./style.css";

export default function NewGalleryDetails() {
	const [user] = useUser();
	const [outgoing, setOutgoing] = useState(false);
	const navigate = useNavigate();

	const [galleryName, setGalleryName] = useState("");
	const [galleryDescription, setGalleryDescription] = useState("");

	const postGallery = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/gallery`, {
				method: "POST",
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: galleryName,
					description: galleryDescription
				})
			});

			if (response.status === 201) {
				//Created
				const json = await response.json();
				console.log(json);

				setGalleryName("");
				setGalleryDescription("");

				navigate(`/gallery/${json.id}`);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const submit = event => {
		event.preventDefault();

		if (!outgoing && galleryName) {
			setOutgoing(true);
			postGallery();
		}

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

					<label htmlFor="gallery-description"><span>Description</span></label>
					<textarea value={galleryDescription} onChange={event => setGalleryDescription(event.target.value)} name="gallery-description" id="gallery-description" cols="30" rows="10"></textarea>

					<button type="submit">Create</button>
				</form>
			</main>
		</section>
	);
}