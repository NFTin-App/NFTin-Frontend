import { useGate } from 'effector-react';

import { Text, View } from '@shared/ui';

import { pageGate } from './loadingModel';

export const Loading = () => {
    useGate(pageGate);

    return (
        <View>
            <Text color='black'>App loading</Text>
        </View>
    );
};
