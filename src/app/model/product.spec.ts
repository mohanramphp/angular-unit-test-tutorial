import { Product } from "./product";

describe('product model', () => {
    it('model should be instantiable', () => {
        const p = new Product(101, 'pendrive', 500);
        expect(p).toBeTruthy();
        expect(p.pid).toEqual(101);
        expect(p.pname).toEqual('pendrive');
        expect(p.price).toEqual(500);
    });
});