import ShowRecent from "./showRecent";

import DisplayMessage from "./displayMessage";
import axios from "axios";

const messagePage = ({ userID, userName }) => {
  const [messages, setMessages] = React.useState([]);
  const [to_user, setTo_user] = React.useState("");
  const [from_user, setFrom_user] = React.useState("");

  const friends = [
    { id: 1, name: "Dave", message: "Hello! I like this house!" },
    { id: 2, name: "Kelly", message: "Hi! How much is this house?" },
    { id: 3, name: "Max", message: "Bye! This house is too small" },
    { id: 4, name: "Jack", message: "Thanks! I will move in tomorrow" },
    { id: 5, name: "David", message: "Hello! I interested in this house" },
    { id: 6, name: "Kayla", message: "Hi! I would like to see the kitchen" },
    { id: 7, name: "Maxie", message: "Bye!" },
    { id: 8, name: "Jacky", message: "Thanks!" },
  ];

  const friend2 = [
    { id: 1, name: "Dave", message: "Hello!" },
    { id: 2, name: "Kelly", message: "Hi!" },
    { id: 3, name: "Max", message: "Bye!" },
    { id: 4, name: "Jack", message: "Thanks!" },
  ];

  const friend3 = [
    { id: 1, name: "Dave", message: "Hello!" },
    { id: 2, name: "Kelly", message: "Hi!" },
  ];

  const smessages = [
    { id: 1, from_user: "Dave", to_user: "kelly", message: "Hello!" },
    { id: 2, from_user: "Kelly", to_user: "Dave", message: "bye" },
  ];

  //need to be replace
  const getMessages = (name, message) => {
    setFrom_user(name);
    setTo_user(message); //todo
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
  };

  const getRecentMessages = () => {
    /*axios
    .get('/api/message/recent', { params: query })
    .then((res) => {
    })
    .catch(() => {
      console.log("Failed");
    });
    */
  };

  return (
    <div class="row container-fluid message-no-padding">
      <div class="col-md-4 message-no-padding full-screen message-high-light">
        <ul
          class="nav nav-tabs message-high-light bg-dark"
          id="myTab"
          role="tablist"
        >
          <li class="card nav-item">
            <a
              class="nav-link bg-dark text-white"
              id="input-tab"
              data-toggle="tab"
              href="#input"
              role="tab"
            >
              Inbox
            </a>
          </li>
          <li class="card nav-item">
            <a
              class="nav-link bg-dark text-white"
              id="sent-tab"
              data-toggle="tab"
              href="#sent"
              role="tab"
            >
              Sent
            </a>
          </li>
          <li class="card nav-item">
            <a
              class="nav-link bg-dark text-white"
              id="marked-tab"
              data-toggle="tab"
              href="#marked"
              role="tab"
            >
              Marked
            </a>
          </li>
        </ul>

        <div class="tab-content bg-dark" id="myTabContent">
          <div class="tab-pane fade show active" id="input" role="tabpanel">
            <div class="col message-no-padding message-scroll">
              <div id="sent-tab" data-toggle="tab" href="#message" role="tab">
                {friends.map((friend) => (
                  <div onClick={() => getMessages(friend.name, friend.message)}>
                    <ShowRecent name={friend.name} message={friend.message} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="sent" role="tabpanel">
            <div class="col message-no-padding message-scroll">
              <div id="sent-tab" data-toggle="tab" href="#message" role="tab">
                {friend2.map((friend) => (
                  <div onClick={() => getMessages(friend.name, friend.message)}>
                    <ShowRecent name={friend.name} message={friend.message} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="marked" role="tabpanel">
            <div class="col message-no-padding message-scroll">
              <div id="sent-tab" data-toggle="tab" href="#message" role="tab">
                {friend3.map((friend) => (
                  <div onClick={() => getMessages(friend.name, friend.message)}>
                    <ShowRecent name={friend.name} message={friend.message} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col message-no-padding full-screen message-high-light bg-dark">
        <div class=" tab-content">
          <div class="tab-pane fade" id="message" role="tabpanel">
            <DisplayMessage from_user={from_user} to_user={to_user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default messagePage;
