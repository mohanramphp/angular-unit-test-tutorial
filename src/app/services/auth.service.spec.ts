import {AuthService} from './auth.service';

describe('Service: Auth', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
        console.log("In beforeEach, instance created");
    });

    afterEach(() => {
        service = null as unknown as AuthService;
        localStorage.removeItem('sso-token');
    });

    it('should return true from isAuthenticated when there is sso', () => {
        localStorage.setItem('sso-token', '1234'); // mocking
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('should return false from isAuthenticated when there is no sso', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });

})