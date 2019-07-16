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
            HttpService.get(`${UserService.baseURL()}/user/`, data => {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}