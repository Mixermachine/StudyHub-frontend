'use strict';

import React from 'react';
import {QRCode} from 'react-qr-svg';
import SecureCheckinService from '../services/SecureCheckinService';

export default class GenerateSecureCheckin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueForQRCode: "INVALID, WAIT",
            status: "",
            studyId: props.studyId,
            timeslotId: props.timeslotId
        };

        this.getNewQrText = this.getNewQrText.bind(this);

        this.render = this.render.bind(this);

        this.getNewQrText();

        setInterval(this.getNewQrText, 3000);
    }

    updateQrCode(e) {
        this.setState({valueForQRCode: e});
    }

    updateStatus(e) {
        this.setState({state: e});
    }

    getNewQrText() {
        return SecureCheckinService.generateQrText(this.state.studyId, this.state.timeslotId)
            .then(result => {
                if (result) {

                    this.updateQrCode(result);
                    this.updateStatus("Please scan");
                    //this.state.valueForQRCode = result;
                } else {
                    this.updateStatus("Service stopped");
                }
            });
    }

    render() {
        const {state} = this;
        return (
            <div style={{textAlign: "center"}}>
                <p className="hightlight-text">{state.status}</p>
                <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="L"
                    style={{width: 512}}
                    value={state.valueForQRCode}
                />
            </div>
        );
    }
}