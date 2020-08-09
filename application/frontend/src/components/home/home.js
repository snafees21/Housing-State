import Searchbar from "./search";
import ListingDisplay from "../listing/display";
import axios from "axios";

const home = () => {
  const [listings, setListings] = React.useState([]);
  let test = null;

  const searchRecentListings = () => {
    axios
      .get("/api/listing/recent")
      .then((res) => {
        setListings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    searchRecentListings();
  }, []);

  return (
    <>
      <center>
        <div className="col my-4 py-5">
          <Searchbar setListings={setListings} />
        </div>
        {}
        <div className="row my-4">
          {listings.map((listing) => (
            <ListingDisplay key={listing.id} listing={listing} />
          ))}
        </div>
      </center>
    </>
  );
};

export default home;
