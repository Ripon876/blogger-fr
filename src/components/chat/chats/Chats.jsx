import React from "react";

function Chats() {
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
						<div className="chat">
							<div className="chat-avatar">
								<a
									className="avatar avatar-online"
									data-toggle="tooltip"
									data-placement="right"
									title=""
									data-original-title="June Lane"
								>
									<img
										src="https://bootdey.com/img/Content/avatar/avatar1.png"
										alt="..."
									/>
									<i></i>
								</a>
							</div>
							<div className="chat-body">
								<div className="chat-content">
									<p>
										Good morning, sir.
										<br />
										What can I do for you?
									</p>
								</div>
							</div>
						</div>
						<div className="chat chat-left">
							<div className="chat-avatar">
								<a
									className="avatar avatar-online"
									data-toggle="tooltip"
									data-placement="left"
									title=""
									data-original-title="Edward Fletcher"
								>
									<img
										src="https://bootdey.com/img/Content/avatar/avatar2.png"
										alt="..."
									/>
									<i></i>
								</a>
							</div>
							<div className="chat-body">
								<div className="chat-content">
									<p>Well, I am just looking around.</p>
								</div>
							</div>
						</div>
						<div className="chat">
							<div className="chat-avatar">
								<a
									className="avatar avatar-online"
									data-toggle="tooltip"
									data-placement="right"
									title=""
									data-original-title="June Lane"
								>
									<img
										src="https://bootdey.com/img/Content/avatar/avatar1.png"
										alt="..."
									/>
									<i></i>
								</a>
							</div>
							<div className="chat-body">
								<div className="chat-content">
									<p>If necessary, please ask me.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-footer py-3">
					<form>
						<div className="d-flex form-group gap-2">
							<input
								type="text"
								className="form-control"
								placeholder="Say something"
							/>
							<span>
								<button className="btn btn-dark" type="button">
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
