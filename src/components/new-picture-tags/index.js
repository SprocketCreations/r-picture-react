import React, { useEffect, useState, useRef } from "react";
import "./style.css";

/**
 * @typedef {object} NewPictureTagsProp
 * @property {string[]} tags The tags to display.
 * @property {(tags: string[]) => void} setTags A setter for the tags.
 */
/**
 * @param {NewPictureTagsProp} props
 * @returns {JSX.Element}
 */
export default function NewPictureTags({ tags, setTags }) {
	const [showTextBox, setShowTextBox] = useState(false);
	const [newTagName, setNewTagName] = useState("");

	const searchBoxRef = useRef(null);
	useEffect(() => {
		searchBoxRef?.current?.focus();
	}, [showTextBox]);

	const removeTag = index => {
		setTags(tags.filter((tag, i) => index != i));
	};

	const submit = event => {
		event.preventDefault();

		if (newTagName) {
			if (tags.find(tag => tag === newTagName)) {
				//Tag is taken, don't add
			}
			else {
				setTags(tags.concat([newTagName]))
			}
		}

		setNewTagName("");
		setShowTextBox(false);
	};

	return (
		<section className="new-picture-tags">
			<header>
				<h3>Add Tags</h3>
			</header>
			<main>
				<ul>
					{tags.map((tag, i) => <li key={i}><button onClick={() => removeTag(i)}>{tag}<span>❌</span></button></li>)}
				</ul>
			</main>
			<footer>
				<form onSubmit={submit}>
					{showTextBox ?
						<input
							ref={searchBoxRef}
							value={newTagName}
							onChange={event => setNewTagName(event.target.value.toLowerCase())}
							type="search"
							name="tag-filter-search"
							id="tag-filter-search" />
						: <button
							onClick={() => setShowTextBox(true)}
						>Add <span>➕</span></button>
					}
				</form>
			</footer>
		</section>
	);
}