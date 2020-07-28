import { Field, Form, Formik } from "formik";
import axios from "axios";

const newMessage = () => {
  const [uhmessages, setUserMessage] = React.useState("");
  const [to_user, setTo_user] = React.useState("");
  const [from_user, setFrom_user] = React.useState("");
  const [dateTime, setDateTime] = React.useState(
    new Date(Date.now()).toLocaleString()
  );
  const handleNewMesseages = (userMessage) => {
    setDateTime(new Date(Date.now()).toLocaleString());
    const message = {
      from_user: from_user,
      to_user: to_user,
      message: userMessage.message,
      time: dateTime,
    };

    console.log("body: " + JSON.stringify(message));
    /*axios
      .post("/api/newMessage", message)
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
      */
  };
  return (
    <div class="card-body container ">
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleNewMesseages(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form class="row" onSubmit={handleSubmit}>
            <Field
              type="text"
              name="message"
              className="form-control col-md-10"
              placeholder="Enter a message..."
              maxLength="200"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              class="btn col btn-primary"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default newMessage;
