import React from "react";
import { Link } from "react-router-dom";

function User() {
	return (
		<li
			className="p-2 my-2"
			style={{
				boxShadow: " 4px -1px 5px #c3c3c3",
			}}
		>
			<Link to="/chat?thread=sdfasad3454dsfsdddsfasd">
				<div className="d-flex">
					<img
						src="https://via.placeholder.com/50x50"
						alt="avatar"
						className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
						width="60"
					/>
					<div className="align-items-center d-flex pt-1">
						<p className="fw-bold mb-0">Brad Pitt</p>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default User;
