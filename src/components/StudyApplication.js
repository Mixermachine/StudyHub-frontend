'use strict';

import React from 'react';

import Page from './Page';

import {TimeSlotManagement} from './timeSlotManagement/TimeSlotManagement';

export const StudyApplication = ({data}) => (
    <Page>
        <div>
            <h1>{data.title}</h1>

            <h3>Description</h3>
            <p>{data.description}</p>

            <hr/>

            <h3>Prerequisites</h3>
            <p>{data.prerequisites}</p>

            <hr/>

            <h3>Reward: {data.reward}€</h3>

            <hr/>

            <h3>Location</h3>
            <p>{data.location}</p>

            <hr/>

            <h3>Contact</h3>
            <p>{data.contact}</p>

            <button>Edit</button>
        </div>
        <div>
            <TimeSlotManagement timeslots={data.timeslots}/>
        </div>
        <div>
            <button>
                Confirm
            </button>
        </div>
    </Page>
);
