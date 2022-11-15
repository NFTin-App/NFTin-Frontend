import React, { memo } from 'react';
import { Circle } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const DotIcon = memo((props: Props) => {
    return (
        <Icon {...props} viewBox='0 0 24 24'>
            <Circle cx={12} cy={12} r={12} />
        </Icon>
    );
});
