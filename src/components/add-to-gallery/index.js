import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../../utils";
import "./style.css";

/**
 * @typedef {object} AddToGalleryProp
 * @property {number[]} takenGalleryIds The ids of the galleries this picturehas been forwarded to already..
 * @property {number} pictureId The id of the picture the user wants to forward.
 * @property {function():void} close A function to call to close this modal.
 * 
 * @property {function():void} refetch A function that will refetch the picture when invoked.
 */
/**
 * @param {AddToGalleryProp} props
 * @returns {JSX.Element}
 */
export default function AddToGallery({ takenGalleryIds, pictureId, close, refetch }) {
	const [user] = useUser();
	const [searchFilter, setSearchFilter] = useState("");
	/** @type {[Array<{id: number, name: string}>, (galleries: Array<{id: number, name: string}>) => void]} */
	const [galleries, setGalleries] = useState([]);
	const [outgoingLoad, setOutgoingLoad] = useState(false);
	const [outgoingForward, setOutgoingForward] = useState(false);

	const forward = async galleryId => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/picture/${pictureId}/gallery`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${user.token}`
				},
				"signal": controller.signal,
				body: JSON.stringify({
					galleryId: galleryId
				}),
			});
			clearTimeout(timeout);
			if (response.status === 204) {
				refetch();
				close();
			} else {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoingForward(false);
	};

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/user/${user.id || 0}/gallery`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);
			if (response.status === 200) {
				/** @type {{galleries: Array<{id: number, name: string}>}} */
				const json = await response.json();
				setGalleries(json.galleries.sort((a, b) => a.name.localeCompare(b.name)));
				console.log(json);
			} else {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoingLoad(false);
	};

	useEffect(() => {
		//On mount
		if (!outgoingLoad) {
			setOutgoingLoad(true);
			load();
		}
	}, []);

	const tryForward = galleryId => {
		if(!outgoingForward) {
			setOutgoingForward(true);
			forward(galleryId);
		}
	};

	const searchBoxRef = useRef(null);
	useEffect(() => {
		searchBoxRef?.current?.focus();
	}, []);

	return (
		<div className="add-to-gallery" onClick={close}>
			<section onClick={event => event.stopPropagation()}>
				<header>
					<h3>Forward</h3>
					<input ref={searchBoxRef} value={searchFilter} onChange={event => setSearchFilter(event.target.value)} type="search" placeholder="Search..." />
				</header>
				<main>
					<ul>
						{galleries
							.filter(gallery => !takenGalleryIds?.find((takenGalleryId) => takenGalleryId === gallery.id))
							.filter(gallery => gallery.name.toLowerCase().includes(searchFilter.toLowerCase()))
							.map(gallery => <li><button onClick={() => tryForward(gallery.id)}>{gallery.name}</button></li>)}
					</ul>
				</main>
			</section>
		</div>
	);
}