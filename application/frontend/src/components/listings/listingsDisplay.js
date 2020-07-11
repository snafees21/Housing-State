import img from '../../assets/imgs/kamelia.png';

const listingsDisplay = ({ listings, setListings }) => {
  const lists = [
    {
      apt_suite: null,
      available_at: '2020-07-07',
      bathrooms: 2,
      bedrooms: 5,
      building_num: '1600',
      city: 'San Francisco',
      cost: 6700,
      createdAt: '2020-07-07T22:11:16.000Z',
      search_term: '1600 Holloway Ave',
      furnished: true,
      id: 1,
      lease_length: 6,
      offer_type: 'rent',
      sq_footage: null,
      state: 'CA',
      street: 'Holloway Ave',
      unit_type: 'house',
      updatedAt: '2020-07-09T21:59:53.000Z',
      user_id: 2,
      zip_code: '94010',
    },
  ];

  const list = lists[0];

  return (
    <React.Fragment>
      <div className='row container-fluid align-item-center justify-content-center'>
        <div className='col-lg-10'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-3'>
                  <div className='embed-responsive embed-responsive-1by1 overflow img-thumbnail'>
                    <img
                      src={img}
                      className='card-img-top embed-responsive-item img-fluid'
                    />
                  </div>
                </div>
                <div className='col-4'>
                  <h6 className='text-left'>{list.search_term}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default listingsDisplay;
