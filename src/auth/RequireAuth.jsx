import { Outlet, Navigate } from "react-router-dom";

function RequireAuth() {
	let token = localStorage.getItem("token");

	return token ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireAuth;
