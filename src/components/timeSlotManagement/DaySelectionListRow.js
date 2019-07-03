'use strice';

import React from 'react';

export class DaySelectionListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    ordinal(number) {
        if (number === 1) return '1st';
        if (number === 2) return '2nd';
        if (number === 3) return '3rd';
        return number + 'th';
    }

    render() {
        let date = this.props.day.getDate();
        let month = this.props.day.toLocaleDateString('en-us', {month: 'long'});
        let year = this.props.day.getFullYear();

        return (
            <tr>
                <td>
                    <input type="radio" name="daySelection" onClick={() => this.props.onDayClick()}/>
                </td>
                <td>
                    {month + ' ' + this.ordinal(date) + ', ' + year}
                </td>
            </tr>
        );
    }
}
