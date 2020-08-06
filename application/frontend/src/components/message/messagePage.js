import ShowRecent from "./showRecent";
import DisplayMessage from "./displayMessage";
import NewMessage from "./newMessage";
import axios from "axios";

const messagePage = ({ userID }) => {
  //const [messages, setMessages] = React.useState([]);
  //const [recentMessages, setRecentMessages] = React.useState([]);
  const [from_user, setFrom_user] = React.useState("");

  /*
    <button
      className="btn message-no-padding float-right"
      onClick={() => deleteMessage(message.id)}>
      X
     </button>
   */

  const messages = [
    {
      id: 1,
      name: "Dav",
      message: "Hello! I like this house!",
      time: "11:00 AM",
    },
    {
      id: 2,
      name: "Kelly",
      message: "Hi! How much is this house?",
      time: "12:06 PM",
    },
    {
      id: 3,
      name: "Max",
      message: "This house seems a little too small...",
      time: "1:09 AM",
    },
    {
      id: 4,
      name: "Jack",
      message: "Thanks! I will move in tomorrow",
      time: "5:00 AM",
    },
    {
      id: 5,
      name: "David",
      message: "Hello! I interested in this house",
      time: "12:01 PM",
    },
    {
      id: 6,
      name: "Kayla",
      message: "Hi! I would like to see the kitchen",
      time: "11:40 AM",
    },
    {
      id: 7,
      name: "Maxie",
      message: "Bye...Have a nice day!",
      time: "3:59 AM",
    },
    { id: 8, name: "Jacky", message: "Thanks! Will do", time: "11:45 AM" },
  ];

  const smessages = [
    {
      id: 10,
      from_user: "Dave",
      to_user: "kelly",
      message: "Hello!",
      time: "11:45 AM",
    },
    {
      id: 11,
      from_user: "Kelly",
      to_user: "Dave",
      message: "Hi",
      time: "11:46 AM",
    },
    {
      id: 12,
      from_user: "Dave",
      to_user: "kelly",
      message: "How are you!",
      time: "11:47 AM",
    },
    {
      id: 13,
      from_user: "Kelly",
      to_user: "Dave",
      message: "Im good and you?",
      time: "11:48 AM",
    },
    {
      id: 14,
      from_user: "Dave",
      to_user: "kelly",
      message: "Im good! Thanks for asking",
      time: "11:49 AM",
    },
    {
      id: 15,
      from_user: "Kelly",
      to_user: "Dave",
      message: "Cool",
      time: "11:50 AM",
    },
  ];

  //need to be replace
  const getMessages = (from_user) => {
    setFrom_user(from_user);
    //console.log("last: "+ JSON.stringify(smessages[smessages.length-1]));
    /*
    query ={
      from_user: from_user,
      to_user: userID
    }
    axios
      .get('/api/message/conversation', { params: query })
      .then((res) => {
        setMessages(res.data);
      })
      .catch(() => {
        console.log("Failed");
      });*/
  };
  /*
  const getRecentMessages = () => {
    query ={
      to_user: userID
    }
    axios
    .get('/api/message/recent', { params: query })
    .then((res) => {
      setRecentMessages(res.data)
    })
    .catch(() => {
      console.log("Failed");
    });
  };
*/
  const deleteMessage = (delete_User_ID) => {
    console.log("ID is: " + delete_User_ID);
    /*axios
    .get('/api/deleteMessage', { params: query })
    .then((res) => {
    })
    .catch(() => {
      console.log("Failed");
    });
    */
  };
  

  return (
    <div className="row container-fluid message-no-padding bg-black">
      <div className="col-md-4 message-no-padding full-screen message-high-light">
        <center className="card-header text-white">Inbox</center>
        <div className="message-no-padding message-scroll">
          {messages.map((message) => (
            <div  className="message-high-light bg-dark" onClick={() => getMessages(message.name)}>
              <a
                className="nav-link message-select"
                id="selectMessage"
                data-toggle="tab"
                href="#message"
                role="tab"
              >
                <ShowRecent
                  name={message.name}
                  message={message.message}
                  time={message.time}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="col message-no-padding full-screen message-high-light bg-dark">
        <div className=" tab-content">
          <div className="tab-pane fade" id="message" role="tabpanel">
            <div className="card bg-dark full-screen">
              <center className="card-header font-weight-bold text-white">
                {from_user}
              </center>
              <div className="bg-black message-scroll">
                <DisplayMessage messages={smessages} userID={"Dave"} />
              </div>
              <NewMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messagePage;
