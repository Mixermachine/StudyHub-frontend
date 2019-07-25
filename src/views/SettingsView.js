'use strict';

import React from 'react';

import { Settings } from '../components/Settings';
import UserService from "../services/UserService";

export class SettingsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Settings></Settings>
        );
    }
}