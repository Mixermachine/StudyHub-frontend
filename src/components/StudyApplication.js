'use strict';

import React from 'react';

import Page from './Page';

import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';

export const StudyApplication = ({study}) => (
    <Page>
        <div>
            <h1>{study.title}</h1>

            <h3>Description</h3>
            <p>{study.description}</p>

            <hr/>

            <h3>Prerequisites</h3>
            <p>{study.prerequisites}</p>

            <hr/>

            <h3>Reward: {study.rewardAmount + ' ' + study.rewardCurrency}</h3>

            <hr/>

            <h3>Capacity: {study.capacity}</h3>

            <hr/>

            <h3>Location</h3>
            <p>{study.street + ' ' + study.number + ', ' + study.zip + ' ' + study.city + '. ' + study.country}</p>
            {JSON.parse(study.additionalLocationInfo).room}

            <hr/>

            <h3>Contact</h3>
            <p>
                // TODO contact
            </p>

            <button>Edit</button>
        </div>
        <div>
            <TimeSlotManagement timeslots={study.timeslots}/>
        </div>
        <div>
            <button>
                Confirm
            </button>
        </div>
    </Page>
);
