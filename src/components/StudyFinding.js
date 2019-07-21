'use strict';

import React from 'react';

import Page from './Page'
import {StudyList} from './StudyList';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class StudyFinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            searchText: '',
            city: '',
            zip: '',
            organizer: '',
            minReward: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOrganizerChange = this.handleOrganizerChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleOrganizerChange(event) {
        let value = event.target.value;

        let shortValue = '';

        switch (value) {
            case Organizers.STUDENT:
                shortValue = 's';
                break;
            case Organizers.UNIVERSITY:
                shortValue = 'u';
                break;
            case Organizers.ORGANIZATION:
                shortValue = 'o';
                break;
            case Organizers.ALL:
                break;
            default:
                alert('Error while changing the organizer');
        }

        this.setState({
            organizer: value,
            shortOrganizer: shortValue
        });
    }

    toggleAdvancedSearch() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <Page>
                <Container>
                    <Form>
                        <Row className="search-bar">
                            <Col>
                                <Form.Control
                                    name='searchText'
                                    className="search-bar-box"
                                    type="text"
                                    placeholder="Search for studies..."
                                    value={this.state.searchText}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button className="search-bar-submit" onClick={() => {
                                    this.props.handleSearchClick(this.state.searchText, this.state.city,
                                        this.state.zip, this.state.shortOrganizer, this.state.minReward)
                                }}/>
                            </Col>
                            <Col xs="auto">
                                <Button className="search-bar-extend" className="search-bar-extend"
                                        onClick={this.toggleAdvancedSearch.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            {!this.state.isHidden && <AdvancedSearch
                                city={this.state.city}
                                zip={this.state.zip}
                                organizer={this.state.organizer}
                                minReward={this.state.minReward}
                                handleChange={this.handleChange}
                                handleOrganizerChange={this.handleOrganizerChange}
                            />}
                        </Row>
                    </Form>
                </Container>
                <Container>
                    <StudyList studies={this.props.studies}/>
                </Container>
            </Page>
        );
    }
}

const AdvancedSearch = (props) => (
    <Container className="search-bar-extend-area">
        <h1>Advanced filter</h1>
        <Row>
            <Col>
                <Form.Label className="form-label">City</Form.Label>
                <Form.Control
                    name="city"
                    className="input-data"
                    type="text"
                    placeholder="Enter city name"
                    value={props.city}
                    onChange={props.handleChange}
                />
            </Col>
            <Col>
                <Form.Label className="form-label">Zip code</Form.Label>
                <Form.Control
                    name="zip"
                    className="input-data"
                    type="text"
                    placeholder="Enter zip code"
                    value={props.zip}
                    onChange={props.handleChange}
                />
            </Col>
            <Col>
                <Form.Label className="form-label">Organizer</Form.Label>
                <div className="input-select-wrapper">
                    <Form.Control
                        className="input-select"
                        type="text"
                        as="select"
                        value={props.organizer}
                        onChange={props.handleOrganizerChange}
                    >
                        <option>{Organizers.STUDENT}</option>
                        <option>{Organizers.UNIVERSITY}</option>
                        <option>{Organizers.ORGANIZATION}</option>
                        <option>{Organizers.ALL}</option>
                    </Form.Control>
                </div>
            </Col>
            <Col>
                <Form.Label>Minimal Reward</Form.Label>
                <Form.Control
                    className="input-data"
                    type="text"
                    placeholder="Enter minimal desired reward"
                    value={props.minReward}
                    onChange={props.handleChange}
                />
            </Col>
        </Row>
    </Container>
);

const Organizers = {
    STUDENT: 'Student',
    UNIVERSITY: 'University',
    ORGANIZATION: 'Organization',
    ALL: 'All Types'
};
