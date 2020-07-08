const searchbar = () => {
  return (
    <div class='row container-fluid align-item-center justify-content-center'>
      <div class='col-md-6'>
        <div class='card'>
          <div class='card-body'>
            <div>
              <input
                type='text'
                class='form-control'
                placeholder='Enter an address, city, or ZIP code'
              />
            </div>
            <div class='mt-3 mb-1'>
              <p class='text-left text-muted'>Advanced Search</p>
            </div>
            <div class='row'>
              <div class='col-sm-2 mr-3'>
                <div class='dropdown'>
                  <button
                    class='btn btn-outline-info dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                  >
                    Dropdown 1
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item'>Choice 1</a>
                    <a class='dropdown-item'>Choice 2</a>
                    <a class='dropdown-item'>Choice 3</a>
                  </div>
                </div>
              </div>
              <div class='col-sm-2 mx-3'>
                <div class='dropdown'>
                  <button
                    class='btn btn-outline-info dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                  >
                    Dropdown 2
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item'>Choice 1</a>
                    <a class='dropdown-item'>Choice 2</a>
                    <a class='dropdown-item'>Choice 3</a>
                  </div>
                </div>
              </div>
              <div class='col-sm-2 mx-3'>
                <div class='dropdown'>
                  <button
                    class='btn btn-outline-info dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                  >
                    Dropdown 3
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item'>Choice 1</a>
                    <a class='dropdown-item'>Choice 2</a>
                    <a class='dropdown-item'>Choice 3</a>
                  </div>
                </div>
              </div>
              <div class='col-sm-2 mx-3'>
                <div class='dropdown'>
                  <button
                    class='btn btn-outline-info dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                  >
                    Dropdown 4
                  </button>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item'>Choice 1</a>
                    <a class='dropdown-item'>Choice 2</a>
                    <a class='dropdown-item'>Choice 3</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchbar;
