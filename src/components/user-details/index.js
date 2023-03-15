import React from "react";
import "./style.css";

import { FollowButton } from "../../components"

/**
 * @typedef {object} UserDetailsProp
 * @property {string} name
 * @property {string} bio
 * @property {number} followers
 * @property {number} userd
 * @property {boolean} following
 * @property {function():void} refetch
 */
/**
 * @param {UserDetailsProp} props
 * @returns {JSX.Element}
 */
export default function UserDetails({ name, bio, followers, userId, following, refetch }) {
	return (
		<section className="user-details">
			<header>
				<h2>{name}</h2>
			</header>
			<main>
				<p>{bio}</p>
			</main>
			<footer>
				<h4>{followers || 0} {followers === 1 ? "Follower" : "Followers"}</h4>
				<FollowButton
					userId={userId}
					following={following}
					refetch={refetch}
				/>
			</footer>
		</section>
	);
}