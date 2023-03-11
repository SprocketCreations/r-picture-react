import React from "react";
import "./style.css";

export default function InGalleries(props) {
	return (
		<section className="in-galleries">
			<header>
				<h3>In Galleries</h3>
			</header>
			<main>
				{props.children}
			</main>
		</section>
	);
}