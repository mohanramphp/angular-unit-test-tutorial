import { Component } from "@angular/core"
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-login',
    template: `<a [hidden]="needsLogin()">Login</a>`
})
export class AuthComponent {
    constructor(private auth: AuthService) { }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }
}