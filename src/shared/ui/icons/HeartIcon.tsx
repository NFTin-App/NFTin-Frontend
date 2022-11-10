import React, { memo } from 'react';
import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const HeartIcon = memo((props: Props) => {
    return (
        <Icon outline {...props} viewBox='0 0 27 24'>
            <Path
                d='M7.3737 0.363525C3.80393 0.363525 0.909058 3.2554 0.909058 6.82327C0.909058 9.7034 2.04037 16.539 13.1764 23.449C13.3758 23.5715 13.6049 23.6363 13.8384 23.6363C14.0719 23.6363 14.3009 23.5715 14.5003 23.449C25.6363 16.539 26.7676 9.7034 26.7676 6.82327C26.7676 3.2554 23.8728 0.363525 20.303 0.363525C16.7332 0.363525 13.8384 4.27852 13.8384 4.27852C13.8384 4.27852 10.9435 0.363525 7.3737 0.363525Z'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </Icon>
    );
});
