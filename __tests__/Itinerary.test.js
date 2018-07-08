/* globals describe it expect */
// const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('checks whether Itinerary can be instantiated ', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('checks that Itinerary has a ports property', () => {
    const poopyport = new Port('Poopyport');
    const crappington = new Port('Crappington');
    const itinerary = new Itinerary([poopyport, crappington]);
    expect(itinerary.ports).toEqual([poopyport, crappington]);
  });
});
