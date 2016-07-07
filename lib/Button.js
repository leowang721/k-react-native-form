/**
 * @file Button, only for text mode
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import _ from 'lodash';

import React, {
    Text,
    TouchableOpacity,
    View,
    PropTypes
} from 'react-native';

import FormElement from './FormElement';

import skinStyles from './styles/button';

/**
 * Button, only for text mode
 * a simple usage:
 *
 *     @example
 *     <Button value="Click Me" />
 *
 * @class Button
 * @extends FormElement
 * @requires FormElement
 */
class Button extends FormElement {

    /**
     * @constructor
     *
     * @param {Object} props properties
     *
     * @param {string} props.id form element's id, setting id will set props.ref with the same value
     * @param {Object=} props.style style
     * @param {string=} props.type type of the current form element, will try to set styles[type]
     *     value should be one of ['normal', 'submit', 'reset', 'icon']
     * @param {boolean=} props.disabled is disabled
     * @param {boolean=} props.readonly is readonly
     *
     * @param {?string} props.label button text
     * @param {?(string|Component)} props.icon icon for button, you can use either unicode characters or a Component
     * @param {?(Object} props.labelStyle styles for label
     * @param {?(Object} props.iconStyle styles for icon
     *
     * @param {?Function} props.onPress press handler
     * @param {?Function} props.onPressIn press in handler
     * @param {?Function} props.onPressOut press out handler
     * @param {?Function} props.onLongPress long press handler
     *
     * @param {number=} props.delayLongPress Delay in ms, from onPressIn, before onLongPress is called.
     * @param {number=} props.delayPressIn Delay in ms, from the start of the touch, before onPressIn is called.
     * @param {number=} props.delayPressOut Delay in ms, from the release of the touch, before onPressOut is called.
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
        this.initTouchableProps();
    }

    initTouchableProps(props) {
        props = props || this.props;
        this.touchableProps = (this.state.disabled || this.state.readonly) ? {} : _.pick(this.props, [
            'onPress', 'onPressIn', 'onPressOut', 'onLongPress',
            'delayPressIn', 'delayPressOut', 'delayLongPress'
        ]);
    }

    render() {
        var buttonStyles = this.getStyles(skinStyles);

        var icon;
        if (this.props.icon) {
            if (typeof this.props.icon) {
                icon = (<Text style={[buttonStyles.icon, this.props.iconStyle]}>{this.props.icon}</Text>);
            }
            else if (this.props.icon.isReactElement) {
                icon = (<View style={[buttonStyles.icon, this.props.iconStyle]}>{this.props.icon}</View>)
            }
        }

        var label;
        if (this.props.type !== 'icon') {
            label = (
                <View style={buttonStyles.textContainer}>
                    <Text style={[...buttonStyles.text, this.props.labelStyle]}>{this.getLabel()}</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity style={[
                ...buttonStyles.container,
                this.props.style
            ]} {...this.touchableProps}>
                {icon}
                {label}
            </TouchableOpacity>
        );
    }

    getLabel() {
        return this.props.label || this.getLabelByType();
    }

    getLabelByType() {
        switch (this.props.type) {
            case 'submit':
                return 'Submit';
            case 'reset':
                return 'Reset';
            default:
                return '';
        }
    }
}

Button.propTypes = FormElement.assignPropTypes(TouchableOpacity.propTypes, {
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    labelStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onLongPress: PropTypes.func,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    delayLongPress: PropTypes.number,
});
Button.defaultProps = {};

// missing `module.exports = exports['default'];` with babel6
// export default Button
module.exports = Button;
