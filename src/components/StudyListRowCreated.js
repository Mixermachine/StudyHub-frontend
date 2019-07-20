'use strict';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from 'react-router-dom/Link';
import StudyService from "../services/StudyService";

export class StudyListRowCreated extends React.Component {

    constructor(props) {
        super(props);
    }

    unpublishStudy(st) {
        st.published = false;

        StudyService.updateStudy(st).then(s => {
        }).catch(e => console.error(e));

        window.location.reload();
    }

    publishStudy(st) {
        st.published = true;

        StudyService.updateStudy(st).then(s => {
        }).catch(e => console.error(e));

        window.location.reload();
    }

    render() {
        let publish;

        if(this.props.study.published) {
            publish = <Button variant="primary" className="input-button" onClick={() => { this.unpublishStudy(this.props.study) }}>Unpublish</Button>
        } else {
            publish = <Button variant="primary" className="input-button" onClick={() => { this.publishStudy(this.props.study) }}>Publish</Button>
        }

        return (
            <Container>
                <Card>
                    <Card.Header as="h5">
                        <Row>
                            <Col>{this.props.study.title}</Col>
                            <Col md="auto"><Link to={'/studies/manage/' + this.props.study.id}><Button variant="primary" className="input-button">Manage</Button></Link></Col>
                            <Col md="auto">{publish}</Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <p style={{"marginLeft": "15px"}}>{this.props.study.description}</p>
                        </Row>
                        <Row>
                            <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/conference.png" /></Col>
                            <Col>{this.props.study.capacity - this.props.study.availableCapacity} / {this.props.study.capacity}</Col>
                            <Col md="auto"><img src="https://img.icons8.com/windows/32/000000/money-bag.png" /></Col>
                            <Col>{this.props.study.rewardAmount} {this.props.study.rewardCurrency}</Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br />
            </Container>
        );
    }
}
