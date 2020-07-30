import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './utils/display';

const account = ({ userId }) => {
  const [listings, setListings] = React.useState([]);

  const getListings = (userId, mounted) => {
    userId = 1; // TODO
    axios
      .get(`/api/listing/user/${userId}`)
      .then((res) => {
        if (mounted) {
          setListings(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let mounted = true;
    getListings(userId, mounted);
    return () => (mounted = false);
  }, []);

  //   if (!userId) {
  //     return <Redirect to={'/login'} />;
  //   }

  return (
    <>
      <center>
        <div>
          {listings.map((listing) => (
            <ListingDisplay key={listing.id} listing={listing} />
          ))}
        </div>
      </center>
    </>
  );
};

export default account;
