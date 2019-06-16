"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'

import KebabMenu from './KebabMenu';


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toolbar
                colored
                nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
                title={this.props.title}
                actions={
                    <div>
                        <Button
                            flat
                            onClick={() => this.props.history.push('/studies')}>
                            Find a Study
                        </Button>
                        <Button
                            flat
                            onClick={() => this.props.history.push('/studies/create')}>
                            Create a Study
                        </Button>
                        <Button
                            flat
                            onClick={() => this.props.history.push('/studies/approve')}>
                            Approve Studies
                        </Button>
                        <Button
                            flat
                            onClick={() => this.props.history.push('/settings')}>
                            Settings
                        </Button>
                    </div>
                }>
            </Toolbar>
        );
    }
};

export default withRouter(Header);