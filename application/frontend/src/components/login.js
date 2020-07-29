import { Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { TextInput } from '../utils/inputs';

const login = ({ userId, SetUserId }) => {
  const login = (body, { setSubmitting }) => {
    axios
      .get('/api/auth', body)
      .then((res) => {
        //setListings(res.data);
        setSubmitting(false);
      })
      .catch(error);
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
