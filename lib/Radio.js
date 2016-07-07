/**
 * @file Radio
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

var styles = require('./styles/radio');

/**
 * Radio
 * @class Radio
 * @extends FormElement
 * @requires FormElement
 */
class Radio extends FormElement {

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
     * @param {?string} label label for radio
     * @param {?(number|string)} selected selected value
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
        switch (this.props.type) {
            case 'switch':
                return this.getSwitchView();
            default:
                return this.getNormalView();
        }
    }

    getNormalView() {
        return (
            <Select {..._.omit(this.props, 'children')} icon="○◉" type="flat">
                {this.props.children}
            </Select>
        );
    }

    getSwitchView() {
        var radioStyles = this.getStyles(styles);
        return (
            <View style={radioStyles.container}>
                <View style={[...radioStyles.labelContainer, this.props.style]}>
                    <Text style={[...radioStyles.label, this.props.labelStyle]}>
                        {this.props.label}
                    </Text>
                    <View style={radioStyles.selected}>
                        <SwitchIOS value={!!this.state.selected} />
                    </View>
                </View>
            </View>
        );
    }
}

Radio.propTypes = FormElement.assignPropTypes({});
Radio.defaultProps = {};

module.exports = Radio;