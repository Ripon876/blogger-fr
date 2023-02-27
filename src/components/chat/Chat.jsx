import { useState, useEffect } from "react";
import { gqlClient, usersQuery } from "../../gqlClient";

import Sidebar from "./sidebar/Sidebar";
import Chats from "./chats/Chats";
import "./Chat.css";

function Chat() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
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
