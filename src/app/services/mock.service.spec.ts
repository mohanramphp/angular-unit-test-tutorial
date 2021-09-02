import { AuthComponent } from "./auth.component";

// Mocking with Fake class
class MockAuthService {
    authenticated = false;
    isAuthenticated() {
        return this.authenticated;
    }
}

describe('component: Login', () => {
    let component: AuthComponent;
    let service: MockAuthService;

    beforeEach(() => {
        service = new MockAuthService();
        component = new AuthComponent(service);
    });

    it('needsLogin returns false when the user is not authenticated', () => {
        service.authenticated = true;
        expect(component.needsLogin()).toBeFalsy();
    });
});