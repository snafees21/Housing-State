import React from "react";
import axios from "axios";

const searchbar = () => {
  const [location, setLocation] = React.useState("San Francisco, CA");
  let inclStudent = true;
  let inclStaff = true;
  let inclApartment = true;
  let inclCondominium = true;

  let showStudent = false;
  let showStaff = false;
  let showApartment = false;
  let showCondominium = false;

  const handleSearch = () => {
    const body = {
      location: location,
      inclStudent: inclStudent,
      inclStaff: inclStaff,
      inclApartment: inclApartment,
      inclCondominium: inclCondominium,
    };
    // axios.post("/api/search", body).catch(() => {
    //   console.log("Failed to search");
    // });
    console.log(
      "Include student: " +
        inclStudent +
        " Staff: " +
        inclStaff +
        " apartment: " +
        inclApartment +
        " condominium: " +
        inclCondominium
    );
  };

  const handleFilter = () => {
    inclStudent = showStudent;
    inclStaff = showStaff;
    inclApartment = showApartment;
    inclCondominium = showCondominium;
    console.log(
      "(Not) Include student: " +
        inclStudent +
        " Staff: " +
        inclStaff +
        " apartment: " +
        inclApartment +
        " condominium: " +
        inclCondominium
    );
    handleSearch();
  };

  const handleReset = () => {
    inclStudent = true;
    inclStaff = true;
    inclApartment = true;
    inclCondominium = true;
    showStudent = false;
    showStaff = false;
    showApartment = false;
    showCondominium = false;

    var inputs = document.querySelectorAll(".form-check-input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }

    console.log(
      "(Reset?) Include student: " +
        inclStudent +
        " Staff: " +
        inclStaff +
        " apartment: " +
        inclApartment +
        " condominium: " +
        inclCondominium
    );
    handleSearch();
  };

  const handleDisplayMap = () => {
    console.log("Show map");
  };

  React.useEffect(() => {
    handleDisplayMap();
  }, []); //

  return (
    <div class="container-fluid my-3">
      <div class="row">
        <div class="col-md-9">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter a location"
            />

            <div class="dropdown dropdown-lg">
              <button
                class="btn btn-outline-primary my-2 my-sm-0 dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
                <span class="caret"></span>
              </button>

              <div class="dropdown-menu dropdown-menu-right bg-light" role="menu">
              <div class="container-fluid">
                  <center>Check on the box to show only that type</center>
                  <div>--------------------</div>
                  
                  <div >Role: </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onClick={() => {
                            if (showStudent) {
                              showStudent = false;
                            } else showStudent = true;
                          }}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Student
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onClick={() => {
                            if (showStaff) {
                              showStaff = false;
                            } else showStaff = true;
                          }}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Staff
                        </label>
                      </div>
                    </div>
                  
                  

                    <div>House Type: </div> 
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onClick={() => {
                            if (showApartment) {
                              showApartment = false;
                            } else showApartment = true;
                          }}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Apartment
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          onClick={() => {
                            if (showCondominium) {
                              showCondominium = false;
                            } else showCondominium = true;
                          }}
                        />
                        <label class="form-check-label" for="gridCheck">
                          Condominium
                        </label>
                      </div>
                    </div>
                    
                  

                    <div class="btn-group">
                      <div>
                        <button
                          class="btn btn-outline-primary my-2 my-sm-0"
                          onClick={() => handleFilter()}
                        >
                          Apply Search
                        </button>
                      </div>
                      <div>
                        <button
                          class="btn btn-outline-primary my-2 my-sm-0"
                          onClick={() => handleReset()}
                        >
                          Reset Search
                        </button>
                      </div>
                    </div>
                  
                </div>

              </div>
            </div>


            <div>
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default searchbar;
