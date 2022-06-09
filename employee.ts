export enum Gender{
    MALE,
    FEMALE,
    OTHER
};
export class Employee{
    _fullname: string = "";
    _gender: Gender = Gender.OTHER;
    _birtday?: Date;
    _email: string = "";
    _phonenumber?: string = "";
    constructor(fullname: string, gender: Gender, birtday: Date, email: string, phonenumber?: string){
        this._fullname = fullname;
        this._gender = gender;
        this._birtday = birtday;
        this._email = email;
        this._phonenumber = phonenumber;
    }
    // get getFullName(): string{
    //     return this._fullname;
    // }
    // set setFullName(fullname: string){
    //     this._fullname = fullname;
    // }
    // get getGender(): Gender{
    //     return this._gender;
    // }
    // set setGender(gender: Gender){
    //     this._gender = gender;
    // }
    // get getBirthDay(): Date{
    //     return this._birtday;
    // }
    // set setBirthDay(birtday: Date){
    //     this._birtday = birtday;
    // }
    // get getEmail(): string{
    //     return this._email;
    // }
    // set setEmail(email: string){
    //     this._email = email;
    // }
    // get getPhoneNumber(): string{
    //     return this._phonenumber;
    // }
    // set setPhoneNumber(phonenumber: string){
    //     this._phonenumber = phonenumber;
    // }
}