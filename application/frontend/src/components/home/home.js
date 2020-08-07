import Searchbar from '../search/search';
import ListingDisplay from '../utils/display';

const home = ({ listings }) => {
  return (
    <>
      <center>
        <div className='my-5'>
          {/* <Searchbar setListings={setListings} /> */}
        </div>
        <div>
          {listings.map((listing) => (
            <ListingDisplay key={listing.id} listing={listing} />
          ))}
        </div>
      </center>
    </>
  );
};

export default home;
