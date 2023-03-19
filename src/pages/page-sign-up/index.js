import React, { useState } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import { TwoColumn } from "../../components";
import { useUser } from "../../utils";

export default function PageSignUp() {
	const [outgoing, setOutgoing] = useState(false);
	const navigate = useNavigate();
	const [, setUser] = useUser();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const validateEmail = email => /^[\w\.-]+@([\w-]+\.)+[\w]{2,8}$/.test(email);
	const validatePassword = password => !/^(.{0,7}|[^A-Z]*|[^a-z]*|[^0-9]*|[A-Za-z0-9]*)$/.test(password);

	const signup = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ displayName: name, email: email, password: password }),
			});

			if (response.status === 201) {
				//Created
				const json = await response.json();

				setUser(json.jwt);

				setName("");
				setEmail("");
				setPassword("");
				setRepeatPassword("");

				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const submit = event => {
		event.preventDefault();

		if (!outgoing && name && validateEmail(email) && validatePassword(password) && password === repeatPassword) {
			setOutgoing(true);
			signup();
		}
	};

	return (
		<TwoColumn left={
			<section className="page-sign-up">
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
	);
}