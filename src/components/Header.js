"use strict";

import React from 'react';
import {withRouter, NavLink} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import UserService from "../services/UserService";

import userimg from '../../public/images/login_icon.png'
import logo from '../../public/images/StudyHub.png'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {}
        }
    }

    componentWillMount() {
        this.setState({
            loading: true,
        });

        if(UserService.isAuthenticated()) {
            UserService.getCurrentUser().then(user => {
                this.setState({
                    user: user,
                    loading: false,
                });

            }).catch(e => console.error(e));
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
                <Nav.Link as={NavLink} to="/studies/my"><div className="nav-header-links">Dashboard</div></Nav.Link>
                <Nav.Link as={NavLink} to="/support"><div className="nav-header-links">Support</div></Nav.Link>
            </Nav>;

            usermenu = <ButtonToolbar className="justify-content-end">
                <Dropdown as={ButtonGroup}>
                    <Button className="nav-header-button" block onClick={() => this.props.history.push("/profile")}>
                            <Row>
                                <Col md="auto">
                                    <Navbar.Text className="nav-header-button-text">
                                        {this.state.user.firstName + ' ' + this.state.user.lastName}
                                    </Navbar.Text>
                                </Col>
                                <Col>
                                    <Image height="50"
                                           src={userimg}
                                           roundedCircle/>
                                </Col>
                            </Row>
                    </Button>
                    <Dropdown.Toggle className="nav-header-button">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/settings">Settings</Dropdown.Item>
                        <Dropdown.Item as={NavLink} onClick={() => this.logout()} to="/logout">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonToolbar>;
        } else {
            menu = <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/register"><div className="nav-header-links">Sign up</div></Nav.Link>
            </Nav>;

            usermenu = <ButtonToolbar className="justify-content-end">
                    <Dropdown as={ButtonGroup}><Button className="nav-header-button" block onClick={() => this.props.history.push("/login")}>
                        <Row>
                            <Col md="auto">
                                <Navbar.Text className="nav-header-button-text">Login</Navbar.Text>
                            </Col>
                            <Col>
                                <Image height="50"
                                       src="https://webdisk.ads.mwn.de/Handlers/Download.ashx?file=Home%2FDesktop%2FStudyHub%2Flogin_icon.png&action=download" />
                            </Col>
                        </Row>
                    </Button>
                </Dropdown>
            </ButtonToolbar>;
        }

        return (
            <Navbar className="nav-header">
                <Image className="nav-header-logo"
                       src={logo} />
                <Navbar.Brand href="/"><div className="nav-header-brand" >StudyHub</div></Navbar.Brand>
                <Container className="navbar-fill">
                    <Navbar.Collapse id="basic-navbar-nav">
                        {menu}
                    </Navbar.Collapse>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    {usermenu}
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);