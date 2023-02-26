import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

function AddBlog() {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const [status, setStatus] = useState({
		success: false,
		error: false,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const mutationQuery = gql`
 	mutation {
    createBlog(
      title : "${formData.title}",
      content : "${formData.content}"
    ){
    	title
    }
  }

`;
	const graphQLClient = new GraphQLClient(
		process.env.REACT_APP_SERVER_URL + "/graphql",
		{
			headers: {
				authorization: "Bearer " + localStorage.getItem("token"),
			},
		}
	);
	const handleSubmit = (e) => {
		e.preventDefault();

		graphQLClient
			.request(mutationQuery)
			.then((data) => {
				setFormData({
					title: "",
					content: "",
				});

				setStatus({
					...status,
					success: true,
				});
			})
			.catch((err) => {
				console.log(err);
				setStatus({
					...status,
					error: true,
				});
			});
	};

	return (
		<div>
			<h1>Add Blog</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="title"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
					<br />
					<br />
					<textarea
						rows="5"
						placeholder="content"
						name="content"
						value={formData.content}
						onChange={handleChange}
					/>
					<br />

					<input type="submit" value="submit" />
				</form>
			</div>
			<div>
				{status.error && <p>something went wrong</p>}
				{status.success && <p>blog added</p>}
			</div>
		</div>
	);
}

export default AddBlog;
