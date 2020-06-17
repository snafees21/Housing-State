import Home from '../home/home';
import About from '../about/about';
import Navbar from '../../utils/navbar';
import Sarah from '../about/userPages/sarah';
import Kamelia from '../about/userPages/kamelia';
import Garrett from '../about/userPages/garrett';
import Mantasha from '../about/userPages/mantasha';
import Nick from '../about/userPages/nick';

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

                        <Route path="/mantasha">
                            <Mantasha />
                        </Route>

                        <Route path="/kamelia">
                            <Kamelia />
                        </Route>

                        <Route path="/sarah">
                            <Sarah />
                        </Route>

                        <Route path="/nick">
                            <Nick />
                        </Route>

                        <Route path="/">
                             <Home />
                         </Route>

                     </Switch>
                </div>
            </div>

            
        </React.Fragment> 
    );
  }
  
  export default App;
  
