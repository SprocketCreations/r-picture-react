import React from "react";
import { Link } from "react-router-dom";
import ForwardButton from "../forward-button";
import "./style.css";

export default function PictureDetails() {
	return (
		<section className="picture-details">
			<header>
				<h3>Picture Name</h3>
				<Link to="/user/45">Owner name</Link>
			</header>
			<main>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, corrupti. Saepe maiores perspiciatis beatae commodi perferendis corrupti neque exercitationem incidunt quos dignissimos delectus officia ab, obcaecati suscipit aut accusantium nesciunt.
				</p>
			</main>
			<footer>
				<ForwardButton />
			</footer>
		</section>
	);
}