/**
 * Created by Konstantin on 23.05.2017.
 */
import React, { PropTypes } from 'react';

export default class ItemDetails extends React.Component
{
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props)
    {
        super(props);

        this.state = {
            id: this.props.routeParams.id
        }
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div>
               <h1>Item Details { this.state.id } works!</h1>
            </div>
        );
    }
}
