import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import Blog from "./Blog";
import "./Blogs.css";

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const blogsQuery = gql`
		query {
			blogs {
				_id
				title
				content
				author {
					_id
					username
				}
				comments {
					comment
					author {
						username
					}
				}
				creation_date
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
	useEffect(() => {
		graphQLClient
			.request(blogsQuery)
			.then((data) => {
				console.log(data);
				setBlogs([...data.blogs]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>Blogs</h1>
			<div>
				{blogs?.map((blog, i) => (
					<Blog blog={blog} key={"saddsfdasd" + i} />
				))}
			</div>
		</div>
	);
}

export default Blogs;
