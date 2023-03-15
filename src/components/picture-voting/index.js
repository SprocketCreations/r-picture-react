import React from "react";
import "./style.css";

import { } from "../";
import { useUser } from "../../utils";

/**
 * @typedef {object} PictureVotingProp
 * @property {number} pictureId The id of the picture.
 * @property {number?} score The score to display. Defaults to 0.
 * @property {number?} id The id of the user's like.
 * @property {number?} delta The delta of the user's like.
 * 
 * @property {function():void} refetch A function that will refetch all the posts on the page when invoked.
 */
/**
 * @param {PictureVotingProp} props
 * @returns {JSX.Element}
 */
export default function PictureVoting({ pictureId, score, id, delta, refetch }) {
	const [user] = useUser();

	const vote = async (delta) => {
		console.log(id)
		if (!id) {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/like`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${user.token}`
				},
				body: JSON.stringify({ pictureId, delta }),
			});
			if(response.status === 201) {
				refetch();
			}
		} else if (delta === 0) {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/like/${id}`, {
				method: "DELETE",
				headers: {
					authorization: `Bearer ${user.token}`
				},
			});
			if(response.status === 200) {
				refetch();
			}
		} else {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/like/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${user.token}`
				},
				body: JSON.stringify({ delta }),
			});
			if(response.status === 204) {
				refetch();
			}
		}
	};

	return (
		<section className="picture-voting">
			{delta === 1
				? <button onClick={() => vote(0)} className="voted">⬆</button>
				: <button onClick={() => vote(1)}>⬆</button >
			}

			<span className={id ? "voted" : ""}>{score || 0}</span>

			{delta === -1
				? <button onClick={() => vote(0)} className="voted">⬇</button>
				: <button onClick={() => vote(-1)}>⬇</button>
			}
		</section >
	);
}