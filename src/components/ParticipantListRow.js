'use strict';

import React from 'react';
import UserService from "../services/UserService";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";

export class ParticipantListRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };

        if(this.props.timeslot.participantId !== null) {
            UserService.getUser(this.props.timeslot.participantId).then(user => {
                this.setState({
                    user: user,
                });
            }).catch(e => console.error(e));
        }
    }

    getGenderAsName(gender) {
        let genderval;

        if(gender !== undefined) {
            switch (gender.charAt(0)) {
                case "d":
                    genderval = "divers";
                    break;
                case "f":
                    genderval = "female";
                    break;
                case "m":
                    genderval = "male";
                    break;
            }
        }

        return genderval;
    }

    getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }

        if(isNaN(age))
            return "";
        else
            return age;
    }

    getFormattedDate(date) {
        let month = date.getMonth() + 1;

        if(month < 10)
            month = "0" + month;

        let day = date.getDate();

        if(day < 10)
            day = "0" + day;

        let year = date.getFullYear();

        return year + "-" + month + "-" + day;
    }

    getFormattedTime(date) {
        let min = date.getMinutes();

        if(min < 10)
            min = "0" + min;

        let hour = date.getHours();

        if(hour < 10)
            hour = "0" + hour;

        return hour + ":" + min;
    }

    render() {
        let start_datetime = new Date(this.props.timeslot.start);
        let end_datetime = new Date(this.props.timeslot.stop);

        return (
            <tr>
                <td>{this.state.user.firstName} {this.state.user.lastName}</td>
                <td>{this.getAge(this.state.user.DoB)}</td>
                <td>{this.getGenderAsName(this.state.user.gender)}</td>
                <td>{this.getFormattedDate(start_datetime)}</td>
                <td>{this.getFormattedTime(start_datetime)} - {this.getFormattedTime(end_datetime)}</td>
                <td><Link to='/studies/create'><Button className="input-button">Check-In</Button></Link></td>
            </tr>
        );
    }
}
