import React, { useState } from "react";
import "./style.css";

import { } from "../../components"
import { useUser } from "../../utils";

/**
 * @typedef {object} FollowButtonProp
 * @property {number} galleryId
 * @property {number} userId
 * @property {boolean?} following 
 * @property {function():void} refetch
 */
/**
 * @param {FollowButtonProp} props
 * @returns {JSX.Element}
 */
export default function FollowButton({ galleryId, userId, following, refetch }) {
	const [user] = useUser();
	const [outgoing, setOutgoing] = useState(false);

	const unfollowUserAsync = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id}/follow-user/${userId}`, {
				method: "DELETE",
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 200) {
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const followUserAsync = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id}/follow-user/${userId}`, {
				method: "POST",
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 201) {
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const unfollowGalleryAsync = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id}/follow-gallery/${galleryId}`, {
				method: "DELETE",
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 200) {
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const followGalleryAsync = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id}/follow-gallery/${galleryId}`, {
				method: "POST",
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 201) {
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	const follow = () => {
		if (!outgoing) {
			if (galleryId) {
				setOutgoing(true);
				followGalleryAsync();
			} else if (userId) {
				setOutgoing(true);
				followUserAsync();
			}
		}
	};

	const unfollow = () => {
		if (!outgoing) {
			if (galleryId) {
				setOutgoing(true);
				unfollowGalleryAsync();
			} else if (userId) {
				setOutgoing(true);
				unfollowUserAsync();
			}
		}
	};

	return (
		<section className="follow-details">
			{following !== undefined && following !== null &&
				(following ? <button onClick={unfollow}><span className="following">Following</span><span className="unfollow">Unfollow</span></button>
					: <button onClick={follow}>Follow</button>)}
		</section >
	);
}