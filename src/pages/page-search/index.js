import React from "react";
import { Feed, TwoColumn, PictureThumbnail, SearchGalleries, ListedGallery } from "../../components";
import "./style.css";

export default function PageSearch() {
    return (
        <main className="page-search">
            <TwoColumn left={
				<Feed>
					<PictureThumbnail/>
				</Feed>
			} right ={
				<SearchGalleries>
					<ListedGallery />
				</SearchGalleries>
			}/>
        </main>
    );
}