import Message from "./message";

const displayMessage = ({ messages, userID }) => {
  return (
    <React.Fragment>
      {messages.map((message) => (
        <Message
          from_user={message.from_user}
          to_user={message.to_user}
          from_user_message={message.message}
          userID={userID}
          time={message.time}
        />
      ))}
      ;
    </React.Fragment>
  );
};
export default displayMessage;
