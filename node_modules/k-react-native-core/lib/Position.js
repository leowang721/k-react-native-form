/**
 * @file a util Class of Position
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var errorHandler = require('./errorHandler');
var React = require('react-native');
var RCTUIManager = React.NativeModules.UIManager;

/**
 * a util Class of Position
 * @class Position
 */
class Position {

    /**
     * Position's constructor
     *
     * @constructor
     *
     * @param {Objct} options options
     * @param {number} options.x value of x axis relative to it's container
     * @param {number} options.y value of y axis relative to it's container
     * @param {number=} options.screenX value of x axis of Screen
     * @param {number=} options.screenY value of y axis of Screen
     * @param {number=} options.width width, point don't need this
     * @param {number=} options.height height, point don't need this
     *
     */
    constructor(options) {
        options = options || {};
        this.x = options.x;
        this.y = options.y;
        this.screenX = options.screenX || this.x;
        this.screenY = options.screenY || this.y;
        this.width = options.width || 0;
        this.height = options.height || 0;
    }
}

/**
 * get a ReactComponent item's position on screen
 *
 * @method
 * @param {ReactComponent} item a ReactComponent item
 *
 * @return {Promise} promise with position
 */
Position.get = (item) => {
    return new Promise(function (resolve, reject) {
        RCTUIManager.measure(React.findNodeHandle(item), (x, y, width, height, pageX, pageY) => {

            /**
             * x,y is relative pos to it's container
             */
            resolve(new Position({x, y, width, height, screenX: pageX, screenY: pageY}));
        });
    }).catch((e) => {
        errorHandler(e);
        return Promise.reject(e);
    });
};

/**
 * calculate two points's distance
 *
 * @method
 * @param {Position} from start point of Screen
 * @param {Position} to end point of Screen
 *
 * @return {number} distance
 */
Position.distance = (from, to) => {
    var dx = from.screenX - to.screenX;
    var dy = from.screenY - to.screenY;
    return Math.sqrt(dx * dx + dy * dy);
};


/**
 * calculate two points's line and vertical line's degree, clockwise rotation.
 *
 * @method
 * @param {Position} from start point of Screen
 * @param {Position} to end point of Screen
 *
 * @return {[type]} [description]
 */
Position.degree = (from, to) => {
    var rx = to.screenX - from.screenX;
    var ry = to.screenY - from.screenY;

    if (rx === 0 && ry === 0) {
        return 0;
    }

    var radius = Math.sqrt(rx * rx + ry * ry);

    // vertical line's end point
    var base = {
        screenX: from.screenX,
        screenY: from.screenY + radius,
    };

    var dx = to.screenX - base.screenX;
    var dy = to.screenY - base.screenY;

    if (dx === 0 && dy === 0) {
        return 0;
    }

    var d = Math.sqrt(dx * dx + dy * dy) / 2;
    var helper = (dx > 0 ? 1 : -1) * (dy > 0 ? 1 : -1);

    var result = helper * Math.round(2 * Math.asin(d/radius) / Math.PI * 180);
    return result < 0 ? (360 + result) : result;
};

module.exports = Position;