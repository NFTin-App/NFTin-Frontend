// eslint-disable-next-line simple-import-sort/imports
import './shim';

import { AppRegistry } from 'react-native';
import App from './src/app';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
