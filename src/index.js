/**
 * Created by Konstantin on 17.05.2017.
 */
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';
//import {Router, Route} from 'react-router';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            text: 'text',
            timer: 0,
            array: [
                {
                    id: 1,
                    text: 'item1'
                },
                {
                    id: 2,
                    text: 'item2'
                },
                {
                    id: 3,
                    text: 'item3'
                }
            ]
        }
    }

    componentWillMount(){
        /*setInterval(() => {
            this.setState({timer: this.state.timer + 1});
        }, 200);*/
    }

    static propTypes = {
        btnText: PropTypes.string,
        h1Text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired,
    };

    /*static defaultProps = {
        btnText: 'Default props text'
    };*/

    btnOnClick(event) {
        console.log('Кнопку нажали', event.target);
    }

    inputOnChange(event) {
        //console.log('ИНПУТ - ', event.target.value);
        const text = event.target.value;
        this.setState({text});
    }

    render() {
        //console.log('newArray', this.props.newArray);
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                <h1>{this.props.h1Text}</h1>
                <h3>Какой-то текст</h3>
                <button onClick={this.btnOnClick}>{this.props.btnText}</button>
                <input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>
                <br/>

                { this.state.timer < 50 ? /*<NewComponent text = "bla-bla-blaaaaaa" array={this.state.array} />*/ '' : null}
                <p>{this.state.timer}</p>
            </div>
        );
    }

}

ReactDOM.render(
    /*<Router>
        <Route path={'/'} component= {App} />
        <Route path={'new'} component= {NewComponent} />
    </Router>,*/
    <HashRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/new" component={NewComponent} />
        </div>
    </HashRouter >,
    /*<App btnText2="Нажать" h1Text = "Its Working!" newArray = {[1,2,3]} />,*/
    document.getElementById('app')
);
