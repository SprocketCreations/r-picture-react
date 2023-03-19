import jwtDecode from "jwt-decode";
import { setCookie, getCookie, removeCookie } from "tiny-cookie";
import dayjs from "dayjs";

/**
 * @typedef {object} User
 * @property {number} id The private key id of the user.
 * @property {string} displayName The display name of the user.
 * @property {string} token The Json Webtoken.
 */
/**
 * @typedef {(user: User) => void} UserCallback
 */
/** @type {User} The logged in user. */
const user = {
	id: null,
	displayName: null,
	token: null,
};

const callbacks = [];

const callCallbacks = () => {
	callbacks.forEach(callback => callback(getUser()));
}

/**
 * @param {UserCallback} callback The callback to remove from the event.
 */
export const listenToChange = callback => {
	callbacks.push(callback);
};

/**
 * @param {UserCallback} callback The callback to remove from the event.
 * @returns {boolean} True if callback was unsubscribed from the event.
 */
export const unlistenToChange = callback => {
	return 1 === callbacks.splice(callbacks.indexOf(callback), 1).length;
};

/**
 * Removes the active user.
 */
export const clearUser = () => {
	if (user) {
		user.id = null;
		user.displayName = null;
		user.token = null;
		removeCookie("user");
		callCallbacks();
	}
}

/**
 * @returns {User} A copy of the user.
 */
export const getUser = () => {
	if (!user.token) {
		const userCookie = getCookie("user", JSON.parse);
		if (userCookie) {
			console.log(userCookie);
			user.displayName = userCookie.displayName;
			user.id = userCookie.id;
			user.token = userCookie.token;
		}
	}
	return { ...user };
};

/**
 * @param {string?} jsonwebtoken The Json Webtoken. Set null to clear user.
 * @param {boolean?} callOnFailure If true will fire the callbacks even if the token couldn't be verified.
 */
export const setUser = (jsonwebtoken, callOnFailure) => {
	if (jsonwebtoken) {//Signin
		try {
			const data = jwtDecode(jsonwebtoken);
			user.id = data.userId;
			user.token = jsonwebtoken;
			setCookie("user", user, JSON.stringify, {
				expires: dayjs.unix(data.exp).toDate()
			});
			callCallbacks();
		} catch (error) {
			if (error.name === "InvalidTokenError") {
				if (callOnFailure) callCallbacks();
			} else {
				throw error;
			}
		}
	} else {//Signout
		clearUser();
	}
};
