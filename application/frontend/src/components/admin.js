import axios from 'axios';
import ListingDisplay from './utils/acountDisplay';
import { useAuth } from '../utils/auth';
import { Redirect } from 'react-router-dom';

const account = () => {
  const [listings, setListings] = React.useState([]);
  const { authTokens } = useAuth();

  const getListings = (mounted) => {
    axios
      .get('api/listing/unapproved')
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
    getListings(mounted);
    return () => (mounted = false);
  }, []);

  if (authTokens.type != 'admin') {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <center>
        {listings.map((listing) => (
          <ListingDisplay key={listing.id} listing={listing} />
        ))}
      </center>
    </>
  );
};

export default account;
