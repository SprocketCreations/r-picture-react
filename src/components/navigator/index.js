import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navigator() {
	const [collapsed, setCollapsed] = useState(false);

	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");

	const signedIn = false;

	const search = event => {
		event.preventDefault();
		navigate(`/search/${encodeURIComponent(searchInput)}`);
	};

	return (
		<header className="navigator">
			<nav className={collapsed ? "collapsed" : ""}>
				<header>
					<button onClick={() => { setCollapsed(!collapsed) }}>{collapsed ? "▶" : "◀"}</button>
					<Link to="/" className="collapsable"><h1>R Picture</h1></Link>
				</header>
				<main>
					<Link to="/"><h2 className="collapsable"><span className="icon">🏠</span><span className="text">Home</span></h2></Link>

					<span>
						<Link tabindex="-1" to="javascript:void(0);"><h2 className="collapsable">
							<span className="icon">🔎</span>
							<span className="text">
								<form onSubmit={search}>
									<input value={searchInput} onChange={event=>setSearchInput(event.target.value)} type="search" name="search" id="search" />
								</form>
							</span>
						</h2></Link>
						<p>
							Use a # to search for a tag
						</p>
					</span>

					<Link to="/user/1"><h2 className="collapsable"><span className="icon">📫</span><span className="text">Profile</span></h2></Link>

					<span>
						<Link to="/picture/new"><h2 className="collapsable"><span className="icon">🖼</span><span className="text">New Picture</span></h2></Link>
						<Link to="/gallery/new"><h2 className="collapsable"><span className="icon">📁</span><span className="text">New Gallery</span></h2></Link>
					</span>


					{signedIn ? <Link to="javascript:void(0);"><h2 className="collapsable"><span className="icon">🔓</span><span className="text">Sign Out</span></h2></Link>
						: <Link to="/signin"><h2 className="collapsable"><span className="icon">🔐</span><span className="text">Sign In</span></h2></Link>}
				</main>
			</nav>
		</header >
	);
}