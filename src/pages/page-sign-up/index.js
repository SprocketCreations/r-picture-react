import React from "react";
import "./style.css";

export default function PageSignUp() {
	return (
		<main className="page-sign-up">
			<form id="sign-up-form">
				<label htmlFor="sign-up-display-name">Name</label>
				<input type="text" id="sign-up-display-name" />

				<label htmlFor="sign-up-email">Email</label>
				<input type="email" id="sign-up-email" />

				<label htmlFor="sign-up-password-1">Password</label>
				<input type="password" id="sign-up-password-1" />
				<label htmlFor="sign-up-password-2">Repeat Password</label>
				<input type="password" id="sign-up-password-2" />
				<button >Sign Up</button>
			</form>
		</main>
	);
}