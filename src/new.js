/**
 * Created by Konstantin on 17.05.2017.
 */
import React, {Component} from 'react';

export default class NewComponent extends Component
{
    constructor(props) {
        super(props);
        console.log('Constructor');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    renderItem(item, idx)
    {
        console.log('Item', item);
        console.log('Index', idx);
        return (
            <li key = {idx}> <b>{item.text}</b> - {item.id} </li>
        );
    }


    render() {
        console.log('render');
        /*return (
            <div style={{backgroundColor: 'yellow'}}>
                <h3>Новый КОМПОНЕНТ!</h3>
                <i>{ this.props.text }</i>
                <ul>
                    { this.props.array.map(this.renderItem.bind(this)) }
                </ul>
            </div>
        );*/
        return (
            <div style={{backgroundColor: 'yellow'}}>
                <h3>Новый КОМПОНЕНТ!</h3>
            </div>
        );
    }

}
