import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

function Blog({ blog }) {
	const [comments, setComments] = useState([...blog.comments]);
	const [comment, setComment] = useState("");

	const commentMutationQuery = gql`
		mutation {
			createComment(
				comment: "${comment}",
				blog_id: "${blog._id}"
			) {
				comment
				author {
					username
				}
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

	const handleChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = () => {
		graphQLClient
			.request(commentMutationQuery)
			.then((data) => {
				console.log(data.createComment);
				// blog.comments.push(data.createComment);
				setComment("");
				setComments([...comments, data.createComment]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="blog">
			<div>
				<h3>{blog?.title}</h3>
				<p className="author">
					by : <span>{blog?.author?.username}</span>
				</p>
				<p className="content">{blog?.content}</p>
				<div className="comments">
					<h6 style={{ margin: 0 }}>Comments</h6>
					<div>
						{comments?.map((comment, i) => (
							<p className="author" key={"sdfd23vs" + i}>
								{comment.comment} by :
								<span> {comment.author.username}</span>
							</p>
						))}
					</div>
					<input
						type="text"
						placeholder="leave a comment"
						onChange={handleChange}
						value={comment}
					/>
					<input type="submit" onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
}

export default Blog;
