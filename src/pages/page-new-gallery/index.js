import React from "react";
import "./style.css";

import { NewGalleryDetails, TwoColumn } from "../../components";

export default function PageNewGallery() {
	return (
		<TwoColumn left={
			<NewGalleryDetails />
		} />
	);
}