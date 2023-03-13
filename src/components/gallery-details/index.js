import React from "react";
import "./style.css";

import { FollowButton } from "../";

export default function GalleryDetails() {
	return (
		<section className="gallery-details">
			<header>
				<h3>Gallery Name</h3>
			</header>
			<main>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam eos velit magnam incidunt deserunt, neque accusamus culpa fugit sint aut libero autem, amet doloribus officiis natus enim corporis. Eligendi, provident.</p>
			</main>
			<footer>
				<h4>12 Followers</h4>
				<FollowButton/>
			</footer>
		</section>
	);
}