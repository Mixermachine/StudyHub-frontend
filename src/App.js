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
import UserService from "./services/UserService";
import {GenerateSecureCheckinView} from './views/GenerateSecureCheckinView';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'StudyHub',
            routes: [
                { component: LoginView, path: '/login'},
                { render: (props) => {
                    if(UserService.isAuthenticated()) {
                        return (<MyStudiesView {... props} />)
                    }
                    else {
                        return (<Redirect to={'/login'}/>)
                    }}, path: '/studies/my'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<ProfileView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/profile'},
                { component: RegisterView, path: '/register', exact: true},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<SettingsView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/settings'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<StudyApplicationView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/studies/application/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<StudyCreationView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/studies/create'},
                { component: StudyFindingView, path: '/', exact: true},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<StudyManagementView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/studies/manage/:id'},
                { component: SupportView, path: '/support'},
                {
                    component: GenerateSecureCheckinView,
                    path: '/studies/:studyId/timeslots/:timeslotId/generate-secure-checkin'
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

