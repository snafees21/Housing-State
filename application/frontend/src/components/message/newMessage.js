import { Field, Form, Formik } from "formik";
import axios from "axios";

const newMessage = () => {
  const [to_user, setTo_user] = React.useState("");
  const [from_user, setFrom_user] = React.useState("");

  const handleNewMesseages = (body) => {
   
    //console.log("body: " + JSON.stringify(body));
    /*
    axios
      .post("/api/newMessage", body)
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
    <div className="card-body container ">
      <Formik
        initialValues={{
          from_user: from_user,
          to_user: to_user,
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleNewMesseages(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className="row" onSubmit={handleSubmit}>
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
              className="btn col btn-primary"
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
