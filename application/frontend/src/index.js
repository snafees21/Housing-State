import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './sass/App.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
