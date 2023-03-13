import React from "react";
import "./style.css";

/**
 * @typedef {object} NewPictureDetailsProp
 * @property {string} name The name of the picture to display.
 * @property {(name: string) => void} setName A setter for the name.
 */
/**
 * @param {NewPictureDetailsProp} props
 * @returns {JSX.Element}
 */
export default function NewPictureDetails({ name, setName }) {
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
			</main>
		</section>
	);
}