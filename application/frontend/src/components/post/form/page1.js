import { Field } from 'formik';
import InputField from '../../../utils/input';

const page1 = () => {
  return (
    <React.Fragment>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='building_num'>
            Building No.
          </label>
          <Field
            type='text'
            name='building_num'
            className='form-control'
            maxLength='4'
            component={InputField}
          />
        </div>

        <div className='form-group col-sm-8 text-left'>
          <label className='label-text' htmlFor='street'>
            Street
          </label>
          <Field
            type='text'
            name='street'
            className='form-control'
            maxLength='20'
            component={InputField}
          />
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-6 text-left'>
          <label className='label-text' htmlFor='city'>
            City
          </label>
          <Field
            type='text'
            name='city'
            className='form-control'
            maxLength='20'
            component={InputField}
          />
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='state'>
            State
          </label>
          <Field
            type='text'
            name='state'
            className='form-control'
            maxLength='2'
            component={InputField}
          />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='zip_code'>
            Zip
          </label>
          <Field
            type='text'
            name='zip_code'
            className='form-control'
            maxLength='2'
            component={InputField}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default page1;
