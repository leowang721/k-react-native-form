/**
 * @file OptionGroup
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
    CHECKBOX: '□▣',
    RADIO: '○◉'
};

var styles = require('./styles/optionGroup');

/**
 * OptionGroup
 * when setting props.value, watch out Float Number < 1, the comparation would have problem
 * @class OptionGroup
 * @extends FormElement
 * @requires FormElement
 */
class OptionGroup extends FormElement {

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
     * @param {?string} label label for this optionGroup
     * @param {?string} type type of the optionGroup, 'checkBox'|'radio'|undefined
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
    }
    render() {
        var groupStyles = this.getStyles(styles);

        return (
            <View style={[...groupStyles.container, this.props.style]} {..._.omit(this.props, ['children', 'style'])}>
                {this.props.children}
            </View>
        );
    }
}

OptionGroup.propTypes = FormElement.assignPropTypes(PickerIOS.propTypes);
OptionGroup.defaultProps = {};

module.exports = OptionGroup;