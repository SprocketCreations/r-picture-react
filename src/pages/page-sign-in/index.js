import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { TwoColumn } from "../../components";

export default function PageSignIn() {
	return (
		<main className="page-sign-in">
			<TwoColumn left={
				<section className="sign-in-wrapper">
					<header>
						<h2>Sign In</h2>
					</header>
					<main>
						<form id="sign-in-form" className="sign-in-form">
							<label htmlFor="sign-in-email">Email</label>
							<input type="sign-in-email" id="sign-in-email" />
							<label htmlFor="sign-in-password">Password</label>
							<input type="sign-in-password" id="sign-in-password" />
							<button>Sign In</button>
						</form>
					</main>
					<footer>
						<p>
							Dont have an accout? <Link to="/signup">Sign Up!</Link>
						</p>
					</footer>
				</section>
			} />

		</main>
	);
}