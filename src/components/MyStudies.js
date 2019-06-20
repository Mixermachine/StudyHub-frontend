'use strict';

import React from 'react';

import Page from './Page'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Link from "react-router-dom/es/Link";

export const MyStudies = () => (
    <Page>
        <h1>Study dashboard</h1>

        <h2>Created studies</h2>

        <ButtonToolbar>
            <Link to='/studies/create'><Button>Create study</Button></Link>
        </ButtonToolbar>
        <br />

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
                    <td>Test 1 djgfjgkfjlkgjdfoiigfscod</td>
                    <td>20</td>
                    <td>5.00 €</td>
                    <td>
                        <ButtonToolbar>
                            <Button className="toolbar_btn" href="#">Publish</Button>
                            <Link to='/studies/manage'><Button className="toolbar_btn">View</Button></Link>
                            <Button className="toolbar_btn" href="#">Edit</Button>
                            <Button className="toolbar_btn" href="#">Delete</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                <tr>
                    <td>Test 2 djgfjgkfjlkgjdfoiigfscod</td>
                    <td>5</td>
                    <td>15.00 €</td>
                    <td>
                        <ButtonToolbar>
                            <Button className="toolbar_btn" href="#">Publish</Button>
                            <Link to='/studies/manage'><Button className="toolbar_btn">View</Button></Link>
                            <Button className="toolbar_btn" href="#">Edit</Button>
                            <Button className="toolbar_btn" href="#">Delete</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
            </tbody>
        </Table>
        <br />

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
                            <Button className="toolbar_btn" href="#">View</Button>
                            <Button className="toolbar_btn" href="#">Cancel</Button>
                        </ButtonToolbar>
                    </td>
                </tr>
            </tbody>
        </Table>
    </Page>
);