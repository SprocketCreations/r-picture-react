import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { ForwardButton, PictureVoting } from "../";

/**
 * @typedef {object} PictureDetailsProp
 * @property {string} name
 * @property {object} owner
 * @property {number} owner.id
 * @property {string} owner.displayName
 * @property {string} description
 * @property {number} pictureId
 * @property {number} score
 * @property {object} like
 * @property {number} like.id
 * @property {number} like.delta
 * @property {function():void} refetch A function to call when the picture's state has changed to force a reload.
 */
/**
 * @param {PictureDetailsProp} props
 * @returns {JSX.Element}
 */
export default function PictureDetails({ name, owner, description, pictureId, score, like, refetch }) {
	return (
		<section className="picture-details">
			<header>
				<h3>{name}</h3>
				<Link to={`/user/${owner?.id}`}>{owner?.displayName}</Link>
			</header>
			<main>
				<p>{description}</p>
			</main>
			<footer>
				<ForwardButton />
				<PictureVoting
					pictureId={pictureId}
					score={score}
					id={like?.id}
					delta={like?.delta}
					refetch={refetch}
				/>
			</footer>
		</section>
	);
}