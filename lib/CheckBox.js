/**
 * @file CheckBox
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    Animated,
    View,
    Text,
    SwitchIOS,
} = React;

var kCore = require('k-react-native-core');
var FormElement = require('./FormElement');
var Select = require('./Select');

/**
 * CheckBox
 * @class CheckBox
 * @extends FormElement
 * @requires FormElement
 */
class CheckBox extends FormElement {

    /**
     * @constructor
     *
     * @param {Object} props properties
     *
     * @param {string} props.id element's id, setting id will set props.ref with the same value
     * @param {?Object} props.style style
     * @param {string=} props.type type of the current form element, will try to set styles[type]
     * @param {boolean=} props.disabled is disabled
     * @param {boolean=} props.readonly is readonly
     *
     * @param {?string} label label for checkBox
     * @param {?Array.<number|string>} selected selected value
     *     watch out Float Number < 1, the comparation would have problem
     * @param {?(string|Component)} props.icon icon for button, you can use either unicode characters or a Component
     * @param {?(Object} props.labelStyle styles for label
     * @param {?(Object} props.iconStyle styles for icon
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
        Object.assign(this.state, {
            selected: props.selected,
        });
    }

    render() {
        return this.getNormalView();
    }

    getNormalView() {
        return (
            <Select {..._.omit(this.props, 'children')} icon="□▣" type="flat" multiple={true}>
                {this.props.children}
            </Select>
        );
    }
}

CheckBox.propTypes = FormElement.assignPropTypes({});
CheckBox.defaultProps = {};

module.exports = CheckBox;
