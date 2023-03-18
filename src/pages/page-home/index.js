import React, { useEffect, useState } from "react";
import "./style.css";
import { Feed, PictureThumbnail, TwoColumn } from "../../components";
import { useUser } from "../../utils";

export default function PageHome() {
	const [user] = useUser();
	/** @type {[Array<{id: number, galleryId: number}>, (pictures: Array<{id: number, galleryId: number}>) => void]} */
	const [pictures, setPictures] = useState([]);
	const [outgoing, setOutgoing] = useState(false);

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id || 0}/feed`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);
			if (response.status === 200) {
				const json = await response.json();
				console.log(json);
				setPictures(json.pictures);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	useEffect(() => {
		if (!outgoing && pictures.length === 0) {
			// Call once at genesis.
			setOutgoing(true);
			// This is getting called twice Idk why
			load();
		}
	}, []);

	return (
		<TwoColumn left={
			<Feed>
				{pictures.map(picture =>
					<PictureThumbnail
						key={picture.id}
						pictureId={picture.id}
						galleryId={picture.galleryId}
					/>)}
			</Feed>
		} right={[
			//Nothing for now.
		]} />
	);
}