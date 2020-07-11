import Searchbar from '../../utils/searchbar';

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
      </center>
    </React.Fragment>
  );
};

export default home;
