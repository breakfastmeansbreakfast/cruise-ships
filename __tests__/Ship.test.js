/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('starting port', () => {
    const port = new Port('Poopyville');
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const port = new Port('Poopyville');
    const ship = new Ship('SlipperyShittyMcShipington');
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock', () => {
    const poopyville = new Port('Poopyville');
    const ship = new Ship(poopyville);
    const excrementville = new Port('Excrementville');
    ship.dock(excrementville);
    expect(ship.currentPort).toBe(excrementville);
  });
});
