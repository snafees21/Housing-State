import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './utils/auth';
import ProtectedRoute from './utils/protectedRoute';
import Home from './home/home';
import About from './about/about';
import Post from './post/post';
import Navbar from './utils/navbar';
import Signup from './signup';
import Login from './login';
import Account from './account';

const App = ({}) => {
  const [userId, setUserId] = React.useState(0);
  return (
    <>
      <AuthContext.Provider value={false}>
        <div>
          <header>
            <Navbar userId={userId} />
          </header>
          <div>
            <Switch>
              <Route path='/about' component={About} />
              <ProtectedRoute path='/post' component={Post} />
              <Route
                path='/signup'
                render={() => <Signup userId={userId} setUserId={setUserId} />}
              />
              <Route
                path='/login'
                render={() => <Login userId={userId} setUserId={setUserId} />}
              />
              <ProtectedRoute
                path='/account'
                render={() => <Account userId={userId} />}
              />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default App;
