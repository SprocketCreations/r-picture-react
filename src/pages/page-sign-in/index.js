import React from "react";
import "./style.css";

import { TwoColumn } from "../../components";

export default function PageSignIn() {
	return (
		<main className="page-sign-in">
			<TwoColumn left={
				<section className="sign-in-wrapper">
					<form id="sign-in-form" className="sign-in-form">
						<label htmlFor="sign-in-email">Email</label>
						<input type="sign-in-email" id="sign-in-email" />
						<label htmlFor="sign-in-password">Password</label>
						<input type="sign-in-password" id="sign-in-password" />
						<button>Sign In</button>
					</form>
				</section>
			} />

		</main>
	);
}