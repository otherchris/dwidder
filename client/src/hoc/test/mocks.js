/* eslint class-methods-use-this:0 */
import EventEmitter from 'events';

export class Channel extends EventEmitter {
  join() { return this; }
  receive() { return this; }
  emit(a, b) { super.emit(a, b); }
}

export class MockSocket {
  connect() {}
  channel() { return new Channel(); }
}
