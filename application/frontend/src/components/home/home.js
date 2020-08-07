import Searchbar from "../search/search";
import ListingDisplay from "../utils/display";
import { Form, Formik, Field } from "formik";

const home = () => {
  const [listings, setListings] = React.useState([]);

  const handleNewMesseage = (body) => {
    console.log("body: " + body);
  };

  return (
    <>
      <center>
        <div className="my-5">
          <Searchbar setListings={setListings} />
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
