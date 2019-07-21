"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:3000"; }

    static register(firstname, lastname, pass, dob, gender, email) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/user`, {
                firstName: firstname,
                lastName: lastname,
                DoB: dob,
                gender: gender,
                email: email,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getStudiesCreated(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${id}/created-studies`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving studies');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static getStudiesApplied(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${id}/applied-studies`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving studies');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static getUser(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${id}`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving user');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static getPayoutMethods(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${id}/payout-method/`, data => {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving payment methods');
                }
            }, textStatus => reject(textStatus));
        });
    }

    static changeUser(firstname, lastname, pass, dob, gender, email) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${UserService.baseURL()}/user`, {
                firstName: firstname,
                lastName: lastname,
                DoB: dob,
                gender: gender,
                email: email,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(email, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/auth/login`, {
                email: email,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user`, data => {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }

    static getPayoutMethods(userId) {
        if (!UserService.isAuthenticated()) return undefined;
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${userId}/payout-method`, data => {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}