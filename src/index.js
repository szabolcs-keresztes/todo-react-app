import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './todo-app';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import Store from "./store";

const storeInstance = Store();

ReactDOM.render(
    <Provider store={storeInstance}>
        <TodoApp />
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker();
