import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { TextInput } from '../utils/inputs';
import { useAuth } from '../../utils/auth';

const contact = ({ listing }) => {
  const [loginRequired, setLoginRequired] = React.useState(false);
  const { authTokens } = useAuth();

  const sendMessage = (text) => {
    if (authTokens) {
      let body = {
        ...text,
        from_user: authTokens.id,
        to_user: listing.user_id,
      };
      console.log(body);
      axios
        .post('/api/message/', body)
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoginRequired(true);
    }
  };

  if (loginRequired) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      {authTokens.id != listing.id && (
        <div>
          <button
            type='button'
            className='btn btn-dark float-left'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            Contact
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            role='dialog'
          >
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Send them a message!
                  </h5>
                  <button type='button' className='close'>
                    <span>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <Formik
                    initialValues={{ text: '' }}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                      setSubmitting(true);
                      sendMessage(values);
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className='row py-2'>
                        <TextInput
                          type='text'
                          name='text'
                          className='form-control col my-1'
                          placeholder='Enter a message...'
                          maxLength='200'
                        />
                        <div className='col-md-2'>
                          <button
                            type='submit'
                            disabled={isSubmitting}
                            className='btn btn-dark'
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
      )}
    </>
  );
};

export default contact;
