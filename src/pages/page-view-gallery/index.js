import React from "react";
import "./style.css";

import { Feed, TwoColumn, PictureThumbnail, GalleryDetails } from "../../components";

export default function PageViewGallery() {
	return (
		<main className="page-view-gallery">
			<TwoColumn left={
				<Feed>
					<PictureThumbnail/>
				</Feed>
			} right={
				<GalleryDetails/>
			}/>
		</main>
	);
}