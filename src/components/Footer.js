"use strict";

import React from 'react';


export class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={this.props.className}>
                <p>© {new Date().getFullYear()} StudyHub. All rights reserved.</p>
            </footer>
        );
    }
}