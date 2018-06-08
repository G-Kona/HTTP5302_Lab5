import {Injectable} from '@angular/core';
import {Person} from "./person";
import {Observable, of} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    person: Person[] = [
        {id: 1, firstName: 'Geri', lastName: 'Kona', dateOfBirth: new Date('1993, 10, 22'), age: 0}
    ];

    getPeople(): Observable<Person[]> {
        return of(this.person);
    }

    constructor() {
    }
}

