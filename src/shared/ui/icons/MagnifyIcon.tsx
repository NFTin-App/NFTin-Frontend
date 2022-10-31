import React, { memo } from 'react';
import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const MagnifyIcon = memo((props: Props) => {
    return (
        <Icon {...props} viewBox='0 0 23 22'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.6069 9.95346C18.6069 14.4565 14.9565 18.1069 10.4535 18.1069C5.95043 18.1069 2.3 14.4565 2.3 9.95346C2.3 5.45043 5.95043 1.8 10.4535 1.8C14.9565 1.8 18.6069 5.45043 18.6069 9.95346ZM16.7879 17.6314C15.0669 19.0529 12.8599 19.9069 10.4535 19.9069C4.95632 19.9069 0.5 15.4506 0.5 9.95346C0.5 4.45632 4.95632 0 10.4535 0C15.9506 0 20.4069 4.45632 20.4069 9.95346C20.4069 12.3599 19.5529 14.5669 18.1314 16.2879L22.1264 20.2829C22.4974 20.6539 22.4974 21.2554 22.1264 21.6264C21.7554 21.9974 21.1539 21.9974 20.7829 21.6264L16.7879 17.6314Z'
            />
        </Icon>
    );
});
