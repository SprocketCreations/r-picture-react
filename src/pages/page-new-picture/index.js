import React, { useState } from "react";
import "./style.css";

import { NewPictureDetails, NewPicturePreview, NewPictureTags, TwoColumn } from "../../components";

export default function PageNewPicture() {
	const [src, setSrc] = useState("");

	const [name, setName] = useState("");

	/** @type {[string[], (tags: string[]) => void]} */
	const [tags, setTags] = useState([]);

	const submit = event => {
		event.preventDefault();

		setSrc("");
		setName("");
		setTags([]);
	}

	return (
		<main className="page-new-picture">
			<TwoColumn left={
				<form onSubmit={submit} className="new-picture-form">
					<NewPictureDetails name={name} setName={setName} />
					<NewPicturePreview setSrc={setSrc} src={src} />
					<footer className="submit-button">
						<button>Post</button>
					</footer>
				</form>
			} right={
				<NewPictureTags tags={tags} setTags={setTags} />
			} />
		</main>
	);
}