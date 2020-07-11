import Searchbar from '../listings/searchbar';
import ListingDisplay from '../listings/listingsDisplay';

const home = () => {
  const [listings, setListings] = React.useState({});
  return (
    <React.Fragment>
      <center>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <Searchbar listings={listings} setListings={setListings} />
        </div>
        <div>
          <ListingDisplay listings={listings} setListings={setListings} />
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
