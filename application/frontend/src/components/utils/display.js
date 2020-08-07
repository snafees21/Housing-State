import { useAuth } from "../../utils/auth";
import axios from "axios";
import { Form, Formik, Field } from "formik";

const listingsDisplay = ({ listing }) => {
  const { authTokens } = useAuth();

  const handleNewMessage = (body) => {
    if (authTokens) {
      console.log("token");

    }
/*
    axios
      .post("/api/message/newmessage", body)
      .then((res) => {
        if (res.data.success) {
        } else {
          setError(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      */
  };

  return (
    <>
      <div className="row my-4 container-fluid align-item-center justify-content-center">
        <div className="col-lg-10">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <div className="embed-responsive embed-responsive-1by1 overflow img-thumbnail">
                    <img
                      src={`http://localhost:3000/${listing.img_path}`}
                      className="card-img-top embed-responsive-item img-fluid"
                    />
                  </div>
                </div>
                <div className="col-4 text-left">
                  <h5>{listing.full_address}</h5>
                  <ul>
                    <li>Bedrooms: {listing.bedrooms}</li>
                    <li>Bathrooms: {listing.bathrooms}</li>
                    <li>Cost: {listing.cost}</li>
                    <li>Offer Type: {listing.offer_type}</li>
                    <li>Unit Type: {listing.unit_type}</li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Contact
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Send them a message!
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <Formik
                            initialValues={{
                              from_user: "",
                              to_user: "",
                              message: "",
                            }}
                            onSubmit={(values, { resetForm }) => {
                              handleNewMessage(values);
                              resetForm();
                            }}
                          >
                            {({
                              values,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                            }) => (
                              <Form className="row" onSubmit={handleSubmit}>
                                <Field
                                  type="text"
                                  name="message"
                                  className="form-control col"
                                  placeholder="Enter a message..."
                                  maxLength="200"
                                  value={values.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <div class="col-md-2">
                                  <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-dark"
                                  >
                                    Send
                                  </button>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default listingsDisplay;
