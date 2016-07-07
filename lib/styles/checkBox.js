/**
 * @file checkBox styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
     StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    icon: {
        fontSize: 17,
        color: '#333333',
    },
    labelContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        borderWidth: 1,
        height: 36,
        borderColor: '#E8E8E8',
        backgroundColor: '#F9F9F9'
    },
    label: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 15,
        color: '#333333'
    },
});

module.exports = styles;
