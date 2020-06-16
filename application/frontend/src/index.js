import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import '../src/sass/App.scss';

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
