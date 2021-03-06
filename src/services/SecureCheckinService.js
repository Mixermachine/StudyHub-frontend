import HttpService from './HttpService';

export default class SecureCheckinService {
    constructor() {
    }

    static baseUrl() {
        return 'http://localhost:3000';
    }

    static generateQrText(studyId, timeslotId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SecureCheckinService.baseUrl()}/study/${studyId}/timeslot/${timeslotId}/generate-secure-checkin`,
                data => {
                    if (data != undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject('Error while retrieving generate-secure-checkin');
                    }
                }, textStatus => reject(textStatus));
        }).then(response => {
            if (response.secretToken) {
                return SecureCheckinService.baseUrl() +
                    `/study/${studyId}/timeslot/${timeslotId}/secure-checkin/${response.secretToken}`;
            }

            return undefined;
        });
    }

    static checkin(studyId, timeslotId, token) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SecureCheckinService.baseURL()}/study/${studyId}/timeslot/${timeslotId}/secure-checkin/${token}`,
                data => {
                    if (data != undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject('Error while retrieving secure-checkin');
                    }
                }, textStatus => reject(textStatus));
        });
    }
}