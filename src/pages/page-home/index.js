import React from "react";
import "./style.css";
import { Feed, PictureThumbnail, TwoColumn } from "../../components";

export default function PageHome() {
	return (
		<main className="page-home">
			<TwoColumn left={
				<Feed>
					<PictureThumbnail/>
					<PictureThumbnail/>
					<PictureThumbnail/>
					<PictureThumbnail/>
				</Feed>
			} right={[
				//Nothing for now.
			]} />
		</main>
	);
}