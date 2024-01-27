import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HomeComponent, SearchComponent, RouteComponent, routes } from './route';
import { By } from "@angular/platform-browser";

describe('Router App', () => {
    let location: Location;
    let router: Router;
    let fixture: ComponentFixture<RouteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [HomeComponent, SearchComponent, RouteComponent]
        }).compileComponents();
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(RouteComponent);
        router.initialNavigation();
    }); // end of beforeEach

    it('fakeasync', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });

        let done = false;
        promise.then(() => done = true)
        tick(50); // delay
        expect(done).toBeTrue();
    }));

    it('navigate to search', fakeAsync(() => {
        router.navigate(['/search']);
        tick(50);
        expect(location.path()).toBe('/search');
        expect(fixture.debugElement.query(By.css('app-search'))).toBeTruthy();
    }));

    it('navigate to home', fakeAsync(() => {
        router.navigate(['/home']);
        tick(50);
        expect(location.path()).toBe('/home');
    }));

    it('handle to home when empty path is used', fakeAsync(() => {
        router.navigate(['']);
        tick(50);
        expect(location.path()).toBe('/home');
    }));

    it('handle to home when wrong path is used', fakeAsync(() => {
        router.navigate(['/foot']);
        tick(50);
        expect(location.path()).toBe('/home');
        expect(fixture.debugElement.query(By.css('app-home'))).toBeTruthy();
    }));

   

});