import { useFormikContext } from 'formik';
import { useMemo, useCallback } from 'react';
import { TextInput, Select, File } from '../../../utils/inputs';

const page3 = () => {
  const { setFieldValue } = useFormikContext();
  const setFile = useCallback((event) => {
    setFieldValue('listingImage', event.currentTarget.files[0]);
  }, []);

  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='cost'>
            Cost
          </label>
          <TextInput name='cost' className='form-control' maxLength='10' />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='sq_footage'>
            Sq. Footage
          </label>
          <TextInput
            name='sq_footage'
            className='form-control'
            maxLength='10'
          />
        </div>
        <div className='form-group col-sm-4 text-left'>
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
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-10 text-left'>
          <label className='label-text' htmlFor='listingImage'>
            Upload an Image
          </label>
          <File name='listingImage' type='file' onChange={setFile} />
        </div>
      </div>
    </>
  );
};

export default page3;
