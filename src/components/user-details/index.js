import React from "react";
import "./style.css";

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
				<span>12 Followers</span>
				<button>Follow</button>
				<button>Following</button>
			</footer>
		</section>
	);
}