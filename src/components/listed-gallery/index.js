import React from "react";
import "./style.css";

export default function ListedGallery() {
	return (
		<section className="listed-gallery">
			<div>
				<p>Gallery name</p>
				<p>12 Followers</p>
			</div>
			<div>
				<button>Follow</button>
				<button>Following</button>
			</div>
		</section>
	);
}