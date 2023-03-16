import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Feed, TwoColumn, PictureThumbnail, SearchGalleries, ListedGallery } from "../../components";
import { useUser } from "../../utils";
import "./style.css";

export default function PageSearch() {
	const [user] = useUser();
	const { term } = useParams();
	const [oldTerm, setOldTerm] = useState(term);

	const tag = /#(.+)/.exec(term)?.[1];
	const search = tag ? null : term;

	const [pictures, setPictures] = useState([]);
	const [galleries, setGalleries] = useState([]);
	const [galleriesOutgoing, setGalleriesOutgoing] = useState(false);
	const [picturesOutgoing, setPicturesOutgoing] = useState(false);

	const loadGalleries = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/search/gallery/${encodeURIComponent(search)}`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);
			if (response.status === 200) {
				const json = await response.json();
				console.log(json);
				setGalleries(json.galleries);
			}
		} catch (error) {
			console.log(error);
		}
		setGalleriesOutgoing(false);
	};

	const loadPictures = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/search/${tag ? "tag" : "picture"}/${encodeURIComponent(tag ? tag : search)}`, {
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
		setPicturesOutgoing(false);
	};

	if (term !== oldTerm) {
		setOldTerm(term);

		setPicturesOutgoing(true);
		loadPictures();

		setGalleriesOutgoing(true);
		loadGalleries();
	}

	useEffect(() => {
		if (!picturesOutgoing && pictures.length === 0) {
			// Call once at genesis.
			setPicturesOutgoing(true);
			loadPictures();
		}

		if (!galleriesOutgoing && galleries.length === 0) {
			// Call once at genesis.
			setGalleriesOutgoing(true);
			loadGalleries();
		}
	}, []);

	return (
		<main className="page-search">
			<TwoColumn left={
				<Feed>
					{pictures.map(pictureId =>
						<PictureThumbnail
							key={pictureId}
							pictureId={pictureId}
						/>)}
				</Feed>
			} right={
				<SearchGalleries>
					{galleries.map(gallery =>
						<ListedGallery
							key={gallery.id}
							id={gallery.id}
							name={gallery.name}
							followerCount={gallery.followerCount}
							following={gallery.following}
							refetch={loadGalleries}
						/>)}
				</SearchGalleries>
			} />
		</main>
	);
}