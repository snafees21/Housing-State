import axios from 'axios';

const admin = ({ listingId }) => {
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
        <span class='input-group-btn'>
          <button
            type='submit'
            className='btn btn-primary float-right ml-2'
            onClick={() => stampListing(listingId, true)}
          >
            Approve
          </button>
          <button
            type='submit'
            className='btn btn-primary float-right ml-2'
            onClick={() => stampListing(listingId, false)}
          >
            Reject
          </button>
        </span>
      </div>
    </>
  );
};

export default admin;
