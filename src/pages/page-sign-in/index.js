import React from "react";
import "./style.css";

export default function PageSignIn() {
	return (
		<main className="page-sign-in">
			<form id="sign-in-form">
				<label htmlFor="sign-in-email">Email</label>
				<input type="sign-in-email" id="sign-in-email"/>
				<label htmlFor="sign-in-password">Password</label>
				<input type="sign-in-password" id="sign-in-password"/>
				<button>Sign In</button>
			</form>
		</main>
	);
}