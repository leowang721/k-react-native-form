/**
 * @file a simple eventBus
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var events = require('events');

class EventBus extends events.EventEmitter {
    constructor(props) {
        super(props);
    }
}

var eventBus = new EventBus();
eventBus.EventBus = EventBus;

module.exports = eventBus;
