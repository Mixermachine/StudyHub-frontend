'use strict';

import React from 'react';

import Page from './Page'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            rewardCurrency: '',
            rewardAmount: '',
            rewardType: '',
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleCapacityChange = this.handleCapacityChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        console.log(event.target.name)
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    handlePrerequisitesChange(event) {
        this.setState({
            prerequisites: event.target.value
        });
    }

    handleCapacityChange(event) {
        this.setState({
            capacity: event.target.value
        });
    }

    handleCountryChange(event) {
        this.setState({
            country: event.target.value
        });
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value
        });
    }

    handleZipChange(event) {
        this.setState({
            zip: event.target.value
        });
    }

    handleStreetChange(event) {
        this.setState({
            street: event.target.value
        });
    }

    handleNumberChange(event) {
        this.setState({
            number: event.target.value
        });
    }

    handleAddLocInfoChange(event) {
        this.setState({
            additionalLocationInfo: event.target.value
        });
    }

    handleRewardCurrencyChange(event) {
        this.setState({
            rewardCurrency: event.target.value
        });
    }

    handleRewardAmountChange(event) {
        this.setState({
            rewardAmount: event.target.value
        });
    }

    handleRewardTypeChange(event) {
        this.setState({
            rewardType: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let study = {
            title: this.state.title,
            description: this.state.description,
            prerequisites: this.state.prerequisites,
            capacity: this.state.capacity,
            country: this.state.country,
            city: this.state.city,
            zip: this.state.zip,
            street: this.state.street,
            number: this.state.number,
            additionalLocationInfo: this.state.additionalLocationInfo,
            rewardCurrency: this.state.rewardCurrency,
            rewardAmount: this.state.rewardAmount,
            rewardType: this.state.rewardType,
        }

        // TODO do submit
    }

    render() {
        return(
            <Page>
                <h1>Create new study</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name='title'
                            type='text'
                            placeholder='Enter study title'
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name='description'
                            as='textarea'
                            rows='5'
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Participant Capacity</Form.Label>
                        <Form.Control 
                            name='capacity'
                            type='text' 
                            placeholder='Enter participants'
                            value={this.state.capacity}
                            onChange={this.handleCapacityChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Time schedule</Form.Label>
                        <Form.Control id='studyTimeSchedule'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type='text' placeholder='Enter tags' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Reward (per participant)</Form.Label>
                        <Form.Control type='text' placeholder='Enter reward per participant' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Payment method</Form.Label>
                        <Form.Control id='studyPaymentMethod' as='select'>
                            <option>PayPal</option>
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
