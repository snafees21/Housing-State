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
  };

  const handleDisplayMap = () => {
    console.log("Show map");
  };

  React.useEffect(() => {
    handleDisplayMap();
  }, []); //

  return (
    <div class="row justify-content-md">
      <form class="form-group col-md-6">
        <input
          class="form-control mr-sm-2"
          type="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>

      <div class="dropdown">
        <button
          class="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#myList"
        >
          Filter
        </button>

        <div id="myList" class="dropdown-menu">
          <div class="container">
            <header>Check on the box to show only that type</header>
            <div>--------------------</div>
            <div>Role:</div>
            <div class="row">
              <div class="form-group">
                <div class="form-check">
                  <div class="col-sm">
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
                </div>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <div class="col-sm">
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
              </div>
            </div>
          </div>
          <div class="container">
            <div>House Type:</div>
            <div class="row">
              <div class="form-group">
                <div class="form-check">
                  <div class="col-sm">
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
                </div>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <div class="col-sm">
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
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row"></div>
            <div>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                onClick={() => handleFilter()}
              >
                Apply Search
              </button>
            </div>
          </div>

          <div class="container">
            <div class="row"></div>
            <div>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                onClick={() => handleReset()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default searchbar;
