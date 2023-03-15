import React from "react";
import "./style.css";

import { FollowButton } from "../";

/**
 * @typedef {object} GalleryDetailsProp
 * @property {string} name
 * @property {string} description
 * @property {number} followers
 * @property {number} galleryId
 * @property {boolean} following
 * @property {function():void} refetch
 */
/**
 * @param {GalleryDetailsProp} props
 * @returns {JSX.Element}
 */
export default function GalleryDetails({ name, description, followers, galleryId, following, refetch }) {
	return (
		<section className="gallery-details">
			<header>
				<h3>{name}</h3>
			</header>
			<main>
				<p>{description}</p>
			</main>
			<footer>
				<h4>{followers || 0} {followers === 1 ? "Follower" : "Followers"}</h4>
				<FollowButton
					galleryId={galleryId}
					following={following}
					refetch={refetch}
				/>
			</footer>
		</section>
	);
}