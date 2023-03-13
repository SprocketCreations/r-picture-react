import React from "react";
import "./style.css";

export default function NewPicturePreview() {
	return (
		<section className="new-picture-preview">
			<label className="picture-file-label" htmlFor="picture-file">
				<div className="picture-file-empty">
					<p>
						Drag here or <span>Upload</span>
					</p>
				</div>
				<img src="" alt="" style={{ display: "none" }} />
			</label>
			<input type="file" name="picture-file" id="picture-file" style={{ display: "none" }} />
		</section>
	);
}