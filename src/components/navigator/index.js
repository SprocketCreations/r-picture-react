import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navigator() {
	return (
		<header className="navigator">
			<nav>
				<Link to="/">Home</Link>
				<input type="search" name="search" id="search" />
				<p>
					Use a # to search for a tag
				</p>
				<Link to="/user/1">Profile</Link>
				<Link to="/picture/new">New Picture</Link>
				<Link to="/gallery/new">New Gallery</Link>
				<Link to="/signin">Sign In</Link>
				<Link to="javascript:void(0);">Sign Out</Link>
			</nav>
		</header>
	);
}