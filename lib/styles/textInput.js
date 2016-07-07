/**
 * @file textInput styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            height: 36,
            borderWidth: 1,
            borderColor: '#E8E8E8',
            backgroundColor: '#F9F9F9',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'stretch',
            marginBottom: 10
        },
        textContainer: {
            flex: 1,
            alignSelf: 'center',
            alignItems: 'stretch',
            flexDirection: 'row',
            height: 34,
            borderRightWidth: 1,
            borderColor: '#E8E8E8',
            justifyContent: 'space-around',
        },
        text: {
            fontSize: 14,
            color: '#333333',
            alignSelf: 'center',
        },
        disabledContainer: {
        },
        disabledText: {
            color: '#E8E8E8',
        },
        input: {
            flex: 2,
            height: 34,
            fontSize: 13,
            padding: 4,
            paddingLeft: 10,
            backgroundColor: '#FFFFFF',
        }
    }
});

module.exports = styles;
