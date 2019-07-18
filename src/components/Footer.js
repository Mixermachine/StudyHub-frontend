"use strict";

import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col>
                            <Nav>
                                <Nav.Link as={NavLink} to="/imprint"><div className="nav-footer-links">Imprint</div></Nav.Link>
                                <Nav.Link as={NavLink} to="/privacy"><div className="nav-footer-links">Privacy Policy</div></Nav.Link>
                            </Nav>
                        </Col>
                        <Col md="auto" className="justify-content-end">
                            <div>© {new Date().getFullYear()} StudyHub. All rights reserved.</div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}