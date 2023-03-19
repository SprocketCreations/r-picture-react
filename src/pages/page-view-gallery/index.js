import React, { useState, useEffect } from "react";
import "./style.css";

import { useUser } from "../../utils";
import { Feed, TwoColumn, PictureThumbnail, GalleryDetails } from "../../components";
import { useParams } from "react-router";

export default function PageViewGallery() {
	const [user] = useUser();
	const { galleryId } = useParams();
	/** @type {[Array<number>, (pictures: Array<number>) => void]} */
	const [pictures, setPictures] = useState([]);
	const [gallery, setGallery] = useState(null);
	const [outgoing, setOutgoing] = useState(false);

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/gallery/${galleryId}`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);
			if (response.status === 200) {
				const json = await response.json();
				console.log(json);
				setPictures(json.pictures);
				setGallery({
					name: json.name,
					description: json.description,
					followers: json.followerCount,
					id: json.id,
					following: json.following,
				});
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
			load();
		}
	}, []);

	return (
		<TwoColumn left={
			<Feed>
				{pictures.map(pictureId =>
					<PictureThumbnail
						key={pictureId}
						pictureId={pictureId}
					/>)}
			</Feed>
		} right={
			<GalleryDetails
				name={gallery?.name}
				description={gallery?.description}
				followers={gallery?.followers}
				galleryId={gallery?.id}
				following={gallery?.following}
				refetch={load}
			/>
		} />
	);
}