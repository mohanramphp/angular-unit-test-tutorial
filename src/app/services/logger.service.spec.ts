import { TestBed } from "@angular/core/testing";
import { LoggerService } from './logger.service';

describe('Logger Service:', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            
        });

    });

    it('service should be created', () => {
        const service: LoggerService = TestBed.inject(LoggerService);
        expect(service).toBeTruthy();
    });

    it('service should log message in db', () => {
        const service: LoggerService = TestBed.inject(LoggerService);
        const actual = service.logInfo('SSO-Token success');
        const expected = "Logged SSO-Token success in DB";
        expect(actual).toEqual(expected);
    });


});