import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import { useNavigate } from "react-router-dom";

function Login() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const navigate = useNavigate();

	const loginQuery = gql`
	 	query {
	      login(username: "${formData.username}",
	      password: "${formData.password}"){
	      	id
	      	token
	      }
	    }
	`;

	const handleSubmit = (e) => {
		e.preventDefault();

		request(process.env.REACT_APP_SERVER_URL + "/graphql", loginQuery)
			.then((data) => {
				localStorage.setItem("token", data.login.token);
				localStorage.setItem("id", data.login.id);
				setTimeout(() => {
					navigate("/blogs");
				}, 200);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>Login</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="username"
						name="username"
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						onChange={handleChange}
					/>
					<input type="submit" value="submit" />
				</form>
			</div>
			{/*	<div>
				{fetching && <p>submiting</p>}
				{error && <p>something went wrong</p>}
				{data && <p>login successful</p>}
			</div>*/}
		</div>
	);
}

export default Login;
