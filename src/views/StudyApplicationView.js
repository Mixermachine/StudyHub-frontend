'use strict';

import React from 'react';

import {StudyApplication} from '../components/StudyApplication';
import StudyService from "../services/StudyService";
import UserService from "../services/UserService";
import RewardService from "../services/RewardService";

export class StudyApplicationView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timeslotsLoading: true,
            timeslots: [],
            rewardTypes: [],
            rewardTypesLoading: true,
            payoutMethods: [],
            payoutMethodsLoading: true,
        };

        let id = this.props.match.params.id;
        StudyService.getTimeslots(id).then(timeslots => {
            let availableTS = [];
            for (let timeslot of timeslots) {
                let future = new Date(timeslot.start) >= new Date();
                if (future && !timeslot.reserved) availableTS.push(timeslot);
            }
            this.setState({
                timeslots: availableTS,
            });
        }).catch(e => {
            console.error(e);
        });
    }

    componentWillMount() {
        this.setState({
            studyLoading: true,
        });

        let id = this.props.match.params.id;
        StudyService.getStudy(id).then(study => {
            this.setState({
                study: study,
                studyLoading: false
            });
        }).catch(e => {
            console.error(e);
        });

        if (UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                let userId = user.id;
                this.setState({
                    userId: userId,
                });
                return UserService.getPayoutMethods(userId);
            }).then(payoutMethods =>{
                this.setState({
                    payoutMethods: [...payoutMethods],
                    payoutMethodsLoading: false
                });
            });
            RewardService.getRewards().then(rewardTypes => this.setState({
                rewardTypes: [...rewardTypes],
                rewardTypesLoading: false
            }));
        } else {
            // Payout methods cannot be loaded without being logged in.
            // Reward are only required in combination with the payout methods. (for the names)
            this.setState({
                payoutMethodsLoading: false,
                rewardTypesLoading: false
            })
        }
    }

    render() {
        if (this.state.studyLoading || this.state.payoutMethodsLoading || this.state.rewardTypesLoading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyApplication
                participantId={this.state.userId}
                study={this.state.study}
                studyId={this.props.match.params.id}
                timeslots={this.state.timeslots}
                payoutMethods={this.state.payoutMethods}
                rewardTypes={this.state.rewardTypes}
            />
        );
    }
}
