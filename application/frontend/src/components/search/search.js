import { Form, Formik } from 'formik';
import axios from 'axios';
import { TextInput, Select } from '../utils/inputs';
import { Redirect } from 'react-router-dom';

const searchbar = ({ setListings }) => {
  const searchListings = (query, { setSubmitting }) => {
    axios
      .get('/api/listing', { params: query })
      .then((res) => {
        setSubmitting(false);
        setListings(res.data);
      })
      .catch((error) => {
        setSubmitting(false);
        console.log(error);
      });
  };

  const formData = {
    search_term: '',
    unit_type: '',
    offer_type: '',
    bedrooms: 0,
    cost: 0,
  };

  return (
    <div className='col-md-8'>
      <Formik
        initialValues={{ ...formData }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          searchListings(values, { setSubmitting });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-row'>
              <TextInput
                name='search_term'
                className='col form-control'
                placeholder='Enter an address, city, or ZIP code'
                maxLength='40'
              />
              <div className='col-md-2 btn-group'>
                <button
                  className='btn btn-primary'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Search
                </button>
                <div className='dropdown'>
                  <button
                    className='btn btn-primary ml-2 dropdown-toggle '
                    type='button'
                    data-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Options
                  </button>

                  <div className='dropdown-menu' role='menu'>
                    <div className='mt-4 mb-1'>
                      <center className='text-muted'>Advanced Search</center>
                    </div>

                    <Form className='card-body'>
                      <div className='form-group text-left'>
                        <label className='label-text' htmlFor='unit_type'>
                          Unit Type
                        </label>
                        <Select
                          id='unit_type'
                          name='unit_type'
                          className='form-control border drop-text'
                        >
                          <option value=''>All</option>
                          <option value='house'>House</option>
                          <option value='appartment'>Apartment</option>
                          <option value='townhouse'>Townhouse</option>
                        </Select>
                      </div>
                      <div className='form-group text-left'>
                        <label className='label-text' htmlFor='offer_type'>
                          Offer Type
                        </label>
                        <Select
                          id='offer_type'
                          name='offer_type'
                          className='form-control border drop-text'
                        >
                          <option value=''>All</option>
                          <option value='buy'>Buy</option>
                          <option value='rent'>Rent</option>
                        </Select>
                      </div>
                      <div className='form-group text-left'>
                        <label className='label-text' htmlFor='bedrooms'>
                          Bedrooms
                        </label>
                        <Select
                          id='bedrooms'
                          name='bedrooms'
                          className='form-control border drop-text'
                        >
                          <option value=''>All</option>
                          <option value='1'>1+</option>
                          <option value='2'>2+</option>
                          <option value='3'>3+</option>
                          <option value='4'>4+</option>
                          <option value='5'>5+</option>
                        </Select>
                      </div>
                      <div className='form-group text-left'>
                        <label className='label-text' htmlFor='cost'>
                          Cost
                        </label>
                        <Select
                          id='cost'
                          name='cost'
                          className='form-control border drop-text'
                        >
                          <option value=''>Any</option>
                          <option value='750'>$750+</option>
                          <option value='1000'>$1000+</option>
                          <option value='1500'>$1500+</option>
                          <option value='3000'>$3000+</option>
                        </Select>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default searchbar;
