/**
 * Created by Konstantin on 17.05.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    btnOnClick(event) {
        console.log('Кнопку нажали', event.target);
    }

    render() {
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                <h1>Its Working!</h1>
                <h3>Какой-то текст</h3>
                <button onClick={this.btnOnClick}>{this.props.children}</button>
            </div>
        );
    }

}

ReactDOM.render(
    <App>TEST!</App>,
    document.getElementById('app')
);
