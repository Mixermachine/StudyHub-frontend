'use strict';

import HttpService from './HttpService';

export default class StudyService {
    constructor() {
    }

    static baseUrl() {
        return 'http://localhost:3000/study';
    }

    static getStudy(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${StudyService.baseUrl()}/${id}`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving study');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static getStudies() {
        return new Promise((resolve, reject) => {
            HttpService.get(StudyService.baseUrl(), data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving studies');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static getTimeslots(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${StudyService.baseUrl()}/${id}/timeslot`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving timeslots');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static updateTimeslot(studyId, timeslotId, timeslot) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${StudyService.baseUrl()}/${studyId}/timeslot/${timeslotId}`, timeslot, data => {
                resolve(data);
            }, textStatus => reject(textStatus));
        });
    }

    static createStudy(study) {
        return new Promise((resolve, reject) => {
            HttpService.post(StudyService.baseUrl(), study, data => {
                resolve(data);
            }, textStatus => {
                reject(textStatus);
            })
        });
    }

    static searchStudy(searchText, city, zip, organizer, minReward) {
        let query = '';
        if (searchText) query += 'searchText=' + searchText + '&';
        if (city) query += 'city=' + city + '&';
        if (zip) query += 'zip=' + zip + '&';
        if (organizer) query += 'organizer=' + organizer + '&';
        if (minReward) query += 'minReward=' + minReward + '&';
        if (query) query = '?' + query;
        query = query.slice(0, -1);
        return new Promise((resolve, reject) => {
            HttpService.get(StudyService.baseUrl() + query, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving studies');
                }
            }, textStatus => reject(textStatus));
        });
    }
}