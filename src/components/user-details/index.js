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
				<FollowButton/>
			</footer>
		</section>
	);
}