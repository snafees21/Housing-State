import Home from '../home/home';
import About from '../about/about';
import Navbar from '../../utils/navbar';
import Sarah from '../about/userPages/sarah';
import { Switch, Route } from 'react-router-dom';


const App = ({ }) => {
    return (
        <React.Fragment>
            <Navbar/>
            
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/sarah">
                            <Sarah />
                        </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
            
        </React.Fragment> 
    );
  }
  
  export default App;
  