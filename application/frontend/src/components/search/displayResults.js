import img from '../../assets/imgs/kamelia.png'; // TODO delete

const listingsDisplay = ({ listing }) => {
  return (
    <React.Fragment>
      <div className='row my-1 container-fluid align-item-center justify-content-center'>
        <div className='col-lg-10'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-3'>
                  <div className='embed-responsive embed-responsive-1by1 overflow img-thumbnail'>
                    <img
                      src={`http://localhost:3000/${listing.img_path}`}
                      className='card-img-top embed-responsive-item img-fluid'
                    />
                  </div>
                </div>
                <div className='col-4 text-left'>
                  <h5>{listing.full_address}</h5>
                  <ul>
                    <li>Bedrooms: {listing.bedrooms}</li>
                    <li>Bathrooms: {listing.bathrooms}</li>
                    <li>Cost: {listing.cost}</li>
                    <li>Offer Type: {listing.offer_type}</li>
                    <li>Unit Type: {listing.unit_type}</li>
                  </ul>
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
