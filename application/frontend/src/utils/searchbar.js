import { Field, Form, Formik } from 'formik';
import axios from 'axios';

const searchbar = () => {
  const searchListings = (body) => {
    axios.get('/api/listing', body).then((data) => console.log(res.data));
  };

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <Formik
              initialValues={{
                location: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                axios.get('/api/listing').catch((e) => console.log(e)); //searchListings(body);
                resetForm();
                setSubmitting(false);

                // this is a placeholder that will display inputs untill we get our endpoint setup
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   resetForm();
                //   setSubmitting(false);
                // }, 500);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <Field
                      type='text'
                      name='location'
                      className='form-control'
                      placeholder='Enter an address, city, or ZIP code'
                      maxLength='40'
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='mt-5 mb-1'>
                    <p className='text-left text-muted'>Advanced Search</p>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-sm-3 my-1 ting'>
                      <Field
                        as='select'
                        name='input1'
                        className='form-control border border-info'
                        value={values.input1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option defaultValue=''>Filter 1</option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='input2'
                        className='form-control border border-info'
                        value={values.input2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option defaultValue=''>Filter 2</option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='input3'
                        className='form-control border border-info'
                        value={values.input3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option defaultValue=''>Filter 3</option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='input4'
                        className='form-control border border-info'
                        value={values.input4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option defaultValue=''>Filter 4</option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </Field>
                    </div>
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='btn btn-info float-right mt-3'
                  >
                    Search
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

export default searchbar;
