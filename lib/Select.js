/**
 * @file Select
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    Animated,
    TouchableOpacity,
    View,
    Text,
    Image,
    PickerIOS,
} = React;

var kCore = require('k-react-native-core');
var FormElement = require('./FormElement');
var Button = require('./Button');
var Option = require('./Option');
var OptionGroup = require('./OptionGroup');

var styles = require('./styles/select');

/**
 * Select
 * @class Select
 * @extends FormElement
 * @requires FormElement
 */
class Select extends FormElement {

    /**
     * @constructor
     *
     * @param {Object} props properties
     *
     * @param {string} props.id element's id, setting id will set props.ref with the same value
     * @param {?Object} props.style style
     * @param {string=} props.type type of the current form element, will try to set styles[type]
     *     values can be one of: ['normal', 'scroll', 'flat']
     * @param {boolean=} props.disabled is disabled
     * @param {boolean=} props.readonly is readonly
     *
     * @param {?string} label label for select
     * @param {?(number|string|Array.<number|string>)} selected selected value
     *     if props.multiple is true, then type Array can be used
     *     watch out Float Number < 1, the comparation would have problem
     * @param {?(string|Component)} props.icon icon for button, you can use either unicode characters or a Component
     * @param {?(Object} props.labelStyle styles for label
     * @param {boolean=} props.multiple multiple select, default is false
     *
     * @param {?Object} context context
     */
    constructor(props, context) {
        super(props, context);
        Object.assign(this.state, {
            selected: props.selected,
            selectionHeight: new Animated.Value(0),
            selectionOpacity: new Animated.Value(0),
            isSelectionShown: false
        });
    }

    render() {
        return this.getFlatView();
    }

    getDefaultView() {
        var selectStyles = this.getStyles(styles);
        var dataSource = this.getDataSourceByChildren();
        return (
            <View style={selectStyles.container}>
                <TouchableOpacity onPress={this.switchSelection.bind(this)} style={[...selectStyles.labelContainer, this.props.style]}>
                    <Text style={[...selectStyles.label, this.props.labelStyle]}>
                        {this.props.label}
                    </Text>
                    <Text style={selectStyles.selected}>
                        {_.trunc(this.state.selected, 19)}
                    </Text>
                    <View style={selectStyles.arrow}><Text style={selectStyles.arrowText}>﹀</Text></View>
                </TouchableOpacity>
                <Animated.View style={[
                    ...selectStyles.selectionContainer,
                    {
                        height: this.state.selectionHeight,
                        opacity: this.state.selectionOpacity,
                    }
                ]}>
                    <PickerIOS
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        style={selectStyles.selection}>
                        {
                            dataSource.map((item) => (
                                <PickerIOS.Item {...item} key={kCore.util.uid()} />
                            ))
                        }
                    </PickerIOS>
                    <View style={selectStyles.selectionControl}>
                        <Button label="✔" style={selectStyles.selectionControlBtn} onPress={this.switchSelection.bind(this)}/>
                    </View>
                </Animated.View>
            </View>
        );
    }

    getFlatView() {
        var selectStyles = this.getStyles(styles);
        var dataSource = this.getDataSourceByChildren();
        return (
            <Animated.View style={selectStyles.container}>
                <View style={[...selectStyles.labelContainer, this.props.style]}>
                    <Text style={[...selectStyles.label, this.props.labelStyle]}>
                        {this.props.label}
                    </Text>
                    <Text style={selectStyles.selected}>
                        {_.trunc(_.isArray(this.state.selected) ? this.state.selected.join(', ') : this.state.selected, 19)}
                    </Text>
                </View>
                <View>
                    {
                        dataSource.map((item, index) => {
                            if (item instanceof Array) {
                                return (
                                    <OptionGroup key={index + '-' + kCore.util.uid()}>
                                        {
                                            item.map((child) => (
                                                <Option {...child}
                                                    onPress={this.onValueChange.bind(this)}
                                                    selected={
                                                        this.props.multiple && _.isArray(this.state.selected)
                                                            ? (_.indexOf(this.state.selected, child.value) > -1)
                                                            : (child.value === this.state.selected)
                                                    } />
                                            ))
                                        }
                                    </OptionGroup>
                                );
                            }
                            return (
                                <Option {...item}
                                    onPress={this.onValueChange.bind(this)}
                                    selected={
                                        this.props.multiple && _.isArray(this.state.selected)
                                            ? (_.indexOf(this.state.selected, item.value) > -1)
                                            : (item.value === this.state.selected)
                                    } />
                            );
                        })
                    }
                </View>
            </Animated.View>
        );
    }

    onValueChange(selectedValue) {
        var selected = this.state.selected;
        if (this.props.multiple && _.isArray(selected)) {
            var index = _.indexOf(selected, selectedValue);
            if (index > -1) {
                selected.splice(index, 1);
            }
            else {
                selected.push(selectedValue);
            }
        }
        else {
            selected = selectedValue;
        }
        this.setState({selected});
        this.props.onValueChange && this.props.onValueChange(selectedValue);
    }

    getDataSourceByChildren() {
        var children = this.props.children || [];

        if (!_.isArray(children)) {
            children = [children];
        }

        var dataSource = _.compact(children.map((item, index) => {
            if (item.type.name === 'Option') {
                var value = item.props.value == undefined ? index : item.props.value;
                return {
                    key: item.props.key || kCore.util.uid(),
                    value: value,
                    label: item.props.label || value.toString(),
                    icon: item.props.icon || this.props.icon,
                    type: item.props.type,
                    iconStyle: item.props.iconStyle,
                    labelStyle: item.props.labelStyle,
                };
            }
            if (item.type.name === 'OptionGroup') {
                return _.compact(item.props.children.map((child, childIndex) => {
                    if (child.type.name === 'Option') {
                        var value = child.props.value == undefined ? index + '-' + childIndex : child.props.value;
                        return {
                            key: child.props.key || kCore.util.uid(),
                            value: value,
                            label: child.props.label || value.toString(),
                            icon: child.props.icon || this.props.icon,
                            type: child.props.type,
                            iconStyle: child.props.iconStyle,
                            labelStyle: child.props.labelStyle,
                        }
                    }
                }));
            }
        }));

        if (this.props.type !== 'flat') {
            dataSource.unshift({
                key: kCore.util.uid(),
                value: null,
                label: 'please choose'
            });
        }

        return dataSource;
    }

    switchSelection() {

        if (this.state.disabled || this.state.readonly) {
            return;
        }

        this.setState({
            isSelectionShown: !this.state.isSelectionShown
        });
        Animated.parallel([
            Animated.spring(
                this.state.selectionHeight,
                {
                    toValue: this.state.isSelectionShown ? 0 : 170
                }
            ),
            Animated.spring(
                this.state.selectionOpacity,
                {
                    toValue: this.state.isSelectionShown ? 0 : 1
                }
            )
        ]).start();
    }
}

Select.propTypes = FormElement.assignPropTypes({
    label: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    labelStyle: React.PropTypes.object,
    iconStyle: React.PropTypes.object,
    selected: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.array]),
    multiple: React.PropTypes.bool
});
Select.defaultProps = {
    multiple: false
};

module.exports = Select;