import noop from 'lodash/noop';
import EventEmitter from 'events';

class Channel extends EventEmitter {
  constructor() {
    super();
  }
  join() { return this; }
  receive() { return this; }
  emit(a, b) { super.emit(a, b); }
}

export class MockSocket {
  connect() {}
  channel() { return new Channel(); }
}
