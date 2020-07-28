import NewMessage from "./newMessage";
import Message from "./message";

const displayMessage = ({ from_user, to_user }) => {
  /*
  const getMessages = () => {
    setFrom_user(name);
    setTo_user(message);//todo
    /*
    query ={
      to_user: to_user,
      from_user: from_user
    }
    axios
      .get('/api/message/conversation', { params: query })
      .then((res) => {
      })
      .catch(() => {
        console.log("Failed");
      });
*/
  return (
    <React.Fragment>
      <div class="card bg-dark full-screen">
        <center class="card-header font-weight-bold text-white">
          {from_user}
        </center>
        <div class="card-body bg-black message-scroll">
          <Message
            from_user={from_user}
            from_user_message={to_user}
            userID={"Dave"}
            time={"11:30PM"}
          />
        </div>
        <NewMessage />
      </div>
    </React.Fragment>
  );
};
export default displayMessage;
