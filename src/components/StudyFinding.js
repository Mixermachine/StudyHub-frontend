'use strict';

import React from 'react';

import Page from './Page'
import Form from "react-bootstrap/Form";

import {StudyList} from './StudyList';


export class StudyFinding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Enter search term"/>
                        </Form.Group>
                    </Form>
                    <StudyList studies={this.props.studies}/>
                </div>
            </Page>
        );
    }
}
