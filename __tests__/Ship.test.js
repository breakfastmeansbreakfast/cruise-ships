/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('starting port', () => {
        const ship = new Ship('Portington');

        expect(ship.startingPort).toBe('Portington');
    }

    )
});