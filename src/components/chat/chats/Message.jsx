import React from "react";

function Message({ msg }) {
	return (
		<div
			className={
				localStorage.getItem("id") === msg.from._id
					? "chat"
					: "chat chat-left"
			}
		>
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
				<div className="chat-content text-start w-50">
					<p>{msg?.message}</p>
				</div>
			</div>
		</div>
	);
}

export default Message;
