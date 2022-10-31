import React from 'react';
import { LogBox } from 'react-native';

import { Routing } from '@screens/Routing';

import { withProviders } from './providers';

LogBox.ignoreAllLogs(true);

const App = () => {
    return <Routing />;
};

export default withProviders(App);
