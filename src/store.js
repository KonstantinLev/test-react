/**
 * Created by Konstantin on 18.05.2017.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from './utils/index';

/**
 * Добавляет к Store определенные инструменты
 */
function _applyMiddleware()
{
    const middleware = [

    ];
    return applyMiddleware(...middleware);
}

/**
 * Конфигурирование Store
 * @initialState object - начальное состояние нашего приложения
 */
export default function configureStore(initialState)
{
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);
    return store;
}
