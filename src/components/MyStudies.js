'use strict';

import React from 'react';

import Page from './Page'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export const MyStudies = () => (
    <Page>
        <h1>Study dashboard</h1>

        <h2>Created studies</h2>

        <ButtonToolbar>
            <Button href="#">Create study</Button>
        </ButtonToolbar>

        <Table bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Participants</th>
                    <th>Payout per participant</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test 1</td>
                    <td>20</td>
                    <td>5.00 €</td>
                    <td>
                        <ButtonToolbar>
                            <Button href="#">Publish</Button>
                            <Button href="#">View</Button>
                            <Button href="#">Edit</Button>
                            <Button href="#">Delete</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                <tr>
                    <td>Test 2</td>
                    <td>5</td>
                    <td>15.00 €</td>
                    <td>
                        <ButtonToolbar>
                            <Button href="#">Publish</Button>
                            <Button href="#">View</Button>
                            <Button href="#">Edit</Button>
                            <Button href="#">Delete</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
            </tbody>
        </Table>

        <h2>Applied studies</h2>
        <Table bordered hover>
            <thead>
            <tr>
                <th>Title</th>
                <th>Organizer</th>
                <th>Date / Time</th>
                <th>Payout</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>djgfjgkfjlkgjdfoiigfscod</td>
                    <td>Nico Schreder</td>
                    <td>06/12/2019 18:00 - 06/12/2019 19:00</td>
                    <td>5.00 €</td>
                    <td>
                        <ButtonToolbar>
                            <Button href="#">View</Button>
                            <Button href="#">Cancel</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
            </tbody>
        </Table>
    </Page>
);
