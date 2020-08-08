const listingsDisplay = ({ listing }) => {
  return (
    <>
      <div className='col-lg-4 my-4'>
        <div className='card listing-card bg-light p-1 pb-4'>
          <div className='embed-responsive embed-responsive-1by1 overflow img-thumbnail'>
            <img
              className='card-img-top embed-responsive-item img-fluid'
              src={`http://localhost:3000/${listing.img_path}`}
            />
          </div>
          <h5 className='card-title m-2'>{listing.full_address}</h5>
          <div className='card-body'>
            <div className='container my-1'>
              <div className='row'>
                <div className='col float-left'>
                  <ul className='text-left'>
                    <li>Beds: {listing.bedrooms}</li>
                    <li>Baths: {listing.bathrooms}</li>
                    <li>Cost: {listing.cost}</li>
                    <li>Offer: {listing.offer_type}</li>
                    <li>Unit: {listing.unit_type}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default listingsDisplay;
