import { Field, Form, Formik, ErrorMessage } from 'formik';
import { number, object } from 'yup';
import { useState } from 'react';
import axios from 'axios';
import Page1 from './form/page2';

const pages = [<Page1 />];

const post = ({}) => {
  const [page] = useState(0);

  // define form validation rules here
  const validationSchema = object({
    building_num: number().required('Required'),
  });

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <div className='card mb-4'>
          <div className='card-body'>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                building_num: 0,
                street: '',
                city: '',
                state: '',
                zip_code: 0,
              }}
              //onSubmit={handleSubmit}
            >
              {() => <Form>{pages[page]}</Form>}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
