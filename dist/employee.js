"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
;
class Employee {
    constructor(fullname, gender, birtday, email, phonenumber) {
        this._fullname = "";
        this._gender = Gender.OTHER;
        this._email = "";
        this._phonenumber = "";
        this._fullname = fullname;
        this._gender = gender;
        this._birtday = birtday;
        this._email = email;
        this._phonenumber = phonenumber;
    }
}
exports.Employee = Employee;
