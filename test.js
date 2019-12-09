const task = require('./task.js')
const chai = require('chai')
const assert = chai.assert
const EventEmitter = require('events')

it('bn', () => {
  assert.instanceOf(task.emitterHello, EventEmitter, '')
})
