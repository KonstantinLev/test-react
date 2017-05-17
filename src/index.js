/**
 * Created by Konstantin on 17.05.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render() {
        return (
            <div>
                <h1>Its Working!</h1>
                <h3>Какой-то текст</h3>
            </div>

        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
