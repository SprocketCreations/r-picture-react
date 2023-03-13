import React from "react";
import "./style.css";

import { Comment, Comments, InGalleries, ListedGallery, PictureDetails, PicturePreview, TwoColumn } from "../../components";

export default function PageViewPicture() {
    return (
        <main className="page-view-picture">
            <TwoColumn left={[
				<PicturePreview/>,
				<Comments>
					<Comment/>
					<Comment/>
				</Comments>
			]} right={[
				<PictureDetails/>,
				<InGalleries>
					<ListedGallery/>
					<ListedGallery/>
				</InGalleries>
			]}/>
        </main>
    );
}