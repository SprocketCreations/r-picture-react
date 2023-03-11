import React from "react";
import "./style.css";

export default function NewPicturePreview() {
	return (
		<section className="new-picture-preview">
			<label htmlFor="picture-file">Drag here or <span>Upload</span></label>
			<input type="file" name="picture-file" id="picture-file" />
		</section>
	);
}