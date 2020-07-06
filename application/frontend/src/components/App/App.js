import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Navbar from "../../utils/navbar";
import Searchbar from "../../utils/searchbar";

const App = ({}) => (
  <React.Fragment>
    <div>
      <header>
        <Navbar/>
        <Searchbar/>
      </header>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </React.Fragment>
);

export default App;
