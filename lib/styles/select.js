/**
 * @file select styles
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
        selected: {
            flex: 1,
            alignSelf: 'center',
            fontSize: 15,
            textAlign: 'right',
            fontStyle: 'italic',
            color: '#999999',
            marginRight: 15,
        },
        arrow: {
            alignSelf: 'center',
            justifyContent: 'center',
            transform: [
                { scale: 1.3 }
            ],
            paddingTop: 8
        },
        arrowText: {
            color: '#333333'
        },
        selectionContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
        },
        selection: {
            flex: 8,
            transform: [
                { translateX: -15 },
                { translateY: -20 },
                { scale: 0.8 },
            ],
        },
        selectionControl: {
            flex: 1,
            alignSelf: 'stretch',
            alignItems: 'stretch',
            flexDirection: 'column',
        },
        selectionControlBtn: {
            borderRadius: 0,
            flex: 1,
            borderColor: '#E8E8E8',
            borderTopWidth: 0,
            borderBottomWidth: 0
        }
    },

    flat: {
        labelContainer: {
            padding: 1
        },
    },

    disabled: {
        text: {
            color: '#E8E8E8'
        },
    },
});

module.exports = styles;
