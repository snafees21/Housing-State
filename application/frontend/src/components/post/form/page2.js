import { Field } from 'formik';
import { TextInput, Select } from '../../../utils/inputs';

const page2 = () => {
  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='unit_type'>
            Unit Type
          </label>
          <Select
            as='select'
            name='unit_type'
            className='form-control border border-info drop-text'
          >
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
            as='select'
            name='offer_type'
            className='form-control border border-info drop-text'
          >
            <option value=''>All</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </Select>
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-6 text-left'>
          <label className='label-text' htmlFor='bedrooms'>
            Bedrooms
          </label>
          <Select
            as='select'
            name='bedrooms'
            className='form-control border border-info drop-text'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </Select>
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='bathrooms'>
            Bathrooms
          </label>
          <Select
            as='select'
            name='bathrooms'
            className='form-control border border-info drop-text'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='description'>
            Description
          </label>
          <TextInput
            type='text'
            name='description'
            className='form-control'
            maxLength='500'
          />
        </div>
      </div>
    </>
  );
};

export default page2;
