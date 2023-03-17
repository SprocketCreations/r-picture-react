import React, { useState } from "react";
import { useUser } from "../../utils";
import "./style.css";

/**
 * @typedef {object} CommentsProp
 * @property {JSX.Element[]} children
 * @property {number} pictureId
 * @property {function():void} refetch
 */
/**
 * @param {CommentsProp} props 
 * @returns {JSX.Element}
 */
export default function Comments({ children, pictureId, refetch }) {
	const [user] = useUser();
	const [text, setText] = useState("");
	const [outgoing, setOutgoing] = useState(false);

	const postComment = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/comment`, {
				method: "POST",
				headers: {
					authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					pictureId,
					userId: user.id,
					text: text,
				}),
			});

			if (response.status === 201) {
				setText("");
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	}

	const submit = event => {
		event.preventDefault();

		if (!outgoing && text) {
			setOutgoing(true);
			postComment();
		}
	}

	return (
		<section className="comments">
			<header>
				<form onSubmit={submit}>
					<textarea
						value={text}
						onChange={event => setText(event.target.value)}
						name="comment-text"
						id="comment-text"
						cols="30"
						rows="10"></textarea>
					<button>Submit</button>
				</form>
			</header>
			<main>
				{children}
			</main>
		</section>
	);
}