/**
 * @file option styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            flex: 1,
            margin: 1,
            height: 36,
        },
        selected: {
            backgroundColor: '#FFFFFF',
        },
        labelContainer: {
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'center',
        },
        icon: {
            fontSize: 20,
            padding: 5
        },
        label: {
            fontSize: 15,
            color: '#333333',
            textAlign: 'center'
        },
    },
});

module.exports = styles;
