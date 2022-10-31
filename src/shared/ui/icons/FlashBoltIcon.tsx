import React, { memo } from 'react';
import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const FlashBoltIcon = memo((props: Props) => {
    return (
        <Icon {...props} viewBox='0 0 17 33'>
            <Path d='M10.2058 0.581825H11.8058L10.2058 13.0263H15.8059C16.7339 13.0263 16.7179 13.5952 16.4139 14.1996C16.1099 14.804 16.3339 14.3418 16.3019 14.4129C14.2379 18.4663 11.1338 24.5107 7.0057 32.5818H5.40567L7.0057 20.1374H1.40558C0.621562 20.1374 0.50956 19.5507 0.653563 19.2307L0.765565 18.964C7.06971 6.71516 10.2058 0.581825 10.2058 0.581825Z' />
        </Icon>
    );
});
