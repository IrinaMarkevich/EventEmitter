const EventEmitter = require('events')

const emitterHello = new EventEmitter()

const eventHello = 'Привет'
const eventHowAreYou = 'Как дела?'
const eventWhatAreYouDoing = 'Что делаешь?'

emitterHello.on(eventHello, function () {
  console.log('-', 'Привет!')
  return true
})

emitterHello.on(eventHowAreYou, function () {
  console.log('-', 'У меня все отлично!')
  return true
})

emitterHello.on(eventWhatAreYouDoing, function () {
  console.log('-', 'Я делаю задачу EventEmiter')
  return true
})

emitterHello.emit(eventHello)
emitterHello.emit(eventHowAreYou)
emitterHello.emit(eventWhatAreYouDoing)

const chai = require('chai')
const assert = chai.assert

it('emitterHello is an instance of EventEmitter', () => {
  assert.instanceOf(emitterHello, EventEmitter)
})

it('eventHello', () => {
  assert.isTrue(emitterHello.emit(eventHello))
})

it('eventHowAreYou', () => {
  assert.isTrue(emitterHello.emit(eventHowAreYou))
})

it('eventWhatAreYouDoing', () => {
  assert.isTrue(emitterHello.emit(eventHowAreYou))
})
