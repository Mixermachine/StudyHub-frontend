"use strict";

import React from 'react';

import Page from './Page';
import {Button, DatePicker} from "react-md";

import {TimeSlotList} from "./time_slot_management/TimeSlotList";

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
            <Button raised>Edit</Button>
        </div>
        <div>
            <h3>Select a date:</h3>
            <DatePicker
                DateTimeFormat={Intl.DateTimeFormat}
                okLabel={"Select"}
                onOkClick={() => {
                }}
                cancelLabel={"Cancel"}/>
        </div>
        <div>
            <TimeSlotList timeslots={data.timeslots}/>
        </div>
    </Page>
);
