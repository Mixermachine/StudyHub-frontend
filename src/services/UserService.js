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
            HttpService.get(`${UserService.baseURL()}/user`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    /*static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id : JSON.parse(window.atob(base64)).id,
            firstName: JSON.parse(window.atob(base64)).firstName,
            lastName: JSON.parse(window.atob(base64)).lastName,
            DoB: JSON.parse(window.atob(base64)).DoB,
            email: JSON.parse(window.atob(base64)).email,
            gender: JSON.parse(window.atob(base64)).gender,
        };
    }*/

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}