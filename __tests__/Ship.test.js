/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Turdington');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('starting port', () => {
    const port = new Port('Poopyville');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const poopyville = new Port('Poopyville');
    const fartington = new Port('Fartington');
    const itinerary = new Itinerary([poopyville, fartington]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock', () => {
    const poopyville = new Port('Poopyville');
    const excrementville = new Port('Excrementville');
    const itinerary = new Itinerary([poopyville, excrementville]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(excrementville);
  });
  it('can\'t sail further than its itinerary', () => {
    const poopyville = new Port('Poopyville');
    const excrementville = new Port('Excrementville');
    const itinerary = new Itinerary([poopyville, excrementville]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
