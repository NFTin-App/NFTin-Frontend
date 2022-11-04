import React from 'react';
import { LogBox } from 'react-native';

import { Routing } from '@screens/routes';

import { withProviders } from './providers';

const App = () => {
    return <Routing />;
};

export default withProviders(App);
