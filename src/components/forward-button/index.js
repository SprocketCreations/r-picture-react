import React, { useEffect, useState } from "react";
import "./style.css";
import { AddToGallery } from "../";

/**
 * @typedef {object} ForwardButtonProp
 * @property {number[]} takenGalleryIds The ids of the galleries this picturehas been forwarded to already.
 * @property {number} pictureId The id of the picture the user wants to forward.
 * 
 * @property {function():void} refetch A function that will refetch the picture when invoked.
 */
/**
 * @param {ForwardButtonProp} props
 * @returns {JSX.Element}
 */
export default function ForwardButton({ takenGalleryIds, pictureId, refetch }) {
	const [open, setOpen] = useState(false);

	return (
		<section className="forward-button">
			<button onClick={() => setOpen(true)}>⏩</button>
			{open && <AddToGallery takenGalleryIds={takenGalleryIds} pictureId={pictureId} close={() => setOpen(false)} refetch={refetch}/>}
		</section>
	);
}