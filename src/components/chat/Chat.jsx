import { useState, useEffect } from "react";
import { gqlClient, usersQuery } from "../../gqlClient";
import { io } from "socket.io-client";
import Sidebar from "./sidebar/Sidebar";
import Chats from "./chats/Chats";
import "./Chat.css";

let socket;
function Chat() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		socket = io("http://localhost:5000");

		gqlClient
			.request(usersQuery)
			.then((data) => {
				setUsers([...data.users]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>Chat</h1>
			<div className="container">
				<div className="container bootstrap snippets bootdeys row">
					<Sidebar users={users} />
					<Chats />
				</div>
			</div>
		</div>
	);
}

export default Chat;
