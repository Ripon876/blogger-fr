import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { gqlClient, threadQuery, sendMsgQuery } from "../../../gqlClient";
import Message from "./Message";

function Chats() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const [searchParams] = useSearchParams();
	const [msgs, setMsgs] = useState([]);
	const [user, setUser] = useState({});
	const [thread, setThread] = useState("");
	const [newMsg, setNewMsg] = useState("");
	const messagesEndRef = useRef(null);

	useEffect(() => {
		let query = threadQuery([
			localStorage.getItem("id"),
			urlParams.get("thread"),
		]);

		if (urlParams.get("thread")) {
			gqlClient
				.request(query)
				.then((data) => {
					setUser(
						data.getThread.users.find(
							(u) => u._id !== localStorage.getItem("id")
						)
					);
					setThread(data.getThread._id);
					setMsgs([...data.getThread.messages]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [searchParams]);

	const sendMsg = () => {
		let msgQuery = sendMsgQuery({
			from: localStorage.getItem("id"),
			to: user._id,
			message: newMsg,
			thread: thread,
		});

		gqlClient
			.request(msgQuery)
			.then((data) => {
				console.log(data);
				setMsgs([...msgs, data.createMessage]);
				setNewMsg("");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
		scrollToBottom();
	}, [msgs]);
	return (
		<div className="col-md-7 col-xs-12 col-md-offset-2 m-auto shadow">
			<div className="panel" id="chat">
				<div className="panel-heading">
					<h3 className="panel-title">
						<i className="icon wb-chat-text" aria-hidden="true"></i>{" "}
						Chat
					</h3>
				</div>
				<div className="panel-body">
					<div className="chats">
						{msgs?.map((msg, i) => (
							<Message msg={msg} key={"smsdf" + i} />
						))}
						<div ref={messagesEndRef} id="rip" />
					</div>
				</div>
				<div className="panel-footer py-3">
					<form>
						<div className="d-flex form-group gap-2">
							<input
								type="text"
								className="form-control"
								placeholder="Say something"
								value={newMsg}
								onChange={(e) => setNewMsg(e.target.value)}
							/>
							<span>
								<button
									className="btn btn-dark"
									type="button"
									onClick={sendMsg}
								>
									Send
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Chats;
