import React, { useState } from "react";
import "./style.css";

export default function Comments(props) {
	const [text, setText] = useState("");

	const submit = event => {
		event.preventDefault();

		if (text) {

			setText("");
		}
	}

	return (
		<section className="comments">
			<header>
				<form onSubmit={submit}>
					<textarea
						value={text}
						onChange={event => setText(event.target.value)}
						name="comment-text"
						id="comment-text"
						cols="30"
						rows="10"></textarea>
					<button>Submit</button>
				</form>
			</header>
			<main>
				{props.children}
			</main>
		</section>
	);
}