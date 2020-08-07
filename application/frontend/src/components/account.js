import axios from 'axios';
import ListingDisplay from './utils/acountDisplay';
import { useAuth } from '../utils/auth';

const account = () => {
  const [listings, setListings] = React.useState([]);
  const { authTokens, setAuthTokens } = useAuth();

  const logOut = () => {
    setAuthTokens('');
  };

  const getListings = (userId, mounted) => {
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

  React.useEffect(() => {
    let mounted = true;
    getListings(authTokens.id, mounted);
    return () => (mounted = false);
  }, []);

  return (
    <>
      <center>
        <div>
          <button className='btn btn-warning float-left' onClick={logOut}>
            Log out
          </button>
        </div>
        <h2 className='my-5'>View Your Listings</h2>
        {listings.map((listing) => (
          <ListingDisplay key={listing.id} listing={listing} />
        ))}
      </center>
    </>
  );
};

export default account;
