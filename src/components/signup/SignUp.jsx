import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const mutationQuery = gql` 
    mutation {
      createUser(
        username: "${formData.username}",
        password: "${formData.password}"
      ){
        _id
        username
        password
      }
    }
`;

	const handleSubmit = (e) => {
		e.preventDefault();

		request(process.env.REACT_APP_SERVER_URL + "/graphql", mutationQuery)
			.then((data) => {
				setTimeout(() => {
					navigate("/login");
				}, 200);

				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>Singup</h1>
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
			<div>
				{/*{fetching && <p>submiting</p>}
				{error && <p>something went wrong</p>}
				{data && <p>singup successful</p>}*/}
			</div>
		</div>
	);
}

export default SignUp;
