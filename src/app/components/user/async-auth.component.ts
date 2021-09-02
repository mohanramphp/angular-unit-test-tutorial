import { Component, OnInit } from "@angular/core";
import { AsyncAuthService } from "./async-auth.service";

@Component({
    selector: 'app-login',
    template: `
    <a>
        <span *ngIf="needsLogin">Login</span>
        <span *ngIf="!needsLogin">Logout</span>
    </a>
    `
})
export class AsyncAuthComponent implements OnInit {
    needsLogin: boolean = true;
    constructor(private auth: AsyncAuthService) {

    }
    ngOnInit(): void {
        this.auth.isAuthenticated().then(authenticated => {
            this.needsLogin = !authenticated;
        });
    }
}