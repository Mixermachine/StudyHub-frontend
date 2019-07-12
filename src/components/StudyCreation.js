'use strict';

import React from 'react';
import CountryList from 'country-list';

import Page from './Page'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StudyService from "../services/StudyService";

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
            rewardType: 'PayPal',
        };

        this.handleChange = this.handleChange.bind(this);
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
                country: countryCode,                       // 3    TODO ISO3166 country-code-lookup
                city: this.state.city,                      // 100
                zip: this.state.zip,                        // 20
                street: this.state.street,                  // 50
                number: this.state.number,                  // 20 Zeichen
                additionalLocationInfo: this.state.additionalLocationInfo,  // 255
                rewardCurrency: this.state.rewardCurrency,  // 3 Zeichen
                rewardAmount: this.state.rewardAmount,      // 20
                rewardType: this.state.rewardType,          // selection
                //TODO Tags 50
            };

            console.log(study);

            // StudyService.createStudy(study)
            //     .then(test => console.log(text))
            //     .catch(e => console.error(e));
        } else {
            errorMessage = 'Some inputs are not filled correctly:\n' + errorMessage;
            alert(errorMessage)
        }
    }

    render() {
        return (
            <Page>
                <h1>Create new study</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name='title'
                            type='text'
                            placeholder='Enter study title'
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name='description'
                            as='textarea'
                            rows='5'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Prerequisites</Form.Label>
                        <Form.Control
                            name='prerequisites'
                            as='textarea'
                            rows='3'
                            value={this.state.prerequisites}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Participant Capacity</Form.Label>
                        <Form.Control
                            name='capacity'
                            type='text'
                            placeholder='Enter participant capacity'
                            value={this.state.capacity}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            name='country'
                            as='select'
                            value={this.state.country}
                            onChange={this.handleChange}
                        >
                            {CountryList.getData().map(country => (<option key={country.code}>{country.name}</option>))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            name='city'
                            type='text'
                            placeholder='Enter city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                            name='zip'
                            type='text'
                            placeholder='Enter zip code'
                            value={this.state.zip}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            name='street'
                            type='text'
                            placeholder='Enter street'
                            value={this.state.street}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            name='number'
                            type='text'
                            placeholder='Enter street number'
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Additional Location Information (Room number, etc.)</Form.Label>
                        <Form.Control
                            name='additionalLocationInfo'
                            type='text'
                            placeholder='Enter information'
                            value={this.state.additionalLocationInfo}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Reward Currency</Form.Label>
                        <Form.Control
                            name='rewardCurrency'
                            as='select'
                            value={this.state.rewardCurrency}
                            onChange={this.handleChange}
                        >
                            <option>EUR</option>
                            <option>USD</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Reward Amount in {this.state.rewardCurrency}</Form.Label>
                        <Form.Control
                            name='rewardAmount'
                            type='text'
                            value={this.state.rewardAmount}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Reward Type</Form.Label>
                        <Form.Control
                            name='rewardType'
                            as='select'
                            value={this.state.rewardType}
                            onChange={this.handleChange}
                        >
                            <option>PayPal</option>
                            <option>IBAN</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Create
                    </Button>
                </Form>
            </Page>
        );
    }
}
