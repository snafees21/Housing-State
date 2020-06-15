import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './components/App/App.scss';

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
