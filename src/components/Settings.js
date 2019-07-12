'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";


export const Settings = () => (
    <Page>
        <h1>Settings</h1>

        <h2>Password</h2>
        <Form id="formChangePassword">
            <Form.Group controlId="formChangePassword">
                <Form.Label>Old password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group controlId="formChangePassword">
                <Form.Label>New password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group controlId="formChangePasswords">
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Change password
            </Button>
        </Form>

        <br />
        <Link to='/studies/manage'><Button>Delete account</Button></Link>
    </Page>
);
