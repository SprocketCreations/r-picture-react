import React from "react";
import "./style.css";

import { ForwardButton, PictureVoting } from "../"

import { Link } from "react-router-dom";

export default function PictureThumbnail() {
	return (
		<artical className="picture-thumbnail">
			<main>
				<Link to="/picture/3">
					<img src="http://placekitten.com/200/300" />
				</Link>
			</main>
			<header className="picture-meta">
				<row>
					<column>
						<Link to="/user/23"><h4>Username</h4></Link>
					</column>
					<column>
						<Link to="/picture/3"><h3>Picture Name</h3></Link>
					</column>
					<column>
						<Link to="/gallery/23"><h4>Gallery</h4></Link>
					</column>
				</row>
				<row>
					<column>
						<Link to="/picture/3">12💬</Link>
					</column>
					<column>
						<ForwardButton />
					</column>
					<column className="vote-widget">
						<PictureVoting/>
					</column>
				</row>
			</header >
		</artical >
	);
}