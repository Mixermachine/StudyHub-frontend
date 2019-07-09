'use strict';

import HttpService from './HttpService';

export default class StudyService {
    constructor() {
    }

    static baseUrl() {return 'http://localhost:3000/study';}

    static getStudy(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${StudyService.baseUrl()}/${id}`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving study');
                }
            }, textStatus => {
                reject(textStatus);
            });
        });
    }
}