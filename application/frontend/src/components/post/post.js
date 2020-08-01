import * as Yup from 'yup';
import axios from 'axios';
import Page1 from './form/page1';
import Page2 from './form/page2';
import Page3 from './form/page3';
import { Wizard, WizardStep } from '../utils/multiStepForm';

// TODO: redirect to viewListings after a posting successfullly
const post = ({ userId }) => {
  const postListing = (body, { setSubmitting }) => {
    console.log(body); // TODO
    axios
      .post('/api/listing', body, {
        headers: {
          'Content-Type': 'form-data',
        },
      })
      .then((res) => {
        //setListings(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  const formData = {
    street: '',
    city: '',
    state: '',
    description: '',
    unit_type: '',
    offer_type: '',
    bedrooms: '',
    bathrooms: '',
    building_num: '',
    zip_code: '',
    cost: '',
    sq_footage: '',
    lease_length: '',
    user_id: '1', // TODO
    img_path: 'path/to/image', // TODO
    listingImage: undefined,
  };

  // define form validation rules
  const page1Validation = Yup.object({
    building_num: Yup.number().positive().integer().required('Required'),
    zip_code: Yup.number().positive().integer().required('Required'),
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
  });

  const page2Validation = Yup.object({
    bedrooms: Yup.number().positive().integer().required('Required'),
    bathrooms: Yup.number().positive().required('Required'),
    unit_type: Yup.string().required('Required'),
    offer_type: Yup.string().required('Required'),
  });

  const page3Validation = Yup.object({
    cost: Yup.number().positive().integer().required('Required'),
    sq_footage: Yup.number().positive().integer().required('Required'),
    lease_length: Yup.number().positive().integer().required('Required'),
    img: Yup.mixed().required('Required'),
  });

  return (
    <div className='row container-fluid align-item-center justify-content-center my-5'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Wizard
              initialValues={{ ...formData }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                postListing(values, { setSubmitting });
              }}
            >
              <WizardStep validationSchema={page1Validation}>
                <Page1 />
              </WizardStep>
              <WizardStep validationSchema={page2Validation}>
                <Page2 />
              </WizardStep>
              <WizardStep validationSchema={page3Validation}>
                <Page3 />
              </WizardStep>
            </Wizard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
