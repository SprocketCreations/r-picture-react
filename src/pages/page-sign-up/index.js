import React, { useState } from "react";
import "./style.css";

import { TwoColumn } from "../../components";

export default function PageSignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const validateEmail = email => /^[\w\.-]+@([\w-]+\.)+[\w]{2,8}$/.test(email);
	const validatePassword = password => !/^(.{0,7}|[^A-Z]*|[^a-z]*|[^0-9]*|[A-Za-z0-9]*)$/.test(password);

	const submit = event => {
		event.preventDefault();

		if (name && validateEmail(email) && validatePassword(password) && password === repeatPassword) {

			setName("");
			setEmail("");
			setPassword("");
			setRepeatPassword("");
		}
	};

	return (
		<main className="page-sign-up">
			<TwoColumn left={
				<section className="sign-up-wrapper">
					<header>
						<h2>Sign Up</h2>
					</header>
					<main>
						<form onSubmit={submit} id="sign-up-form" className="sign-up-form">
							<label htmlFor="sign-up-display-name">
								<span>Name</span>
								{!name && <span>Required</span>}
							</label>
							<input
								value={name}
								onChange={event => setName(event.target.value)}
								type="text"
								id="sign-up-display-name" />

							<label htmlFor="sign-up-email">
								<span>Email</span>
								{!email && <span>Required</span>}
								{email && (validateEmail(email) || <span>Invalid</span>)}
							</label>
							<input
								value={email}
								onChange={event => setEmail(event.target.value)}
								type="text"
								id="sign-up-email" />

							<label htmlFor="sign-up-password-1">
								<span>Password</span>
								{!password && <span>Required</span>}
								{password && (validatePassword(password) || <span>Invalid</span>)}
							</label>
							<input
								value={password}
								onChange={event => setPassword(event.target.value)}
								type="password"
								id="sign-up-password-1" />

							<label htmlFor="sign-up-password-2">
								<span>Repeat Password</span>
								{!repeatPassword && <span>Required</span>}
								{repeatPassword && (repeatPassword === password || <span>Passwords must match</span>)}
							</label>
							<input
								value={repeatPassword}
								onChange={event => setRepeatPassword(event.target.value)}
								type="password"
								id="sign-up-password-2" />

							<button >Sign Up</button>
						</form>
					</main>
				</section>
			} />
		</main>
	);
}