/**
 * Created by Konstantin on 18.05.2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer} from './pages/home/index';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer

});
