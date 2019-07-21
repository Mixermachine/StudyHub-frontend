'use strict';

import React from 'react';

import {StudyFinding} from '../components/StudyFinding';
import StudyService from "../services/StudyService";

export class StudyFindingView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            studies: [],
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        StudyService.getStudies().then(studies => {
            this.setState({
                studies: [...studies],
                loading: false,
            });

        }).catch(e => console.error(e));
    }

    handleSearchClick(searchText, city, zip, organizer, minReward) {
        StudyService.searchStudy(searchText, city, zip, organizer, minReward).then(studies => {
            this.setState({
                studies: [...studies],
            })
        }).catch(e => console.error(e));
    }

    render() {
        if (this.state.loading) return (<h2>Loading...</h2>);

        return (
            <StudyFinding
                studies={this.state.studies}
                handleSearchClick={this.handleSearchClick}
            />
        );
    }
}
