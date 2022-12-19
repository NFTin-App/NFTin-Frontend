import * as React from 'react';
import { Defs, Path, Stop } from 'react-native-svg';

import { LinearGradient } from '../Svg/LinearGradient';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const LightningIcon = (props: Props) => (
    <Icon width={13} height={13} {...props}>
        <Path
            d='M4.803 0h.8l-.8 5.056h2.8c.464 0 .456.23.304.476-.152.246-.04.058-.056.087C6.819 7.266 5.267 9.72 3.203 13h-.8l.8-5.056h-2.8c-.392 0-.448-.238-.376-.368l.056-.108C3.235 2.492 4.803 0 4.803 0Z'
            fill='url(#a)'
        />
        <Defs>
            <LinearGradient
                id='a'
                x1={5.187}
                y1={16.085}
                x2={-5.819}
                y2={10.765}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
        </Defs>
    </Icon>
);
