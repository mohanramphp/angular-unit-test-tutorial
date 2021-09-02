import { AuthComponent } from "./auth.component";
import { AuthService } from "./auth.service";

describe('component: Auth', () => {
    let component: AuthComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        component = new AuthComponent(service);
    });

    it('needsLogin return false when the use is not authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

    it('needsLogin return true when the use is authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
});