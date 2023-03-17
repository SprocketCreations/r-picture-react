import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

/**
 * @typedef {object} CommentProp
 * @property {number} ownerId
 * @property {string} ownerName
 * @property {string} text
 */
/**
 * @param {CommentProp} props
 * @returns {JSX.Element}
 */
export default function Comment({ ownerId, ownerName, text }) {
	return (
		<section className="comment">
			<header>
				<Link to={`/user/${ownerId}`}><h4>{ownerName}</h4></Link>
			</header>
			<main>
				<p>{text}</p>
			</main>
		</section>
	);
}