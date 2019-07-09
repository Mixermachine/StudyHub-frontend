'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const Register = () => (
    <Page>
        <h1>Register</h1>
        <Form>
            <Form.Group controlId="formCreateStudy">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Enter firstname" />
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Enter lastname" />
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Gender</Form.Label>

                <div>
                    <Form.Check inline label="Male" type="radio" id="male" name="gender" />
                    <Form.Check inline label="Female" type="radio" id="female" name="gender" />
                    <Form.Check inline label="Divers" type="radio" id="divers" name="gender" />
                </div>
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group controlId="formCreateStudy">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <div>
                By signing up, you agree to our Terms, Privacy Policy, and Cookie Use.
            </div>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    </Page>
);
