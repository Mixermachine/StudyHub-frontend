'use strict';

import React from 'react';

import Page from './Page'
import {StudyList} from './StudyList';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class StudyFinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }

    toggleAdvancedSearch () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <Page>
                <Container>
                    <Form>
                        <Row className="search-bar">
                            <Col>
                                <Form.Control className="search-bar-box" type="text"
                                              placeholder="Search for studies..." />
                            </Col>
                            <Col xs="auto">
                                <Button className="search-bar-submit" />
                            </Col>
                            <Col xs="auto">
                                <Button className="search-bar-extend" className="search-bar-extend" onClick={this.toggleAdvancedSearch.bind(this)} />
                            </Col>
                        </Row>
                        <Row>
                            { !this.state.isHidden && <AdvancedSearch /> }
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

const AdvancedSearch = () => (
    <Container className="search-bar-extend-area">
        <h1>Advanced filter</h1>
        <Row>
            <Col>
                <Form.Label className="form-label">City</Form.Label>
                <Form.Control className="input-data"
                              type="text" placeholder="Enter city name"/>
            </Col>
            <Col>
                <Form.Label className="form-label">Zip code</Form.Label>
                <Form.Control className="input-data"
                              type="text" placeholder="Enter zip code"/>
            </Col>
            <Col>
                <Form.Label className="form-label">Organizer</Form.Label>
                <div className="input-select-wrapper">
                    <Form.Control className="input-select" type="text" as="select">
                        <option>Student</option>
                        <option>University</option>
                        <option>Organization</option>
                    </Form.Control>
                </div>
            </Col>
            <Col>
                <Form.Label className="form-label">Minimal Reward</Form.Label>
                <Form.Control className="input-data"
                              type="text" placeholder="Enter minimal desired reward"/>
            </Col>
            <Col>
                <Form.Label className="form-label">Reward Type</Form.Label>
                <div className="input-select-wrapper">
                    <Form.Control className="input-select"
                                  type="text" as="select">
                        <option>PayPal</option>
                        <option>Direct Deposit</option>
                        <option>Amazon Gift Card</option>
                    </Form.Control>
                </div>
            </Col>
        </Row>
    </Container>
)


/*<OverlayTrigger placement="bottom" overlay={
    <Tooltip>Search for studies</Tooltip>
}>

</OverlayTrigger>*/

/*<Col xs="auto"><Button className="search-bar-extend" eventKey="0" /></Col>*/

/*<Card class="search-bar-advanced">
    <Card.Header>
        <Accordion.Toggle as={Card.Header} eventKey="1">Advanced Search</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
        <Card.Body>
            <Form.Group>
                <Form.Label>Search Term</Form.Label>
                <Form.Control type="text" placeholder="Enter search term"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Zip code</Form.Label>
                <Form.Control type="text" placeholder="Enter zip code"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Organizer</Form.Label>
                <Form.Control type="text" as="select">
                    <option>Student</option>
                    <option>University</option>
                    <option>Organization</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Minimal Reward</Form.Label>
                <Form.Control type="text" placeholder="Enter minimal desired reward"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Reward Type</Form.Label>
                <Form.Control type="text" as="select">
                    <option>PayPal</option>
                    <option>Direct Deposit</option>
                    <option>Amazon Gift Card</option>
                </Form.Control>
            </Form.Group>
        </Card.Body>
    </Accordion.Collapse>
</Card>*/

