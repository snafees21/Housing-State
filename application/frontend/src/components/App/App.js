import Home from "../home/home";
import About from "../about/about";
import Navbar from "../../utils/navbar";
import Sarah from "../about/userPages/sarah";
import Kamelia from "../about/userPages/kamelia";
import Garrett from "../about/userPages/garrett";
import Mantasha from "../about/userPages/mantasha";
import Buu from "../about/userPages/buu";
import Nick from "../about/userPages/nick";
import { Switch, Route } from "react-router-dom";

const App = ({}) => {
  return (
    <React.Fragment>
      <div>
        <header>
          <Navbar />
        </header>
        <div>
          <Switch>
            <Route exact path="/about">
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
};

export default App;
