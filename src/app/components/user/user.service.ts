import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class UserService {
    user = { name: 'Murthy' };


    getUser() {
        //ajax with http client
        return this.user;
    }
}