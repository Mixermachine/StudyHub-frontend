'use strict';

import HttpService from './HttpService';

export default class RewardService {
    constructor() {
    }

    static baseUrl() {
        return 'http://localhost:3000/reward';
    }

    static getRewards() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${RewardService.baseUrl()}`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving rewards');
                }
            }, textStatus => reject(textStatus));
        });
    }
}