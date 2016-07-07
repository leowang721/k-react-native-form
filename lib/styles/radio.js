/**
 * @file radio styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            borderBottomWidth: 1,
            borderColor: '#E8E8E8',
        },
        labelContainer: {
            height: 36,
            overflow: 'hidden',
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: '#E8E8E8',
            backgroundColor: '#F9F9F9',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        label: {
            flex: 1,
            alignSelf: 'center',
            fontSize: 15,
            color: '#333333'
        },
        selection: {
            flex: 1,
            alignSelf: 'center',
            fontSize: 15,
            textAlign: 'right',
            fontStyle: 'italic',
            color: '#999999',
            marginRight: 15,
        }
    },
});

module.exports = styles;
