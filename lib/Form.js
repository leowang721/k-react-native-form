/**
 * @file Form
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    Animated,
    View,
    Component,
} = React;

// var styles = require('./styles/form');
var Button = require('./Button');


var TO_CHECK_TYPE = {
    'CheckBox': 1,
    'Radio': 1,
    'Select': 1,
    'TextBox': 1
};

/**
 * Form
 * @class Form
 * @extends Component
 * @requires Component
 */
class Form extends Component {

    /**
     * @constructor
     *
     * @param {Object} props properties
     *
     * @param {string} props.id element's id, setting id will set props.ref with the same value
     * @param {?Object} props.style style
     * @param {boolean=} props.disabled is disabled
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    render() {
        return (
            <Animated.View>
                <Animated.View>
                    {this.props.children}
                </Animated.View>
                <Animated.View>
                    <Button label="提交" onPress={this.onSubmit.bind(this)} />
                </Animated.View>
            </Animated.View>
        );
    }

    onSubmit() {
        var me = this;
        var result = {};
        this.props.children.forEach((child) => {
            if (TO_CHECK_TYPE[child.type.name]) {
                // result[child.id] = child.getValue();
            }
        });

        console.log(result)
    }
}

Form.propTypes = {};
Form.defaultProps = {};

module.exports = Form;