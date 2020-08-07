import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../utils/auth';
import ProtectedRoute from './utils/protectedRoute';
import Home from './home/home';
import About from './about/about';
import Post from './post/post';
import Navbar from './utils/navbar';
import Signup from './signup';
import Login from './login';
import Account from './account';
import Admin from './admin';
import Message from './message/page';

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);
  const [listings, setListings] = React.useState([]);
  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <header>
          <Navbar setListings={setListings} />
        </header>

        <div className='col'>
          <div className='row'>
            {authTokens && (
              <div className='col-md-2 bg-dark'>
                <a className='card navbar-link my-2' href='/account'>
                  Account
                </a>
                <a className='card navbar-link my-2' href='/message'>
                  Message
                </a>
                <a className='card navbar-link my-2' href='/post'>
                  Post
                </a>
              </div>
            )}

            <div className='col'>
              <Switch>
                <Route path='/about' component={About} />
                <ProtectedRoute path='/post' component={Post} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <ProtectedRoute path='/account' component={Account} />
                <ProtectedRoute path='/admin' component={Admin} />
                <ProtectedRoute path='/message' component={Message} />
                <Route exact path='/'>
                  <Home listings={listings} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default App;
