import { ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import Page1 from './form/page1';
import Page2 from './form/page2';
import { Wizard, WizardStep } from '../../utils/multiStepForm';

const post = ({}) => {
  const formData = {
    building_num: 0,
    street: '',
    city: '',
    state: '',
    zip_code: 0,
  };

  // define form validation rules here
  const validationSchema = Yup.object({
    //building_num: number().required('Required'),
  });

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Wizard
              validationSchema={validationSchema}
              initialValues={{ ...formData }}
              //onSubmit={handleSubmit}
            >
              <WizardStep
              // onSubmit={}
              >
                <Page1 />
              </WizardStep>

              <WizardStep
              // onSubmit={}
              >
                <Page2 />
              </WizardStep>
            </Wizard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
