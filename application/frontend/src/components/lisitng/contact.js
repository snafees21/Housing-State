import { TextInput } from '../utils/inputs';

const contact = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-dark'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Contact
      </button>

      <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Send them a message!
              </h5>
              <button type='button' className='close'>
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <Formik
                initialValues={{ text: '' }}
                onSubmit={(values, { resetForm }) => {
                  handleNewMessage(values);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className='row'>
                    <TextInput
                      type='text'
                      name='text'
                      className='form-control col'
                      placeholder='Enter a message...'
                      maxLength='200'
                    />
                    <div className='col-md-2'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='btn btn-dark'
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
