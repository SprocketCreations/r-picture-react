import React, { useState } from "react";
import "./style.css";

import { NewPictureDetails, NewPicturePreview, NewPictureTags, TwoColumn } from "../../components";
import { useNavigate } from "react-router";
import { useUser } from "../../utils";

export default function PageNewPicture() {
	const [user] = useUser();
	const [outgoing, setOutgoing] = useState(false);
	const navigate = useNavigate();

	const [src, setSrc] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	/** @type {[string[], (tags: string[]) => void]} */
	const [tags, setTags] = useState([]);

	const postPictureToAPI = async () => {
		try {
			const formData = new FormData();
			formData.append("name", name);
			formData.append("description", description);
			formData.append("tags", JSON.stringify(tags));
			formData.append("picture", src);

			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/picture`, {
				method: "POST",
				headers: {
					authorization: `Bearer ${user.token}`
				},
				body: formData
			});

			if (response.status === 201) {
				//Created
				const json = await response.json();
				console.log(json);


				setSrc(null);
				setName("");
				setTags([]);

				navigate(`/picture/${json.id}`);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const submit = event => {
		event.preventDefault();

		if (!outgoing && name) {
			setOutgoing(true);
			postPictureToAPI();
		}
	}

	return (
		<TwoColumn left={
			<form onSubmit={submit} className="page-new-picture">
				<NewPictureDetails name={name} setName={setName} description={description} setDescription={setDescription} />
				<NewPicturePreview setSrc={setSrc} src={src} />
				<footer className="submit-button">
					{!src && <p>Picture is required.</p>}
					<button>Post</button>
				</footer>
			</form>
		} right={
			<NewPictureTags tags={tags} setTags={setTags} />
		} />
	);
}