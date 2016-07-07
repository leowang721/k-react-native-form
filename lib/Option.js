/**
 * @file Option
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    PickerIOS,
    View,
    Text,
    TouchableOpacity,
} = React;

var FormElement = require('./FormElement');

var ICON = {
    checkbox: '□▣',
    radio: '○◉'
};

var styles = require('./styles/option');

/**
 * Option
 * when setting props.value, watch out Float Number < 1, the comparation would have problem
 * @class Option
 * @extends FormElement
 * @requires FormElement
 */
class Option extends FormElement {

    /**
     * @constructor
     *
     * @param {Object} props properties
     *
     * @param {string} props.id element's id, setting id will set props.ref with the same value
     * @param {?Object} props.style style
     * @param {string=} props.type type of the current form element, will try to set styles[type]
     *
     * @param {string|number} value value, watch out Float Number < 1, the comparation would have problem
     * @param {?string} label label for this option
     * @param {?(Object} props.labelStyle styles for label
     * @param {?(string|Component)} props.icon icon for option, you can use either unicode characters or a Component
     * @param {?(Object} props.iconStyle styles for icon
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
    }
    render() {
        var optionStyles = this.getStyles(styles);

        var icon;
        var selectedIcon;

        var iconProp = this.props.icon || ICON[this.props.type];
        if (iconProp) {
            if (typeof iconProp === 'string') {
                if (iconProp.length === 1) {
                    icon = selectedIcon = (<Text style={[optionStyles.icon, this.props.iconStyle]}>{iconProp}</Text>);
                }
                else {
                    icon = (<Text style={[optionStyles.icon, this.props.iconStyle]}>{iconProp[0]}</Text>);
                    selectedIcon = (<Text style={[optionStyles.icon, this.props.iconStyle]}>{iconProp[1]}</Text>);
                }
            }
            else if (iconProp.isReactElement) {
                icon = selectedIcon = (<View style={[optionStyles.icon, this.props.iconStyle]}>{iconProp}</View>);
            }
            else if (_.isArray(iconProp)) {
                icon = (<View style={[optionStyles.icon, this.props.iconStyle]}>{iconProp[0]}</View>);
                selectedIcon = (<View style={[optionStyles.icon, this.props.iconStyle]}>{iconProp[1]}</View>);
            }
        }

        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} style={[
                ...optionStyles.container,
                this.props.style,
                this.props.selected ? optionStyles.selected : [],
            ]} {..._.omit(this.props, ['children', 'style', 'onPress'])}>
                <View style={optionStyles.labelContainer}>
                    {this.props.selected ? selectedIcon : icon}
                    <Text style={[...optionStyles.label, this.props.labelStyle]}>
                        {this.props.label || this.props.value}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    onPress() {
        if (this.props.onPress) {
            this.props.onPress(this.props.value);
        }
    }
}

Option.propTypes = FormElement.assignPropTypes(PickerIOS.propTypes, {
    label: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    labelStyle: React.PropTypes.object,
    iconStyle: React.PropTypes.object,
    onPress: React.PropTypes.func,
});
Option.defaultProps = {};

module.exports = Option;