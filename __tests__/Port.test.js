/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('checks if port object can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('checks if name can be applied to a new port object', () => {
    const port = new Port('Portington');
    expect(port.name).toBe('Portington');
  });
});
