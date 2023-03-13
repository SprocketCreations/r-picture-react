import React from "react";
import "./style.css";

import { FollowButton } from "../";

export default function ListedGallery() {
	return (
		<section className="listed-gallery">
			<header>
				<p>Gallery name</p>
				<p>12 Followers</p>
			</header>
			<main>
				<FollowButton/>
			</main>
		</section>
	);
}