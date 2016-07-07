/**
 * @file TextArea
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    Animated,
    View,
    Text,
} = React;

var FormElement = require('./FormElement');

var styles = require('./styles/textArea');

/**
 * TextArea
 * @class TextArea
 * @extends FormElement
 * @requires FormElement
 */
class TextArea extends FormElement {

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
     * @param {string} props.label label text
     * @param {string} props.value value of the TextArea
     * @param {boolean=} props.autoFocus If true, focuses the input on componentDidMount. The default value is false.
     * @param {string=} placeholder The string that will be rendered before text input has been entered
     * @param {Object=} inputOption text input's options, check https://facebook.github.io/react-native/docs/textArea.html#content
     * @param {?(Object} props.labelStyle styles for label
     * @param {?(Object} props.inputStyle styles for input
     *
     * @param {Function=} onBlur Callback that is called when the text input is blurred
     * @param {Function=} onChange Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     * @param {Function=} onEndEditing Callback that is called when text input ends.
     * @param {Function=} onFocus Callback that is called when the text input is focused
     * @param {Function=} onSubmitEditing Callback that is called when the text input's submit button is pressed.
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
        Object.assign(this.state, {
            value: props.value
        });
    }
    render() {
        var areaStyles = this.getStyles(styles);
        var inputOption = _.chain(this.props).pick([
            'autoFocus', 'placeholder',
            'onBlur', 'onChange', 'onEndEditing', 'onFocus', 'onSubmitEditing'
        ]).defaults(this.props.inputOption).value();
        return (
            <Animated.View style={areaStyles.container}>
                <Animated.View style={areaStyles.textContainer}>
                    <Text style={[areaStyles.text, this.props.labelStyle]}>{this.props.label}</Text>
                </Animated.View>
                <React.TextInput
                    {...inputOption}
                    style={[areaStyles.input, this.props.inputStyle]}
                    value={this.state.value}
                    editable={!(this.props.disabled || this.props.readonly)}
                    multiline={true}/>
            </Animated.View>
        );
    }
}

TextArea.propTypes = FormElement.assignPropTypes({});
TextArea.defaultProps = {};

module.exports = TextArea;