import {  Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    constructor() {

    }

    logInfo(msg:string): string {
        // write ajax http.post(url,msg)...........
        return `Logged ${msg} in DB`;
    }
}