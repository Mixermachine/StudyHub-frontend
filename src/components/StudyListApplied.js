'use strict';

import React from 'react';
import {StudyListRowApplied} from './StudyListRowApplied'

export class StudyListApplied extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.studies.map((study, i) => <StudyListRowApplied key={i} study={study}/>)
                }
            </div>
        );
    }
}
