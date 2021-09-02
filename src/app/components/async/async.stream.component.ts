import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'app-rx',
    template:`
    <div>{{personName | async}}</div>
    `
})
export class AsyncStreamComponent {
    personName: Observable<string>;

}