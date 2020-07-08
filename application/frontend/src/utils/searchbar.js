import { Formik } from 'formik';

const searchbar = () => {
  return (
    <div class='row container-fluid align-item-center justify-content-center'>
      <div class='col-md-6'>
        <div class='card'>
          <div class='card-body'>
            <Formik
              initialValues={{
                location: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                // this is a placeholder that will display inputs untill we get our endpoint setup
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  resetForm();
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div class='form-group'>
                    <input
                      type='text'
                      name='location'
                      class='form-control'
                      placeholder='Enter an address, city, or ZIP code'
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div class='mt-5 mb-1'>
                    <p class='text-left text-muted'>Advanced Search</p>
                  </div>
                  <div class='form-row'>
                    <div class='form-group col-auto my-1'>
                      <select
                        name='input1'
                        class='form-control border border-info'
                        value={values.input1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value='' selected>
                          Filter 1
                        </option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </select>
                    </div>
                    <div class='form-group col-auto my-1'>
                      <select
                        name='input2'
                        class='form-control border border-info'
                        value={values.input2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value='' selected>
                          Filter 2
                        </option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </select>
                    </div>
                    <div class='form-group col-auto my-1'>
                      <select
                        name='input3'
                        class='form-control border border-info'
                        value={values.input3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value='' selected>
                          Filter 3
                        </option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </select>
                    </div>
                    <div class='form-group col-auto my-1'>
                      <select
                        name='input4'
                        class='form-control border border-info'
                        value={values.input4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value='' selected>
                          Filter 4
                        </option>
                        <option value=''>All</option>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    class='btn btn-info float-right'
                  >
                    Search
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchbar;
