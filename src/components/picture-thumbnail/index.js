import React, { useEffect, useState } from "react";
import "./style.css";

import { ForwardButton, PictureVoting } from "../"

import { Link } from "react-router-dom";
import { useUser } from "../../utils";

/**
 * @typedef {object} PictureThumbnailProp
 * @property {number} pictureId The id of the picture.
 * @property {number?} galleryId The id of the gallery.
 */
/**
 * @param {PictureThumbnailProp} props
 * @returns {JSX.Element}
 */
export default function PictureThumbnail({ pictureId, galleryId }) {
	const [user] = useUser();
	/**
	 * @typedef {object} Picture
	 * @property {string} name The name of the picture.
	 * @property {number} commentCount The number of comments.
	 * @property {number} score The score.
	 * @property {object} owner The owner.
	 * @property {number} owner.id The id of the owner.
	 * @property {string} owner.displayName The display name of the user.
	 * @property {object} gallery The gallery.
	 * @property {number} gallery.id The id of the gallery.
	 * @property {string} gallery.name The name of the gallery.
	 * @property {object} like The like.
	 * @property {number} like.id The id of the like.
	 * @property {number} like.delta The delta of the like.
	 */
	/** @type {[Picture, (picture: Picture) => void]} */
	const [picture, setPicture] = useState(null);
	const [outgoing, setOutgoing] = useState(false);

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			// TODO: This is not the endpoint that should be used for this. It returns too much information.
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/picture/${pictureId}`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 200) {
				const json = await response.json();
				console.log(json)
				setPicture({
					name: json.name,
					commentCount: json.comments.length,
					score: json.score,
					owner: {
						id: json.owner?.id,
						displayName: json.owner?.displayName
					},
					gallery: {
						id: galleryId,
						name: json.galleries?.find(gallery => gallery.id === galleryId)?.name
					},
					like: {
						id: json.like?.id,
						delta: json.like?.delta,
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	// On mount
	useEffect(() => {
		if (!outgoing && !picture) {
			setOutgoing(true);
			load();
		}
	}, []);

	return (
		<article className="picture-thumbnail">
			<main>
				<Link to={`/picture/${pictureId}`}>
					<img src="http://placekitten.com/200/300" />
				</Link>
			</main>
			<header className="picture-meta">
				<row>
					<column>
						<Link to={`/user/${picture?.owner?.id}`}><h4>{picture?.owner?.displayName || "error"}</h4></Link>
					</column>
					<column>
						<Link to={`/picture/${pictureId}`}><h3>{picture?.name}</h3></Link>
					</column>
					<column>
						{galleryId && <Link to={`/gallery/${galleryId}`}><h4>{picture?.gallery?.name}</h4></Link>}
					</column>
				</row>
				<row>
					<column>
						<Link to={`/picture/${pictureId}`}>{picture?.commentCount || 0}💬</Link>
					</column>
					<column>
						<ForwardButton />
					</column>
					<column className="vote-widget">
						<PictureVoting
							pictureId={pictureId}
							score={picture?.score}
							id={picture?.like?.id}
							delta={picture?.like?.delta}
							refetch={load}
						/>
					</column>
				</row>
			</header >
		</article >
	);
}