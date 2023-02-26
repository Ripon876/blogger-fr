import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			setLoggedIn((old) => true);
		}
	}, []);
	const logout = () => {
		console.log("logout");
		localStorage.clear();
		window.location.href = "/";
	};
	return (
		<div className="header">
			<ul>
				{!loggedIn ? (
					<>
						<li>
							<Link to="/signup">singup</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/blogs">blogs</Link>
						</li>
						<li>
							<Link to="/addblog">create blog</Link>
						</li>
						<li>
							<Link to="/chat"> chat</Link>
						</li>
						<li>
							<a onClick={logout} style={{ cursor: "pointer" }}>
								logout
							</a>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}

export default Header;
