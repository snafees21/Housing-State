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
    //axios
    //.post("/api/search", body)
    //.then((res) => {})
    //.catch(() => {
    //console.log("Failed to search");
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

  const handleDisplayList = () => {
    console.log("list");
    return (
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Morbi leo risus
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          Porta ac consectetur ac
        </button>
      </div>
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
  }, []);

  return (
    <div class="container-fluid my-3">
      <div class="row">
        <div class="col-md-9">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="Enter a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div class="btn-group" role="group">
              <div class="dropdown dropdown-lg">
                <button
                  type="button"
                  class="btn btn-outline-primary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                  <span class="caret"></span>
                </button>
                <div class="dropdown-menu" role="menu">
                  <form class="form-horizontal" role="form">
                    <div class="container">
                      <center>Check on the box to show only that type</center>
                      <div>
                        -------------------------------------------------------------
                      </div>
                      <div class="form-group form-check-inline">
                        <div class="form-group form-check-inline">
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

                        <div class="form-group form-check-inline">
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

                        <div class="form-group form-check-inline">
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

                        <div class="form-group form-check-inline">
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
                      <div class="container-fluid">
                        <div class="btn-group">
                          <button
                            
                            class="btn btn-outline-primary"
                            onclick={() => handleFilter()}
                          >
                            Apply Search
                          </button>

                          <button
                            
                            class="btn btn-outline-primary"
                            onclick={() => handleReset()}
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <button
                class="btn btn-outline-primary"
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
