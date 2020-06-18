import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Cards from './cards';
import Page from './pageRoute';

const about = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Cards />
        </Route>

        <Route path={`${path}/:name`}>
          <Page />
        </Route>
      </Switch>
    </>
  );
};

export default about;
