import React from "react";
import "./style.css";

/**
 * @typedef {object} NewPicturePreviewProp
 * @property {(src: string) => void} setSrc A function to call when the user selects a picture for upload.
 * @property {string?} src The source of the image to display.
 */
/**
 * @param {NewPicturePreviewProp} props
 * @returns {JSX.Element}
 */
export default function NewPicturePreview({ setSrc, src }) {
	const upload = event => {
		const fileReader = new FileReader();
		fileReader.onload = event => setSrc(event.target.result)
		fileReader.readAsDataURL(event.target.files[0]);
	};

	return (
		<section className="new-picture-preview">
			<label className="picture-file-label" htmlFor="picture-file">
				{!src && <div className="picture-file-empty">
					<p>
						Drag here or <span>Upload</span>
					</p>
				</div>}
				{src && <img src={src} alt="The picture you just selected." />}
			</label>
			<input onChange={upload} type="file" accept=".jpg" name="picture-file" id="picture-file" style={{ display: "none" }} />
		</section>
	);
}