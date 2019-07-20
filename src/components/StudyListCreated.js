'use strict';

import React from 'react';
import {StudyListRowCreated} from './StudyListRowCreated'

export class StudyListCreated extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.studies.map((study, i) => <StudyListRowCreated key={i} study={study}/>)
                }
            </div>
        );
    }
}
