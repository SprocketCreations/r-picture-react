import React from "react";
import "./style.css";

import { } from "../../components"

export default function FollowButton() {
	const following = true;
	return (
		<section className="follow-details">
			{following ? <button><span className="following">Following</span><span className="unfollow">Unfollow</span></button>
			: <button>Follow</button>}
		</section >
	);
}