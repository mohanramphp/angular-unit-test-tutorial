import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AsyncAuthService {
    public isAuthenticated(): Promise<boolean> {
        return Promise.resolve(!!localStorage.getItem('sso-token'));
    }
}