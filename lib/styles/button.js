/**
 * @file button styles
 * @author Leo Wang(leowang721@gmail.com)
 */

var CustomStyle = require('./CustomStyle');

var styles = new CustomStyle({
    normal: {
        container: {
            height: 36,
            borderColor: '#ABABAB',
            borderWidth: 1,
            borderRadius: 18,
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 15
        },
        textContainer: {
            alignSelf: 'center',
            marginHorizontal: 5,
        },
        text: {
            fontSize: 16,
            color: '#454545',
            alignSelf: 'center'
        },
        icon: {
            alignSelf: 'center',
            fontSize: 20,
        }
    },
    icon: {
        container: {
            width: 36,
            overflow: 'hidden',
        }
    },
    submit: {
        container: {
            backgroundColor: '#3062A2',
            borderColor: '#4173B3',
        },
        text: {
            color: '#FFFFFF'
        }
    },
    reset: {
        container: {
            backgroundColor: '#FC7EA3',
            borderColor: '#FC7EA3',
        },
        text: {
            color: 'white',
        }
    },
    disabled: {
        container: {
            backgroundColor: '#F9F9F9',
            borderColor: '#E8E8E8',
        },
        text: {
            fontSize: 18,
            color: '#E8E8E8',
        },
    },
});

module.exports = styles;
