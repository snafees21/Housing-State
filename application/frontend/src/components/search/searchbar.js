import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const searchbar = ({ listings, setListings }) => {
  const searchListings = (query) => {
    axios
      .get('/api/listing', { params: query })
      .then((res) => {
        setListings(res.data);
        console.log(res.data);
      })
      .catch(error);
  };

  // define form validation rules here
  const validationSchema = Yup.object({
    search_term: Yup.string().required('Required'),
  });

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                search_term: '',
                unit_type: '',
                offer_type: '',
                bedrooms: '',
                cost: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                searchListings(values);
                setSubmitting(false); // TODO: need to refresh after submit rn
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
                      name='search_term'
                      className='form-control'
                      placeholder='Enter an address, city, or ZIP code'
                      maxLength='40'
                      value={values.search_term}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name='search_term'
                      render={(msg) => <p className='text-danger'>{msg}</p>}
                    />
                  </div>
                  <div className='mt-5 mb-1'>
                    <p className='text-left text-muted'>Advanced Search</p>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-sm-3 my-1 ting'>
                      <Field
                        as='select'
                        name='unit_type'
                        className='form-control border border-info'
                        value={values.unit_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {/* WE PROBABLY WANT TO ADD LABELS ON TOP OF EACH BUTTON!!!!!!!!!!!!!!!! */}
                        {/* THESE COULD ALSO BE THEIR OWN COMPONENT WHERE THE OPTIONS ARE MAPPED */}
                        <option value=''>Unit Type</option>
                        <option value=''>All Unit Types</option>
                        <option value='house'>House</option>
                        <option value='appartment'>Appartment</option>
                        <option value='townhouse'>Townhouse</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='offer_type'
                        className='form-control border border-info'
                        value={values.offer_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value=''>Offer Type</option>
                        <option value=''>All Offer Types</option>
                        <option value='buy'>Buy</option>
                        <option value='rent'>Rent</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='bedrooms'
                        className='form-control border border-info'
                        value={values.bedrooms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value=''>Bedrooms</option>
                        <option value=''>All Bedrooms</option>
                        <option value='1'> 1</option>
                        <option value='2'>&lt;= 2</option>
                        <option value='3'>&lt;= 3</option>
                        <option value='4'>&lt;= 4</option>
                        <option value='5'>&lt;= 5</option>
                      </Field>
                    </div>
                    <div className='form-group col-sm-3 my-1'>
                      <Field
                        as='select'
                        name='cost'
                        className='form-control border border-info'
                        value={values.cost}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value=''>Cost</option>
                        <option value=''>Any Price</option>
                        <option value='750'>&lt; 750</option>
                        <option value='1000'>&lt; 1000</option>
                        <option value='1500'>&lt; 1500</option>
                        <option value='3000'>&lt; 3000</option>
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
