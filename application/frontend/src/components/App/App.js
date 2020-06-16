import Home from '../home/home';
import About from '../about/about';
import Navbar from '../../utils/navbar';
import Garrett from '../about/userPages/garrett';
import { Switch, Route } from 'react-router-dom';


const App = ({ }) => {
    return (
        <React.Fragment>
            <div>
                <header>
                    <Navbar/>
                </header>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/garrett">
                            <Garrett />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </React.Fragment> 
    );
  }
  
  export default App;
  