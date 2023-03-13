import React from "react";
import "./style.css";

import { NewGalleryDetails, TwoColumn } from "../../components";

export default function PageNewGallery() {
	return (
		<main className="page-new-gallery">
			<TwoColumn left ={
				<NewGalleryDetails/>
			} right={[]}/>
		</main>
	);
}