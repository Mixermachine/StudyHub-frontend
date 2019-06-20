'use strict';

import React from 'react';

import {Profile} from '../components/Profile';

export class ProfileView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Profile/>
        );
    }
}
