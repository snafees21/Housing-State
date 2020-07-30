import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
