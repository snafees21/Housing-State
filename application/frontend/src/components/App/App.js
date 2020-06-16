import Home from '../home/home';
import About from '../about/about';
import Navbar from '../../utils/navbar';
import Kamelia from '../about/userPages/kamelia';
import { Switch, Route } from 'react-router-dom';


const App = ({ }) => {
    return (
        <React.Fragment>
            <Navbar/>
            
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/kamelia">
                            <Kamelia />
                        </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
            
        </React.Fragment> 
    );
  }
  
  export default App;
  
