import React from "react";
import User from "./User";


function Sidebar() {
	return (
		<div className="col-md-5 col-lg-5 col-xl-4 mb-4 mb-md-0">
			<h5 className="font-weight-bold mb-3 text-center text-lg-start">
				Member
			</h5>

			<div className="card" style={{ background: "#dddddd" }}>
				<div className="card-body">
					<ul className="list-unstyled mb-0">
						<User />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
