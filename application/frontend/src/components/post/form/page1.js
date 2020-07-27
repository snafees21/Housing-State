import { TextInput } from '../../../utils/inputs';

const page1 = () => {
  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='building_num'>
            Building No.
          </label>
          <TextInput
            type='text'
            name='building_num'
            className='form-control'
            maxLength='4'
          />
        </div>

        <div className='form-group col-sm-8 text-left'>
          <label className='label-text' htmlFor='street'>
            Street
          </label>
          <TextInput
            type='text'
            name='street'
            className='form-control'
            maxLength='20'
          />
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-6 text-left'>
          <label className='label-text' htmlFor='city'>
            City
          </label>
          <TextInput
            type='text'
            name='city'
            className='form-control'
            maxLength='20'
          />
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='state'>
            State
          </label>
          <TextInput
            type='text'
            name='state'
            className='form-control'
            maxLength='2'
          />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='zip_code'>
            Zip
          </label>
          <TextInput
            type='text'
            name='zip_code'
            className='form-control'
            maxLength='5'
          />
        </div>
      </div>
    </>
  );
};

export default page1;
