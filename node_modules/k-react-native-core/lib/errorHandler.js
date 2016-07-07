/**
 * @file A simple error handler
 * Using this to support unified treatment of errors: trigger eventBus's `error` event.
 *
 * @author Leo Wang(leowang721@gmail.com)
 */
var eventBus = require('./eventBus');

function errorHandler(e) {
    eventBus.emit('error', e);
}

module.exports = errorHandler;
