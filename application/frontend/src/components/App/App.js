import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Navbar from '../../utils/navbar';
import Message from '../message/messagePage';

const App = ({}) => (
  <React.Fragment>
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path ='/message'>
            <Message/>
          </Route>
        </Switch>
      </div>
    </div>
  </React.Fragment>
);

export default App;
