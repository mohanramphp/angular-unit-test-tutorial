// Spies: spyOn(), and.callthrough(),and.returnValue,and.callFake()
function Season() { //instance function/class (component/pipe/directive)
    this.season = 'Rainy';

    this.nextSession = function () {
        console.log('actual nextSession is called');
        this.season = 'Winter';
        return this.season;
    }

    this.getNextSession = function () {
        return this.nextSession();
    }
}

describe('spyOn demo with and.callThrough', () => {
    it('should return Winter', () => {
        const s = new Season();
        spyOn(s, 'nextSession').and.callThrough();
        s.getNextSession();
        expect(s.season).toEqual('Winter');
    });
});

describe('spyOn demo with and.returnValue', () => {
    it('should return Summer', () => {
        const s = new Season();
        spyOn(s, 'nextSession').and.returnValue('Summer');
        // s.getNextSession();
        expect(s.nextSession()).toEqual('Summer');
    });
});

// and.callFake()
// a spy can not only return the value =, it can also replace
// entire spied function using and.callFake()
describe('spyOn demo with and.callFake()', () => {
    it('should return season', () => {
        const s = new Season();
        spyOn(s, 'nextSession').and.callFake(() => {
            console.log('I am in future call');
            return 'Winter';
        });
        // s.getNextSession();
        expect(s.nextSession()).not.toEqual('Summer');
    });
});

describe('spyOn demo with and.callFake(arg)', () => {
    it('should return season', () => {
        const s = new Season();
        spyOn(s, 'nextSession').and.callFake((city) => {
            console.log('I am in future call' + city);
            return 'Winter season in ' + city;
        });
        // s.getNextSession();
        expect(s.nextSession('Chennai')).toEqual('Winter season in Chennai');
    });
});