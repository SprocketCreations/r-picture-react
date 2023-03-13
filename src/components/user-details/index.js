import React from "react";
import "./style.css";

import { FollowDetails } from "../../components"

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
				<FollowDetails/>
			</footer>
		</section>
	);
}