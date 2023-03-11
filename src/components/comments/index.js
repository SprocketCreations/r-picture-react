import React from "react";
import "./style.css";

export default function Comments(props) {
	return (
		<section className="comments">
			<header>
				<form>
					<textarea name="comment-text" id="comment-text" cols="30" rows="10"></textarea>
					<button>Submit</button>
				</form>
			</header>
			<main>
				{props.children}
			</main>
		</section>
	);
}