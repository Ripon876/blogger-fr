import { GraphQLClient, gql } from "graphql-request";

const gqlClient = new GraphQLClient(
	process.env.REACT_APP_SERVER_URL + "/graphql",
	{
		headers: {
			authorization: "Bearer " + localStorage.getItem("token"),
		},
	}
);

const usersQuery = gql`
	query {
		users {
			_id
			username
		}
	}
`;

const userQuery = (id) => gql`
    query{
       user (id: "${id}") {
        _id
        username
      }
    }
`;

const threadQuery = (ids) => gql`
	mutation {
		getThread(
			users: ["${ids[0]}", "${ids[1]}"]
		) {
			_id
			users {
				_id
				username
			}
			messages {
				from {
			      _id
			      username
			    }
			   to {
			      _id
			      username
			   }
				message
				thread {
			      _id
			    }
			}
		}
	}
`;

const sendMsgQuery = (msg) => gql`

	mutation {
	  createMessage(from: "${msg.from}", to: "${msg.to}", message: "${msg.message}", thread: "${msg.thread}") {
	    from {
	      _id
	      username
	    }
	    to {
	      _id
	      username
	    }
	    message
	    thread {
	      _id
	    }
	  }
	}

`;

export { gqlClient, usersQuery, userQuery, threadQuery, sendMsgQuery };
