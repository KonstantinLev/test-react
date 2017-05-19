/**
 * Created by Konstantin on 17.05.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import routes from './routes';

const store = configureStore();

//история навигации по сайту
const history = syncHistoryWithStore(browserHistory, store);


const pool = require('./backend/db/index');

//to run a query we just pass it to the pool
//after we're done nothing has to be taken care of
//we don't have to return any client to the pool or close a connection
pool.query('SELECT $1::text AS todo_name', ['2'], function(err, res) {
    if(err) {
        return console.error('error running query', err);
    }

    console.log('number:', res.rows[0].number);
});


ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={history}>
                { routes}
            </Router>
        </Provider>
    ),
    document.querySelector('#app')
);
