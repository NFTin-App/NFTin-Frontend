import 'react-native-get-random-values';
import '@ethersproject/shims';
import { LogBox } from 'react-native';

if (typeof BigInt === 'undefined') {
    global.BigInt = require('big-integer');
}

if (typeof Buffer === 'undefined') {
    global.Buffer = require('buffer').Buffer;
}

LogBox.ignoreLogs([
    "The provided value 'ms-stream' is not a valid 'responseType'.",
    "The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'.",
]);

process.version = 'v9.40';
process.browser = false;
