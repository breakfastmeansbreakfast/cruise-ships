/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let poopyville;
    let fartington;
    let itinerary;

    beforeEach(() => {
      poopyville = new Port('Poopyville');
      fartington = new Port('Fartington');
      itinerary = new Itinerary([poopyville, fartington]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('starting port', () => {
      expect(ship.currentPort).toBe(poopyville);
    });
    it('can set sail', () => {
      ship.setSail();
      expect(poopyville.ships).not.toContain(ship);
    });
    it('gets added to the port on instantiation', () => {
      expect(poopyville.ships).toContain(ship);
    });
    it('can dock at another port', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(fartington);
      expect(fartington.ships).toContain(ship);
    });
    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('can add a ship', () => {
      poopyville.addShip(ship);

      expect(poopyville.ships).toContain(ship);
    });
    it('can remove a ship', () => {
      const titanic = {};
      const mary = {};

      fartington.addShip(titanic);
      fartington.addShip(mary);
      fartington.removeShip(mary);

      expect(fartington.ships).toEqual([titanic]);
    });
  });
});
