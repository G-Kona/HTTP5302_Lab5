export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    age: number;

    constructor() {
        var diff_ms = Date.now() - this.dateOfBirth.getTime();
        var age_dt = new Date(diff_ms);
        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    // getAge(dob: Date): number {
    //     var diff_ms = Date.now() - dob.getTime();
    //     var age_dt = new Date(diff_ms);
    //     return Math.abs(age_dt.getUTCFullYear() - 1970);
    // }
}
