import { Outlet, Navigate } from "react-router-dom";

function NotRequireAuth() {
	let token = localStorage.getItem("token");

	return token ? <Navigate to="/blogs" /> : <Outlet />;
}

export default NotRequireAuth;
