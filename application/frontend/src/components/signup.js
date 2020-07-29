import { Redirect } from 'react-router-dom';
import { Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { TextInput } from './utils/inputs';
import { StyledErrorMessage } from '../styled/styles';

const signup = ({ userId, setUserId }) => {
  const [error, setError] = React.useState('');

  const signup = (body, { setSubmitting }) => {
    axios
      .post('/api/user', body)
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
    first_name: '',
    last_name: '',
    password: '',
    type: 'student', // TODO: ?
  };

  // define form validation rules
  const validationSchema = Yup.object({
    first_name: Yup.string()
      .matches('^[A-z]+$', 'First name can only contain letters')
      .required('Required'),
    last_name: Yup.string()
      .matches('^[A-z]+$', 'First name can only contain letters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Required'),
  });

  // send to home if signup successful
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
                signup(values, { setSubmitting });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h4 className='mb-4'>Sign Up</h4>
                  <div className='form-row col-sm-auto'>
                    <div className='form-group col-sm-5'>
                      <label className='label-text' htmlFor='first_name'>
                        First Name
                      </label>
                      <TextInput
                        name='first_name'
                        className='form-control'
                        placeholder='John'
                        maxLength='20'
                      />
                    </div>
                    <div className='form-group col-sm-5'>
                      <label className='label-text' htmlFor='last_name'>
                        Last Name
                      </label>
                      <TextInput
                        name='last_name'
                        className='form-control'
                        placeholder='Doe'
                        maxLength='20'
                      />
                    </div>
                  </div>
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
                    {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
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
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
