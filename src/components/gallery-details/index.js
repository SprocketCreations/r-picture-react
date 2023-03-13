import React from "react";
import "./style.css";

export default function GalleryDetails() {
	return (
		<section className="gallery-details">
			<header>
				<h3>Gallery Name</h3>
			</header>
			<main>
				<p>Description</p>
			</main>
			<footer>
				<span>12 Followers</span>
				<button>Follow</button>
				<button>Following</button>
			</footer>
		</section>
	);
}