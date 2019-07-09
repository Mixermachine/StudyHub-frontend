'use strict';

import React from 'react';

import { Settings } from '../components/Settings';

export class SettingsView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Settings/>
        );
    }
}