import HttpService from './HttpService';
import QRCode from 'qrcode';

export default class RewardService {
    constructor() {
    }

    static baseUrl() {
        return 'http://localhost:3000/reward';
    }

    static generateQrCode(studyId, timeslotId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${RewardService.baseURL()}/study/${studyId}/timeslot/${timeslotId}/generate-secure-checkin`,
                data => {
                    if (data != undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject('Error while retrieving generate-secure-checkin');
                    }
                }, textStatus => reject(textStatus));
        }).then(response => {
            if (response.token) {
                return QRCode.toDataURL(RewardService.baseUrl() +
                    `/study/${studyId}/timeslot/${timeslotId}/secure-checkin/${response.token}`);
            }

            return null;
        });
    }

}