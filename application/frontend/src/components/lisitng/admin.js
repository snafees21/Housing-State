import axios from 'axios';
import { useAuth } from '../../utils/auth';

const admin = ({ listing }) => {
  const { authTokens } = useAuth();

  const stampListing = (listingId, status) => {
    axios
      .patch(`/api/listing/${listingId}`, { approved: status })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {authTokens.type == 'admin' && listing.approved == null && (
          <span className='input-group-btn'>
            <button
              type='submit'
              className='btn btn-success float-right ml-2'
              onClick={() => stampListing(listing.id, true)}
            >
              Approve
            </button>
            <button
              type='submit'
              className='btn btn-danger float-right ml-2'
              onClick={() => stampListing(listing.id, false)}
            >
              Reject
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default admin;
