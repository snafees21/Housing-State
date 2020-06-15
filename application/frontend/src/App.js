import Home from './components/home';

const App = ({ }) => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </React.Fragment> 
    );
  }
  
  export default App;
  