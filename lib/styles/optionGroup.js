/**
 * @file optionGroup styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'stretch',
            backgroundColor: '#F9F9F9',
            padding: 1,
        }
    }
});

module.exports = styles;
