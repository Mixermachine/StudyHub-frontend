'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const StudyCreation = () => (
    <Page>
        <h1>Create new study</h1>
        <Form>
            <Form.Group controlId="formCreateStudy">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Participants</Form.Label>
                <Form.Control type="text" placeholder="Enter participants" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Time schedule</Form.Label>

            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Enter tags" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Reward (per participant)</Form.Label>
                <Form.Control type="text" placeholder="Enter reward per participant" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Payment method</Form.Label>
                <Form.Control as="select">
                    <option>Paypal</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    </Page>
);
