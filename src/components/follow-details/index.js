import React from "react";
import "./style.css";

import { } from "../../components"

export default function FollowDetails() {
	const following = true;
	return (
		<section className="follow-details">
			<h4>12 Followers</h4>
			{following ? <button><span className="following">Following</span><span className="unfollow">Unfollow</span></button>
			: <button>Follow</button>}
		</section >
	);
}