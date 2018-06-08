import {Injectable} from '@angular/core';
import {Person} from "./person";
import {Observable, of} from "rxjs/index";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    person: Person[] = [
        {id: 1, firstName: 'Geri', lastName: 'Kona', dateOfBirth: new Date('1993, 10, 22')},
        {id: 2, firstName: 'Adam', lastName: 'West', dateOfBirth: new Date('1928, 09, 19')}
    ];

    getPeople(): Observable<Person[]> {
        return of(this.person);
    }

    getSearch(filter: string): Observable<Person[]> {
        var results: Person[] = [];
        if (filter == '' || filter == null) {
            return of(this.person);
        } else {
            this.person.forEach(data => {
                if (data.firstName.toUpperCase().includes(filter.toUpperCase()) || data.lastName.toUpperCase().includes(filter.toUpperCase())) {
                    results.push(data);
                }
            })
            return of(results);
        }
    }

    constructor() {
    }
}

