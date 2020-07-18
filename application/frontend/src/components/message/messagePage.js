import AllMessages from "../message/allMessages";
import axios from "axios";

const messagePage = () => {
  const [messages, setMessages] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [userMessage, setUserMessage] = React.useState('');

  const handleNewMesseages = () => {
    const body = {
      username: username,
      message: userMessage,
    };
    axios
      .post("/api/userNewMessages", body)
      .then((res) => {
        if (res.data) {
          console.log("success");
        } else {
          console.log(res.data);
        }
      })
      .catch(() => {
        console.log("Failed");
      });
  };

  const getAllMessages = () => {
    axios
      .post("/api/getAllMessages", body)
      .then((res) => {
        if (res.data) {
          console.log("success");
        } else {
          console.log(res.data);
        }
      })
      .catch(() => {
        console.log("Failed");
      });
  };

  return (
    <div class="row container-fluid no-padding bg-dark">
      <div class="col-md-5 no-padding high-light full-screen">
        <ul class="nav nav-tabs high-light" id="myTab" role="tablist">
          <li class="nav-item high-light">
            <a
              class="nav-link bg-dark text-white"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Inbox
            </a>
          </li>
          <li class="nav-item high-light">
            <a
              class="nav-link bg-dark text-white"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Sent
            </a>
          </li>
          <li class="nav-item high-light">
            <a
              class="nav-link bg-dark text-white"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Marked
            </a>
          </li>
        </ul>

        <div class="tab-content high-light2" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="col high-light3 no-padding">
              <div className=" scroll ">
                <AllMessages />
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="col high-light3 no-padding">
              <div className=" scroll ">
                <AllMessages />
                <AllMessages />
                <AllMessages />
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div class="col high-light3 no-padding">
              <div className="scroll">
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col high-light4 d-flex justify-content-center">
        <div>Text</div>
      </div>
    </div>
  );
};

export default messagePage;
