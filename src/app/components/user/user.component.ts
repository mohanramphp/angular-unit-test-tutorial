import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [UserService]
})
export class UserComponent implements OnInit {
    
    user:{name:string};
    isUserLoggedIn=false;
    userDetail:any;
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    constructor(private userService: UserService) { }

}