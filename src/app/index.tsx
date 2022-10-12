import React from 'react';

import Routing from '@screens';

import { withProviders } from './providers';

const App = () => {
    return <Routing />;
};

export default withProviders(App);
