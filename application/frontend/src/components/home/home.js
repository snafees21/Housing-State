import Searchbar from '../search/searchbar';
import ListingDisplay from '../search/displayResults';

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
            // Warning: Each child in a list should have a unique "key" prop. TODO
            <ListingDisplay listing={listing} />
          ))}
        </div>
      </center>
    </React.Fragment>
  );
};

export default home;

{
  /* <ul>
  {friends.map((p, i) => (
    <li key={p.id}>
      {p.name}, {p.age}, {i}
    </li>
  ))}
</ul>; */
}
