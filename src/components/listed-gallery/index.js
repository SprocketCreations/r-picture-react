import React from "react";
import "./style.css";

export default function ListedGallery() {
	return (
		<section className="listed-gallery">
			<header>
				<p>Gallery name</p>
				<p>12 Followers</p>
			</header>
			<main>
				<button>Follow</button>
				<button>Following</button>
			</main>
		</section>
	);
}