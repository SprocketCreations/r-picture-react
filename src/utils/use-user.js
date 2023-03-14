import { useState, useEffect } from "react";
import { setUser, getUser, listenToChange, unlistenToChange } from "./";

/**
 * Returns a stateful reference to the active User, and a function to change that user.
 * @returns {[user, setUser]}
 */
export default function useUser() {
	const [user, setUserState] = useState(getUser());

	useEffect(() => {
		/** @param {import("./jwt").User} user */
		function handleUserChange(user) {
			setUserState(user);
		}

		listenToChange(handleUserChange);
		return () => { unlistenToChange(handleUserChange) };
	});

	return [user, setUser];
}