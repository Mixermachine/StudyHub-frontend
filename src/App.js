"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { LoginView } from './views/LoginView';
import { MyStudiesView } from './views/MyStudiesView';
import { ProfileView } from './views/ProfileView';
import { RegisterView } from './views/RegisterView';
import { SettingsView } from './views/SettingsView';
import { StudyApplicationView } from './views/StudyApplicationView';
import { StudyCreationView } from './views/StudyCreationView';
import { StudyFindingView } from './views/StudyFindingView';
import { StudyManagementView } from './views/StudyManagementView';
import { SupportView } from './views/SupportView';
import {SecureCheckinView} from './views/SecureCheckinView';
import {GenerateSecureCheckinView} from './views/GenerateSecureCheckinView';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'StudyHub',
            routes: [
                { component: LoginView, path: '/login'},
                { component: MyStudiesView, path: '/studies/my', exact: true},
                { component: ProfileView, path: '/profile', exact: true},
                { component: RegisterView, path: '/register', exact: true},
                { component: SettingsView, path: '/settings'},
                { component: StudyApplicationView, path: '/studies/application/:id'},
                { component: StudyCreationView, path: '/studies/create'},
                { component: StudyFindingView, path: '/', exact: true},
                { component: StudyManagementView, path: '/studies/manage/:id'},
                { component: SupportView, path: '/support'},
                {component: SecureCheckinView, path: '/studies/:studyId/timeslots/:timeslotId/secure-checkin'},
                {
                    component: GenerateSecureCheckinView,
                    path: 'studies/:studyId/timeslots/:timeslotId/generate-secure-checkin'
                },
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

