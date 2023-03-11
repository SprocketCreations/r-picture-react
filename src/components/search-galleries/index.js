import React from "react";
import "./style.css";

export default function SearchGalleries(props) {
	return (
		<section className="search-galleries">
			<header>
				<h2>Galleries</h2>
			</header>
			<main>
				{props.children}
			</main>
		</section>
	);
}