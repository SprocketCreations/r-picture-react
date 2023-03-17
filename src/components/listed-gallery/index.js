import React from "react";
import "./style.css";

import { FollowButton } from "../";
import { Link } from "react-router-dom";

/**
 * @typedef {object} ListedGalleryProp
 * @property {number} id The id of the gallery.
 * @property {string} name The name of the gallery.
 * @property {number?} followerCount The number of followers the gallery has.
 * @property {boolean?} following 
 * @property {function():void} refetch 
 */
/**
 * @param {ListedGalleryProp} props 
 * @returns {JSX.Element}
 */
export default function ListedGallery({ id, name, followerCount, following, refetch }) {
	return (
		<section className="listed-gallery">
			<header>
				<Link to={`/gallery/${id}`}>{name}</Link>
				<p>{followerCount || 0} {followerCount === 1 ? "Follower" : "Followers"}</p>
			</header>
			<main>
				<FollowButton
					galleryId={id}
					following={following}
					refetch={refetch}
				/>
			</main>
		</section>
	);
}