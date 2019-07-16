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
import UserService from "../services/UserService";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render() {
        let menu;
        let usermenu;

        if (UserService.isAuthenticated()) {
            menu = <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/studies/my">Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/support">Support</Nav.Link>
            </Nav>;

            usermenu = <ButtonToolbar>
                <Dropdown as={ButtonGroup}>
                    <Button className="picture-button" block onClick={() => this.props.history.push("/profile")}>
                        <Container>
                            <Row>
                                <Col md="auto">
                                    <Navbar.Text className="picture-button-name">
                                        {this.state.user.firstName + ' ' + this.state.user.lastName}
                                    </Navbar.Text>
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
                        <Dropdown.Item as={NavLink} onClick={() => this.logout()} to="/logout">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonToolbar>;
        } else {
            menu = <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav>;

            usermenu = <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        }

        return (
            <Navbar className="navigation">
                <Navbar.Brand href="/">StudyHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {menu}
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {usermenu}
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);