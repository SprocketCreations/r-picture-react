import React from "react";
import "./style.css";

export default function PageSignUp() {
	return (
		<main className="page-sign-up">
			<h1>Signup</h1>
			
			<form id="signup-form">
				<input type="text" id="signupUsername" />
				<input type="password" id="signupPassword" />
				<button >Signup</button>
			</form>
		</main>
	);
}