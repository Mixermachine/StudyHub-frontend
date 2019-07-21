'use strict';

import React, {Component} from 'react';
import QRCode from 'react-qr-svg';
import SecureCheckinService from '../services/SecureCheckinService';

export class GenerateSecureCheckin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueForQRCode: "",
            status: ""
        };

        this.getNewQrText();


        setInterval(this.getNewQrText, 5000);
    }

    getNewQrText() {
        SecureCheckinService.generateQrText(props.studyId, props.timeslotId)
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
            <View style={styles.MainContainer}>
                <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{width: 256}}
                    value={this.state.valueForQRCode}
                />
            </View>
        );
    }


}