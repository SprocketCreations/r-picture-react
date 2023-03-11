import React from "react";
import "./style.css";

export default function PageSignIn() {
	return (
		<main className="page-sign-in">
			<h1>Login</h1>

			<form id="login-form">
				<input type="email" id="email"/>
				<input type="password" id="password"/>
				<button>Login</button>
			</form>
		</main>
	);
}