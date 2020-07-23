import Searchbar from '../search/searchbar';
import ListingDisplay from '../search/showListings';

const home = () => {
  const [listings, setListings] = React.useState([]);

  return (
    <React.Fragment>
      <center>
        <div className='my-5'>
          <Searchbar listings={listings} setListings={setListings} />
        </div>
        <div>
          {listings.map((listing) => (
            <ListingDisplay key={listing.id} listing={listing} />
          ))}
        </div>
      </center>
    </React.Fragment>
  );
};

export default home;
