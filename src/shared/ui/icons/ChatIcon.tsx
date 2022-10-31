import React, { memo } from 'react';
import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const ChatIcon = memo((props: Props) => {
    return (
        <Icon outline {...props} viewBox='0 0 19 19'>
            <Path d='M0.0095005 1.9C0.0095005 0.855 0.855 0 1.9 0H17.1C18.145 0 19 0.855 19 1.9V13.3C19 14.345 18.145 15.2 17.1 15.2H3.8L0 19L0.0095005 1.9Z' />
        </Icon>
    );
});
