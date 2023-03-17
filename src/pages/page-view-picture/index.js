import React, { useEffect, useState } from "react";
import "./style.css";

import { Comment, Comments, InGalleries, ListedGallery, PictureDetails, PicturePreview, TwoColumn } from "../../components";
import { useUser } from "../../utils";
import { useParams } from "react-router";

export default function PageViewPicture() {
	const [user] = useUser();
	const { pictureId } = useParams();
	const [picture, setPicture] = useState(null);
	const [outgoing, setOutgoing] = useState(false);

	const load = async () => {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => {
				console.log("Fetch took too long to execute. Took 8000ms.");
				controller.abort();
			}, 8000);
			// TODO: This is not the endpoint that should be used for this. It returns too much information.
			const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/picture/${pictureId}`, {
				headers: { authorization: `Bearer ${user.token}` },
				"signal": controller.signal
			});
			clearTimeout(timeout);

			if (response.status === 200) {
				const json = await response.json();
				console.log(json);
				setPicture(json);
			}
		} catch (error) {
			console.log(error);
		}
		setOutgoing(false);
	};

	// On mount
	useEffect(() => {
		if (!outgoing && !picture) {
			setOutgoing(true);
			load();
		}
	}, []);

	return (
		<main className="page-view-picture">
			<TwoColumn left={[
				<PicturePreview src={picture?.imageURL}/>,
				<Comments pictureId={picture?.id} refetch={load}>
					{picture?.comments?.map(comment =>
						<Comment
							ownerId={comment.owner?.id}
							ownerName={comment.owner?.displayName}
							text={comment.text}
						/>)}
				</Comments>
			]} right={[
				<PictureDetails
					name={picture?.name}
					owner={picture?.owner}
					description={picture?.description}
					pictureId={picture?.id}
					score={picture?.score}
					like={picture?.like}
					refetch={load}
				/>,
				...(picture?.galleries ?
					[<InGalleries>
						{picture.galleries?.map(gallery =>
							< ListedGallery
								key={gallery.id}
								id={gallery.id}
								name={gallery.name}
								followerCount={gallery.followerCount}
								following={gallery.follower}
								refetch={load}
							/>)}
					</InGalleries>] : [])
			]} />
		</main>
	);
}