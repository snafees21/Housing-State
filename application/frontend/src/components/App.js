import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Post from './post/post';
import Navbar from './utils/navbar';
import Signup from './signup';
import Login from './login';
import Manage from './manage';

const App = ({}) => {
  const [userId, setUserId] = React.useState(0);
  return (
    <>
      <div>
        <header>
          <Navbar userId={userId} />
        </header>
        <div>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>

            <Route path='/post'>
              <Post />
            </Route>

            <Route path='/signup'>
              <Signup userId={userId} setUserId={setUserId} />
            </Route>

            <Route path='/login'>
              <Login userId={userId} setUserId={setUserId} />
            </Route>

            <Route path='/manage'>
              <Manage userId={userId} setUserId={setUserId} />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
