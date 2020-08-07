import Message from './message';

const conversation = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <Message key={message.createdAt} message={message} />
      ))}
    </>
  );
};

export default conversation;
