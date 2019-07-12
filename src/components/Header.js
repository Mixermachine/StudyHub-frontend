"use strict";

import React from 'react';
import {withRouter, NavLink} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar className="navigation">
                <Navbar.Brand href="/">StudyHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/studies/my">Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/support">Support</Nav.Link>
                        <Nav.Link as={NavLink} to="/studies/application">StudyApplication</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <ButtonToolbar>
                        <Dropdown as={ButtonGroup}>
                            <Button className="picture-button" block onClick={() => this.props.history.push("/profile")}>
                                <Container>
                                    <Row>
                                        <Col md="auto">
                                            <Navbar.Text className="picture-button-name">John Doe</Navbar.Text>
                                        </Col>
                                        <Col>
                                            <Image height="50"
                                                   src="https://i1.rgstatic.net/ii/profile.image/645390030352384-1530884382040_Q128/Nico_Schreder.jpg"
                                                   roundedCircle/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Button>
                            <Dropdown.Toggle className="picture-button">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={NavLink} to="/settings">Settings</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/">Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);


{/*
<Toolbar
    colored
    nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
    title={this.props.title}
    actions={<KebabMenu id="toolbar-colored-kebab-menu" />}>
</Toolbar>*/
}
