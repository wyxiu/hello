import React ,{Fragment}from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App';
import Counter from './components/Counter';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Fragment>
            <App />
            <Counter/>
        </Fragment>
    </Provider> , 
    document.getElementById('root'));
registerServiceWorker();
