import 'react-native-get-random-values';
import '@ethersproject/shims';

if (typeof BigInt === 'undefined') {
    global.BigInt = require('big-integer');
}

if (typeof Buffer === 'undefined') {
    global.Buffer = require('buffer').Buffer;
}

global.btoa = global.btoa || require('base-64').encode;
global.atob = global.atob || require('base-64').decode;

process.version = 'v9.40';
process.browser = false;
