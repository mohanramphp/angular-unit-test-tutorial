import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class AuthService {
    isAuthenticated(): boolean {
        // read localStorage sso token if found return true/false
        return !!localStorage.getItem('sso-token');
    }
}