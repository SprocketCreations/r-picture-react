import React, { useRef, useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { TwoColumn } from "../../components";
import { useUser } from "../../utils";

export default function PageSignIn() {
	const [, setUser] = useUser();
	const [forbidden, setForbidden] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [outgoing, setOutgoing] = useState(false);

	const validateEmail = email => /^[\w\.-]+@([\w-]+\.)+[\w]{2,8}$/.test(email);
	const validatePassword = password => !/^(.{0,7}|[^A-Z]*|[^a-z]*|[^0-9]*|[A-Za-z0-9]*)$/.test(password);

	const signin = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/signin`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 403) {
				//Forbidden
				setForbidden(true);
			} else if (response.status === 201) {
				//Created
				const json = await response.json();

				console.log(json.token);
				setUser(json.token);

				setEmail("");
				setPassword("");
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
		//redirect to home page
	}

	const submit = event => {
		event.preventDefault();

		if (!outgoing && validateEmail(email) && validatePassword(password)) {
			setOutgoing(true);
			signin();
		}
	};

	return (
		<main className="page-sign-in">
			<TwoColumn left={
				<section className="sign-in-wrapper">
					<header>
						<h2>Sign In</h2>
					</header>
					<main>
						<form onSubmit={submit} id="sign-in-form" className="sign-in-form">
							<label htmlFor="sign-in-email">
								<span>Email</span>
								{!email && <span>Required</span>}
								{email && (validateEmail(email) || <span>Invalid</span>)}
							</label>
							<input
								value={email}
								onChange={event => setEmail(event.target.value.trim())}
								type="text"
								name="sign-in-email"
								id="sign-in-email" />

							<label htmlFor="sign-in-password">
								<span>Password</span>
								{!password && <span>Required</span>}
								{password && (validatePassword(password) || <span>Invalid</span>)}
							</label>
							<input
								value={password}
								onChange={event => setPassword(event.target.value)}
								type="password"
								name="sign-in-password"
								id="sign-in-password" />


							{forbidden && <p>Email or password is incorrect.</p>}
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