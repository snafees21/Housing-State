import { Form, Formik } from 'formik';
import axios from 'axios';
import { TextInput, Select } from '../utils/inputs';

const searchbar = ({ setListings }) => {
  const searchListings = (query, { setSubmitting }) => {
    axios
      .get('/api/listing', { params: query })
      .then((res) => {
        setListings(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  const formData = {
    search_term: '',
    unit_type: '',
    offer_type: '',
    bedrooms: 0,
    cost: 0,
  };

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Formik
              initialValues={{ ...formData }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                searchListings(values, { setSubmitting });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className='form-group'>
                    <TextInput
                      name='search_term'
                      className='form-control'
                      placeholder='Enter an address, city, or ZIP code'
                      maxLength='40'
                    />
                  </div>
                  <div className='mt-5 mb-1'>
                    <p className='text-left text-muted'>Advanced Search</p>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-sm-3 text-left'>
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
                    <div className='form-group col-sm-3 text-left'>
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
                    <div className='form-group col-sm-3 text-left'>
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
                    <div className='form-group col-sm-3 text-left'>
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
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='btn btn-dark float-right mt-3'
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