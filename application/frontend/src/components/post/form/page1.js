import { TextInput, Select, File } from '../../utils/inputs';
import { useFormikContext } from 'formik';
import { useMemo, useCallback } from 'react';

const Page1 = () => {
  const { setFieldValue } = useFormikContext();
  const setFile = useCallback((event) => {
    const file = event.currentTarget.files[0];
    setFieldValue('listingImage', file);
    setFieldValue(
      'img_path',
      `listingImage-${Date.now()}.${file.type.split('/')[1]}`
    );
  }, []);

  return (
    <>
      <center className='card-header bg-dark text-white'>Post a Listing</center>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='building_num'>
          Building No.
        </label>
        <TextInput name='building_num' className='form-control' maxLength='4' />
      </div>

      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='street'>
          Street
        </label>
        <TextInput name='street' className='form-control' maxLength='20' />
      </div>

      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='city'>
          City
        </label>
        <TextInput name='city' className='form-control' maxLength='20' />
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='state'>
          State
        </label>
        <TextInput name='state' className='form-control' maxLength='2' />
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='zip_code'>
          Zip
        </label>
        <TextInput name='zip_code' className='form-control' maxLength='5' />
      </div>

      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='unit_type'>
          Unit Type
        </label>
        <Select
          name='unit_type'
          className='form-control border border drop-text'
        >
          <option value=''>Pick</option>
          <option value='house'>House</option>
          <option value='appartment'>Apartment</option>
          <option value='townhouse'>Townhouse</option>
        </Select>
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='offer_type'>
          Offer Type
        </label>
        <Select name='offer_type' className='form-control border drop-text'>
          <option value=''>Pick</option>
          <option value='buy'>Buy</option>
          <option value='rent'>Rent</option>
        </Select>
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='bedrooms'>
          Bedrooms
        </label>
        <Select name='bedrooms' className='form-control border drop-text'>
          <option value=''>Pick</option>
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
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='bathrooms'>
          Bathrooms
        </label>
        <Select name='bathrooms' className='form-control border drop-text'>
          <option value=''>Pick</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Select>
      </div>

      <div className='col form-group text-left'>
        <label className='label-text' htmlFor='description'>
          Description
        </label>
        <TextInput
          name='description'
          className='form-control'
          maxLength='500'
        />
      </div>

      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='cost'>
          Cost
        </label>
        <TextInput name='cost' className='form-control' maxLength='10' />
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='sq_footage'>
          Sq. Footage
        </label>
        <TextInput name='sq_footage' className='form-control' maxLength='10' />
      </div>
      <div className='form-group col-sm-5 text-left'>
        <label className='label-text' htmlFor='lease_length'>
          Lease Length
        </label>
        <Select name='lease_length' className='form-control border drop-text'>
          <option value=''>Pick</option>
          <option value='1'>Monthly</option>
          <option value='4'>Quarterly</option>
          <option value='6'>Semi-Annualy</option>
          <option value='12'>Yearly</option>
        </Select>
      </div>

      <div className='form-group col-sm-10 '>
        <label className='label-text' htmlFor='listingImage'>
          Upload an Image
        </label>
        <File name='listingImage' type='file' onChange={setFile} />
      </div>
    </>
  );
};

//Export Statement
export { Page1 };
