import { useGate } from 'effector-react';

import { ScreenProps } from '@shared/types';
import { Text, View } from '@shared/ui';

import { pageGate } from './loadingModel';

export const Loading = ({ navigation }: ScreenProps<'Loading'>) => {
    useGate(pageGate, navigation);

    return (
        <View>
            <Text color='black'>App loading</Text>
        </View>
    );
};
