import React, { useState } from "react";
import "./style.css";

import { NewPictureDetails, NewPicturePreview, NewPictureTags, TwoColumn } from "../../components";
import { useNavigate } from "react-router";
import { useUser } from "../../utils";
import aws from "aws-sdk";

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
			const responseFromAPI = await fetch(`${process.env.REACT_APP_API_HOST}/api/picture`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${user.token}`
				},
				body: JSON.stringify({
					name: name,
					tags: tags
				}),
			});

			if (responseFromAPI.status === 201) {
				//Created
				const apiJson = await responseFromAPI.json();
				console.log(apiJson);

				// new aws.S3.PresignedPost()

				// const data = await (new aws.S3.PresignedPost(apiJson.signedRequest).promise());

				const responseFromAWS = await fetch(apiJson.signedRequest, {
					method: "PUT",
					headers: { 'Content-Type': 'multipart/form-data' },
					body: src
				});

				if (responseFromAWS.status === 200) {
					const awsJson = await responseFromAWS.json();
					console.log(awsJson);
				} else {
					console.log(responseFromAWS);
				}

				// setSrc(null);
				// setName("");
				// setTags([]);

				//navigate(`/picture/${json.id}`);
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
		<main className="page-new-picture">
			<TwoColumn left={
				<form onSubmit={submit} className="new-picture-form">
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
		</main>
	);
}