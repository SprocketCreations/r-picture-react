import React from "react";
import "./style.css";

import {
	PictureThumbnail,
	Feed,
	TwoColumn,
	UserDetails
} from "../../components";

export default function PageUserProfile() {
	return (
		<main className="page-user-profile">
			<TwoColumn left={
				<Feed>
					<PictureThumbnail />
				</Feed>
			} right={
				<UserDetails />
			} />
		</main>
	);
}