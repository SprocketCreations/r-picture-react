import React from "react";
import "./style.css";

import { NewPictureDetails, NewPicturePreview, NewPictureTags, TwoColumn } from "../../components";

export default function PageNewPicture() {
	return (
		<main className="page-new-picture">
			<TwoColumn left={
				<form className="new-picture-form">
					<NewPictureDetails />
					<NewPicturePreview />
				</form>
			} right={
				<NewPictureTags />
			} />
		</main>
	);
}