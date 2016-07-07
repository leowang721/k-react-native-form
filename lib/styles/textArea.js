/**
 * @file textInput styles
 * @author Leo Wang(leowang721@gmail.com)
 */
var _ = require('lodash');
var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            borderWidth: 1,
            borderColor: '#E8E8E8',
            marginBottom: 10
        },
        textContainer: {
            backgroundColor: '#F9F9F9',
            flexDirection: 'row',
            height: 34,
            borderRightWidth: 1,
            borderColor: '#E8E8E8',
            justifyContent: 'flex-start',
        },
        text: {
            fontSize: 14,
            color: '#333333',
            alignSelf: 'center',
            textAlign: 'left',
            paddingHorizontal: 5,
        },
        disabledContainer: {
        },
        disabledText: {
            color: '#E8E8E8',
        },
        input: {
            marginTop: 10,
            height: 50,
            paddingHorizontal: 5,
        },
    },
});

module.exports = styles;
