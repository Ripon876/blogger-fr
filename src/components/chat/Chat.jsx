import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Chats from "./chats/Chats";
import "./Chat.css";

function Chat() {
	return (
		<div>
			<h1>Chat</h1>
			<div className="container">
				<div className="container bootstrap snippets bootdeys row">
					<Sidebar />
					<Chats />
				</div>
			</div>
		</div>
	);
}

export default Chat;
