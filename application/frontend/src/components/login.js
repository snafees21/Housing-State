import { Redirect } from 'react-router-dom';
import { Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { TextInput } from './utils/inputs';
import { StyledErrorMessage } from '../styled/styles';

const login = ({ userId, setUserId }) => {
  const [error, setError] = React.useState('');

  const login = (body, { setSubmitting }) => {
    axios
      .post('/api/user/auth', body)
      .then((res) => {
        if (res.data.success) {
          setUserId(res.data.id);
        } else {
          setError(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  const formData = {
    email: '',
    password: '',
  };

  // define form validation rules
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  // send to home if login successful
  if (userId) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className='row container-fluid align-item-center justify-content-center my-5'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Formik
              initialValues={{ ...formData }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                login(values, { setSubmitting });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h4 className='mb-4'>Login</h4>
                  <div className='form-group col-sm-auto'>
                    <label className='label-text' htmlFor='email'>
                      Email
                    </label>
                    <TextInput
                      name='email'
                      type='email'
                      className='form-control'
                      placeholder='john.doe@mail.com'
                      maxLength='40'
                    />
                  </div>
                  <div className='form-group col-sm-auto'>
                    <label className='label-text' htmlFor='password'>
                      Password
                    </label>
                    <TextInput
                      name='password'
                      type='password'
                      className='form-control'
                      placeholder='*******'
                      maxLength='40'
                    />
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='btn btn-dark float-right mt-3'
                  >
                    Login
                  </button>
                  {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
