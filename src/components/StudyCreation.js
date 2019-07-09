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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        // TODO checks will be here

        this.setState({
            [name]: value,
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
                            type='text'
                            placeholder='Enter country'
                            value={this.state.country}
                            onChange={this.handleChange}
                        />
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
                        <Form.Label>RewardType</Form.Label>
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

{/*<Form.Group>*/}
{/*    <Form.Label>Time schedule</Form.Label>*/}
{/*    <Form.Control id='studyTimeSchedule'/>*/}
{/*</Form.Group>*/}

{/*<Form.Group>*/}
{/*    <Form.Label>Tags</Form.Label>*/}
{/*    <Form.Control type='text' placeholder='Enter tags' />*/}
{/*</Form.Group>*/}

{/*<Form.Group>*/}
{/*    <Form.Label>Reward (per participant)</Form.Label>*/}
{/*    <Form.Control type='text' placeholder='Enter reward per participant' />*/}
{/*</Form.Group>*/}

{/*<Form.Group>*/}
{/*    <Form.Label>Payment method</Form.Label>*/}
{/*    <Form.Control id='studyPaymentMethod' as='select'>*/}
{/*        <option>PayPal</option>*/}
{/*    </Form.Control>*/}
{/*</Form.Group*/}
