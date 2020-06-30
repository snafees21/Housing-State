import { useRouteMatch, Switch, Route } from "react-router-dom";
import Cards from "./cards";
import Page from "./pageRoute";

const about = () => {
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
          <Cards />
        </Route>

        <Route path={`${path}/:name`}>
          <Page />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default about;
