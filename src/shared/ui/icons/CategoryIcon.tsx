import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const CategoryIcon = (props: Props) => (
    <Icon width={20} height={20} {...props}>
        <Path
            d='M4.167 8.334h1.666c1.667 0 2.5-.834 2.5-2.5V4.167c0-1.667-.833-2.5-2.5-2.5H4.167c-1.667 0-2.5.833-2.5 2.5v1.667c0 1.666.833 2.5 2.5 2.5ZM14.167 8.334h1.666c1.667 0 2.5-.834 2.5-2.5V4.167c0-1.667-.833-2.5-2.5-2.5h-1.666c-1.667 0-2.5.833-2.5 2.5v1.667c0 1.666.833 2.5 2.5 2.5ZM14.167 18.334h1.666c1.667 0 2.5-.834 2.5-2.5v-1.667c0-1.667-.833-2.5-2.5-2.5h-1.666c-1.667 0-2.5.833-2.5 2.5v1.667c0 1.666.833 2.5 2.5 2.5ZM4.167 18.334h1.666c1.667 0 2.5-.834 2.5-2.5v-1.667c0-1.667-.833-2.5-2.5-2.5H4.167c-1.667 0-2.5.833-2.5 2.5v1.667c0 1.666.833 2.5 2.5 2.5Z'
            stroke='#8067EB'
            strokeWidth={1.8}
            strokeMiterlimit={10}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Icon>
);
