import { Component } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
    selector:'app-search',
    template: 'I am Search component'
})
export class SearchComponent {

}

@Component({
    selector: 'app-home',
    template: 'I am Home component'
})
export class HomeComponent {

}

@Component({
    template: '<router-outlet></router-outlet>'
})
export class RouteComponent {

}

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];