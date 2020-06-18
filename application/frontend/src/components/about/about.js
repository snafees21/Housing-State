import Cards from "./cards";
import Page from "./page";
import { useRouteMatch, Switch, Route } from "react-router-dom";

const about = () => {
  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <Cards />
      <Switch>
        <Route path={`${path}/:name`}>
          <Page />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default about;
