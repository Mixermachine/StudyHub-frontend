'use strict';

import React from 'react';
import CountryList from 'country-list';

import Page from './Page'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import StudyService from "../services/StudyService";
import {TimeSlotCreation} from "./timeSlotCreation/TimeSlotCreation";

export class StudyCreation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            prerequisites: '',
            capacity: '',
            country: '',
            city: '',
            zip: '',
            street: '',
            number: '',
            additionalLocationInfo: '',
            rewardCurrency: 'EUR',
            rewardAmount: '',
            published: false,
            isHidden: true,
            timeSlots: [],
            timeSlotDuration: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static inBoundaries(string, min, max, name) {
        if (string.length < min) return name + ' is too short.\n';
        if (string.length > max) return name + ' is too long.\n';
        return '';
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value,
        });
    }

    handleCheckChange(event) {
        let target = event.target;
        let name = target.name;
        let checked = target.checked;

        this.setState({
            [name]: checked,
        });
    }

    createTimeSlot(timeSlot) {
        let timeSlots = [...this.state.timeSlots];
        timeSlots.push(timeSlot);
        this.setState({
            timeSlots: timeSlots,
        });
    }

    deleteTimeSlot(timeSlot) {
        let timeSlots = [];
        for (let ts of this.state.timeSlots) {
            if (ts !== timeSlot) timeSlots.push(ts);
        }
        this.setState({timeSlots: timeSlots});
    }

    handleTimeSlotDurationChange(duration) {
        this.setState({timeSlotDuration: duration});
    }

    handleSubmit(event) {
        event.preventDefault();

        let errorMessage = '';

        errorMessage += StudyCreation.inBoundaries(this.state.title, 1, 255, 'Title');
        errorMessage += StudyCreation.inBoundaries(this.state.description, 1, 2500, 'Description');
        errorMessage += StudyCreation.inBoundaries(this.state.prerequisites, 0, 1000, 'Prerequisites');

        let capacity = Number(this.state.capacity);
        if (!Number.isInteger(capacity)) {
            errorMessage += 'Capacity has to be a integer number.\n';
        }
        if (capacity <= 0) {
            errorMessage += 'Capacity has to be positive and greater than 0.\n'
        }
        if (capacity > 1000) {
            errorMessage += 'Capacity maximum is at 1000.\n';
        }

        errorMessage += StudyCreation.inBoundaries(this.state.city, 1, 100, 'City name');
        errorMessage += StudyCreation.inBoundaries(this.state.zip, 1, 20, 'Zip code');
        errorMessage += StudyCreation.inBoundaries(this.state.street, 1, 50, 'Street name');
        errorMessage += StudyCreation.inBoundaries(this.state.number, 1, 20, 'Street number');
        errorMessage += StudyCreation.inBoundaries(this.state.additionalLocationInfo, 0, 255,
            'Additional location info');

        let rewardAmount = Number(this.state.rewardAmount);
        if (isNaN(rewardAmount)) {
            errorMessage += 'Reward amount has to be a real number (e.g. 5 or 1.23)\n';
        }
        if (rewardAmount < 0) {
            errorMessage += 'Reward amount has to be non-negative\n';
        }

        if (!errorMessage) {
            let countryCode = CountryList.getCode(this.state.country);
            let study = {
                title: this.state.title,                    // 255
                description: this.state.description,        // 2500
                prerequisites: this.state.prerequisites,    // 1000
                capacity: this.state.capacity,              // 1000 und positiv, keine buchstaben
                country: countryCode,                       // 3
                city: this.state.city,                      // 100
                zip: this.state.zip,                        // 20
                street: this.state.street,                  // 50
                number: this.state.number,                  // 20 Zeichen
                additionalLocationInfo: this.state.additionalLocationInfo,  // 255
                rewardCurrency: this.state.rewardCurrency,  // 3 Zeichen
                rewardAmount: this.state.rewardAmount,      // 20
                published: this.state.published,
                payeeId: this.props.userId
            };

            StudyService.createStudy(study).then(study => {
                if (this.state.timeSlots.length !== 0 && this.state.timeSlotDuration) {
                    let timeslots = [];
                    for (let timeSlot of this.state.timeSlots) {
                        let start = timeSlot;
                        let stop = new Date(start.getTime() + this.state.timeSlotDuration);
                        timeslots.push({start: start, stop: stop});
                    }
                    return StudyService.createTimeSlots({timeslots: timeslots}, study.id);
                }
            }).catch(e => console.error(e));
        } else {
            errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
            alert(errorMessage)
        }
    }

    render() {
        return (
            <Page>
                <Container>
                    <h1>Create new study</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label className="form-label">Title</Form.Label>
                            <Form.Control
                                className="input-data"
                                name='title'
                                type='text'
                                placeholder='Enter study title'
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Description</Form.Label>
                            <Form.Control
                                className="input-data"
                                name='description'
                                as='textarea'
                                rows='5'
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Prerequisites</Form.Label>
                            <Form.Control
                                className="input-data"
                                name='prerequisites'
                                as='textarea'
                                rows='3'
                                value={this.state.prerequisites}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Participant capacity</Form.Label>
                            <Form.Control
                                className="input-data"
                                name='capacity'
                                type='text'
                                placeholder='Enter participant capacity'
                                value={this.state.capacity}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <br/>
                        <TimeSlotCreation
                            timeSlots={this.state.timeSlots}
                            timeSlotDuration={this.state.timeSlotDuration}
                            createTimeSlot={timeSlot => this.createTimeSlot(timeSlot)}
                            deleteTimeSlot={timeSlot => this.deleteTimeSlot(timeSlot)}
                            handleTimeSlotDurationChange={duration => this.handleTimeSlotDurationChange(duration)}
                        />
                        <br/>

                        <br/>
                        <Row>
                            <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/address.png"/></Col>
                            <Col><h1>Location informations</h1></Col>
                        </Row>
                        <br/>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="form-label">Street</Form.Label>
                                    <Form.Control
                                        className="input-data"
                                        name='street'
                                        type='text'
                                        placeholder='Enter street'
                                        value={this.state.street}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group>
                                    <Form.Label className="form-label">Number</Form.Label>
                                    <Form.Control
                                        className="input-data"
                                        name='number'
                                        type='text'
                                        placeholder='Enter street number'
                                        value={this.state.number}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="3">
                                <Form.Group>
                                    <Form.Label className="form-label">Zip code</Form.Label>
                                    <Form.Control
                                        className="input-data"
                                        name='zip'
                                        type='text'
                                        placeholder='Enter zip code'
                                        value={this.state.zip}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="form-label">City</Form.Label>
                                    <Form.Control
                                        className="input-data"
                                        name='city'
                                        type='text'
                                        placeholder='Enter city'
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group>
                            <Form.Label className="form-label">Country</Form.Label>
                            <div className="input-select-wrapper">
                                <Form.Control
                                    className="input-select"
                                    name='country'
                                    as='select'
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                >
                                    {CountryList.getData().map(country => (
                                        <option key={country.code}>{country.name}</option>))}
                                </Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Additional information (room number, etc.)</Form.Label>
                            <Form.Control
                                className="input-data"
                                name='additionalLocationInfo'
                                type='text'
                                placeholder='Enter information'
                                value={this.state.additionalLocationInfo}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <br/>
                        <Row>
                            <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png"/></Col>
                            <Col><h1>Reward</h1></Col>
                        </Row>
                        <br/>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="form-label">Amount
                                        in {this.state.rewardCurrency}</Form.Label>
                                    <Form.Control
                                        className="input-data"
                                        name='rewardAmount'
                                        type='text'
                                        value={this.state.rewardAmount}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group>
                                    <Form.Label className="form-label">Currency</Form.Label>
                                    <div className="input-select-wrapper">
                                        <Form.Control
                                            className="input-select"
                                            name='rewardCurrency'
                                            as='select'
                                            value={this.state.rewardCurrency}
                                            onChange={this.handleChange}
                                        >
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </Form.Control>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <br/>
                        <Form.Check
                            name="published"
                            type="checkbox"
                            label="Publish this study."
                            checked={this.state.published}
                            onChange={this.handleCheckChange}
                        />

                        <br/>
                        <Button variant='primary' type='submit' className="input-button">
                            Create
                        </Button>
                    </Form>
                </Container>
            </Page>
        );
    }
}
