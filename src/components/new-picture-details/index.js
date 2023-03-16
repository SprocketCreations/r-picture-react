import React from "react";
import "./style.css";

/**
 * @typedef {object} NewPictureDetailsProp
 * @property {string} name The name of the picture to display.
 * @property {(name: string) => void} setName A setter for the name.
 * @property {string} description The description of the picture.
 * @property {(name: string) => void} setDescription A setter for the description.
 */
/**
 * @param {NewPictureDetailsProp} props
 * @returns {JSX.Element}
 */
export default function NewPictureDetails({ name, setName, description, setDescription }) {
	return (
		<section className="new-picture-details">
			<header>
				<h2>New Picture</h2>
			</header>
			<main>
				<label htmlFor="picture-name">
					<span>Name</span>
					{!name && <span>Required</span>}
				</label>
				<input
					value={name}
					onChange={event => setName(event.target.value)}
					type="text"
					name="picture-name"
					id="picture-name" />
				<label htmlFor="picture-description">
					<span>Description</span>
				</label>
				<textarea
					value={description}
					onChange={event => setDescription(event.target.value)}
					type="text"
					name="picture-description"
					id="picture-description"
					rows="10"/>
			</main>
		</section>
	);
}