import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
    REST_API: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {

    }

    // http.get/post/put/delete
    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.REST_API}`);
    }
}