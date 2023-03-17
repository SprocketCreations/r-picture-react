import React from "react";
import "./style.css";

/**
 * @typedef {object} PicturePreviewProp
 * @property {string} src The source of the image to display.
 */
/**
 * @param {PicturePreviewProp} props
 * @returns {JSX.Element}
 */
export default function PicturePreview({src}) {
	return (
		<section className="picture-preview">
			<img src={src} />
		</section>
	);
}