import React from "react";
import "./style.css";
import { ForwardButton } from "../../components"

import { Link } from "react-router-dom";

export default function PictureThumbnail() {
	return (
		<artical className="picture-thumbnail">
			<Link to="/picture/3">
				<header>
					<Link to="/user/23">Username</Link>
					<Link to="/gallery/23">Gallery</Link>
				</header>
				<main>
					<img src="http://placekitten.com/200/300" />
				</main>
				<footer>
					<h3>Picture Name</h3>
					<span>
						<span>
							12💬
						</span>
						<ForwardButton />
						<span>
							<button>⬆</button>
							<span>14</span>
							<button>⬇</button>
						</span>
					</span>
				</footer>
			</Link>
		</artical>
	);
}