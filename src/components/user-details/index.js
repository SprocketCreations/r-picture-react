import React from "react";
import "./style.css";

import { FollowButton } from "../../components"

export default function UserDetails() {
	return (
		<section className="user-details">
			<header>
				<h2>Display Name</h2>
			</header>
			<main>
				<p>Biography</p>
			</main>
			<footer>
				<h4>12 Followers</h4>
				<FollowButton/>
			</footer>
		</section>
	);
}