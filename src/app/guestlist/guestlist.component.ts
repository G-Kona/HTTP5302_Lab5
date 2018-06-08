import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PeopleService} from "../people.service";

@Component({
    selector: 'app-guestlist',
    templateUrl: './guestlist.component.html',
    styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

    guests: Person[] = [];

    guestSearch: Person = new Person();
    // guestSearch.firstName = "Lee";
    searchFilter = '';

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.peopleService.getPeople().subscribe(data => this.guests = data);
    }

    getAge(dob: Date): number {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    search() {
        this.peopleService.getSearch(this.searchFilter).subscribe(data => this.guests = data);
    }

}
