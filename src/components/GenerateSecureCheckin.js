'use strict';

import React from 'react';
import QRCode from 'react-qr-svg';
import SecureCheckinService from '../services/SecureCheckinService';

export default class GenerateSecureCheckin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueForQRCode: "",
            status: "",
            studyId: props.studyId,
            timeslotId: props.timeslotId
        };

        this.getNewQrText();

        setInterval(this.getNewQrText, 5000);
    }

    getNewQrText() {
        SecureCheckinService.generateQrText(this.props.studyId, this.props.timeslotId)
            .then(result => {
                if (result) {
                    status = "Please scan";

                    this.state.valueForQRCode = result;
                } else {
                    status = "Service stopped";
                }
            })
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{width: 256}}
                    value={this.state.valueForQRCode}
                />
            </div>
        );
    }
}