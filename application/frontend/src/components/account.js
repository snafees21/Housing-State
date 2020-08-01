import axios from 'axios';
import ListingDisplay from './utils/display';
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
          <button onClick={logOut}>Log out</button>
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

export default account;
