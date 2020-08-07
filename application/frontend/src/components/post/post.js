import * as Yup from 'yup';
import axios from 'axios';
import { Page1 } from './form/page1';
import { Wizard, WizardStep } from '../utils/multiStepForm';
import { useAuth } from '../../utils/auth';

const post = ({}) => {
  const [hasPosted, setHasPosted] = React.useState(false);
  const { authTokens } = useAuth();

  const postListing = (body, { setSubmitting }) => {
    body['full_address'] =
      body.building_num +
      ' ' +
      body.street +
      ', ' +
      body.city +
      ', ' +
      body.state +
      ' ' +
      body.zip_code;
    const fd = new FormData();
    Object.entries(body).forEach(([key, val]) => {
      fd.append(key, val);
    });
    axios
      .post('/api/listing', fd)
      .then((res) => {
        setHasPosted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
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
    img_path: '',
    user_id: authTokens?.id,
    listingImage: undefined,
  };

  // define form validation rules
  const pageValidation = Yup.object({
    state: Yup.string()
      .matches(/^[A-z]{2}$/, 'Must be two letters')
      .required('Required'),
    zip_code: Yup.string()
      .matches(/^[0-9]{5}$/, 'Must be 5 digits')
      .required('Required'),
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    building_num: Yup.number().positive().integer().required('Required'),
    bedrooms: Yup.number().positive().integer().required('Required'),
    bathrooms: Yup.number().positive().required('Required'),
    unit_type: Yup.string().required('Required'),
    offer_type: Yup.string().required('Required'),
    cost: Yup.number().positive().integer().required('Required'),
    sq_footage: Yup.number().positive().integer().required('Required'),
    lease_length: Yup.number().positive().integer().required('Required'),
    listingImage: Yup.mixed().required('Required'),
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
              <WizardStep validationSchema={pageValidation}>
                <Page1 />
              </WizardStep>
            </Wizard>
            {hasPosted && <div>Post Successful!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
