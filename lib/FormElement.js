/**
 * @file Basic Form Element
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import _ from 'lodash';

import { Component, PropTypes } from 'react-native';

/**
 * Basic Form Element
 *
 * @class FormElement
 */
class FormElement extends Component {

    /**
     * @constructor
     *
     * @param {Object} props properties
     * @param {string} props.id form element's id, setting id will set props.ref with the same value
     * @param {Object=} props.style style
     * @param {string=} props.type type of the current form element, will try to set styles[type]
     * @param {boolean=} props.disabled is disabled
     * @param {boolean=} props.readonly is readonly
     * @param {?Object} context context
     */
    constructor(props, context) {

        if (props.id) {
            props.ref = props.id;
        }

        super(props, context);

        /**
         * @property {boolean} isFormElement if it is a form element
         */
        this.isFormElement = true;

        this.state = {
            disabled: !!props.disabled,
            readonly: !!props.readonly
        };

        this.getValue = () => { return this.state.value; };
    }

    getStyles(styles) {
        var result = styles.reset().adjust(this.props.type);
        if (this.props.readonly) {
            result.adjust('readonly');
        }
        if (this.props.disabled) {
            result.adjust('disabled')
        }
        return result.value;
    }
}

FormElement.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
};
FormElement.defaultProps = {};

/**
 * a simple method to assign props
 */
FormElement.assignPropTypes = function (...props) {
    return Object.assign({}, FormElement.propTypes, ...props);
};

// missing `module.exports = exports['default'];` with babel6
// export default FormElement
module.exports = FormElement;
