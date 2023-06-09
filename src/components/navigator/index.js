import React, { useState } from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../utils";

export default function Navigator() {
	const {pathname: location} = useLocation();

	const [user, setUser] = useUser();
	const [collapsed, setCollapsed] = useState(false);
	const [showSearchBar, setShowSearchBar] = useState(false);

	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");

	const signedIn = !!user.id;

	const search = event => {
		event.preventDefault();
		navigate(`/search/${encodeURIComponent(searchInput)}`);
	};

	const signout = event => {
		setUser(null);
	};

	return (
		<header className="navigator">
			<nav className={collapsed ? "collapsed" : ""}>
				<header>
					<button onClick={() => { setCollapsed(!collapsed) }}>{collapsed ? "▶" : "◀"}</button>
					<Link to="/" className="collapsable"><h1>R Picture</h1></Link>
				</header>
				<main>
					<Link to="/" className={location === "/" ? "active": ""}><h2 className="collapsable"><span className="icon">🏠</span><span className="text">Home</span></h2></Link>

					<span>
						<Link className={/\/search\/\w+/.test(location) ? "active": ""} onClick={() => setShowSearchBar(!showSearchBar)} tabindex="-1" to="javascript:void(0);" draggable={false} style={{}}><h2 className="collapsable">
							<span className="icon">🔎</span>
							<span onClick={event => event.stopPropagation()}className={`text search-bar ${showSearchBar && "open-search-bar"}`}>
								<form onSubmit={search}>
									<input value={searchInput} onChange={event => setSearchInput(event.target.value)} type="text" name="search" id="search" />
									<p>
										Use a # to search for a tag
									</p>
								</form>
							</span>
						</h2></Link>
						<p>
							Use a # to search for a tag
						</p>
					</span>

					<Link className={/^\/user\/[0-9]+$/.test(location) ? "active": ""} style={{ visibility: signedIn ? "visible" : "hidden" }} to={`/user/${user.id}`}><h2 className="collapsable"><span className="icon">📫</span><span className="text">Profile</span></h2></Link>

					<span style={{ visibility: signedIn ? "visible" : "hidden" }}>
						<Link className={location === "/picture/new" ? "active": ""} to="/picture/new"><h2 className="collapsable"><span className="icon">📷</span><span className="text">New Picture</span></h2></Link>
						<Link className={location === "/gallery/new" ? "active": ""} to="/gallery/new"><h2 className="collapsable"><span className="icon">📁</span><span className="text">New Gallery</span></h2></Link>
					</span>


					{signedIn ? <Link onClick={signout} to="javascript:void(0);" draggable={false}><h2 className="collapsable"><span className="icon">🔓</span><span className="text">Sign Out</span></h2></Link>
						: <Link className={/\/sign(in|up)/.test(location) ? "active": ""} to="/signin"><h2 className="collapsable"><span className="icon">🔐</span><span className="text">Sign In</span></h2></Link>}
				</main>
			</nav>
		</header >
	);
}