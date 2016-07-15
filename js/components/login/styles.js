
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#453F41'
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent'
    },
    bg: {
        flex: 1,
        marginTop: deviceHeight/1.75,
        backgroundColor: '#453F41',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0
    },
    input: {
        marginBottom: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center'
    }
});
