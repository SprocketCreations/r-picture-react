import React, { useState, useEffect } from "react";
import "./style.css";

import { useUser } from "../../utils";
import {
	PictureThumbnail,
	Feed,
	TwoColumn,
	UserDetails
} from "../../components";
import { useParams } from "react-router";

export default function PageUserProfile() {
	const [user] = useUser();
	const { userId } = useParams();
	const [oldUserId, setOldUserId] = useState(userId);
	/** @type {[Array<number>, (pictures: Array<number>) => void]} */
	const [pictures, setPictures] = useState([]);
	const [userProfile, setUserProfile] = useState(null);
	const [outgoing, setOutgoing] = useState(false);

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${userId}/profile`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);
			if (response.status === 200) {
				const json = await response.json();
				console.log(json);
				setPictures(json.pictures);
				setUserProfile({
					name: json.displayName,
					bio: json.bio,
					followers: json.followerCount,
					following: json.following,
				});
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	if (oldUserId !== userId) {
		setOldUserId(userId);
		setOutgoing(true);
		load();
	}

	useEffect(() => {
		if (!outgoing && pictures.length === 0) {
			// Call once at genesis.
			setOutgoing(true);
			load();
		}
	}, []);

	return (
		<main className="page-user-profile">
			<TwoColumn left={
				<Feed>
					{pictures.map(pictureId =>
						<PictureThumbnail
							key={pictureId}
							pictureId={pictureId}
						/>)}
				</Feed>
			} right={
				<UserDetails
					name={userProfile?.name}
					bio={userProfile?.bio}
					followers={userProfile?.followers}
					userId={userId}
					following={userProfile?.following}
					refetch={load}
				/>
			} />
		</main>
	);
}