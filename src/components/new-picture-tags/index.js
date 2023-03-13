import React from "react";
import "./style.css";

export default function NewPictureTags() {
	return (
		<section className="new-picture-tags">
			<header>
				<h3>Add Tags</h3>
			</header>
			<main>
				<ul>
					<li>
						<button>Tagname X</button>
					</li>
				</ul>
			</main>
			<footer>
				<button>Add +</button>
				<section>
					<header>
						<input type="search" name="tag-filter-search" id="tag-filter-search" />
						<ul>
							<li><button>Tag</button></li>
							<li><button>Tag2</button></li>
							<li><button>Tag3</button></li>
						</ul>
					</header>
				</section>
			</footer>
		</section>
	);
}