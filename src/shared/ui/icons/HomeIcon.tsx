import React, { memo } from 'react';
import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const HomeIcon = memo((props: Props) => {
    return (
        <Icon outline {...props} viewBox='0 0 22 22'>
            <Path
                d='M21 19.0246V11.2947C21.0001 10.7569 20.889 10.2248 20.6735 9.73086C20.458 9.23697 20.1428 8.79172 19.747 8.42239L12.374 1.53997C12.0027 1.19321 11.511 1 11 1C10.489 1 9.99734 1.19321 9.626 1.53997L2.253 8.42239C1.85722 8.79172 1.54195 9.23697 1.3265 9.73086C1.11104 10.2248 0.999942 10.7569 1 11.2947V19.0246C1 19.5485 1.21071 20.0509 1.58579 20.4214C1.96086 20.7919 2.46957 21 3 21H19C19.5304 21 20.0391 20.7919 20.4142 20.4214C20.7893 20.0509 21 19.5485 21 19.0246Z'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Icon>
    );
});
