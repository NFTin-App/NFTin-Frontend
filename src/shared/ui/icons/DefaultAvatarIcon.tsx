import React, { memo } from 'react';
import { Defs, Path, Rect, Stop } from 'react-native-svg';
import { LinearGradient } from '../Svg/LinearGradient';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const DefaultAvatarIcon = memo((props: Props) => {
    return (
        <Icon width={107} height={107} {...props}>
            <Rect
                x={2}
                y={2}
                width={103}
                height={103}
                rx={51.5}
                fill='url(#a)'
                stroke='url(#b)'
                strokeWidth={4}
            />
            <Path
                d='M33.143 51.875h1.718C38.003 59.158 45.154 64.25 53.5 64.25s15.497-5.092 18.64-12.375h1.717c1.12 0 2.036-.928 2.036-2.063V37.438c0-1.135-.916-2.063-2.036-2.063H72.14C68.998 28.092 61.846 23 53.5 23s-15.497 5.092-18.64 12.375h-1.717c-1.12 0-2.036.928-2.036 2.063v12.374c0 1.135.916 2.063 2.036 2.063Zm5.09-11.344c0-2.849 2.735-5.156 6.106-5.156h18.322c3.371 0 6.107 2.307 6.107 5.156v3.094C68.768 50.457 63.297 56 56.554 56h-6.108c-6.743 0-12.214-5.543-12.214-12.375v-3.094Zm9.16 9.282 1.527-4.641 4.58-1.547-4.58-1.547-1.527-4.64-1.527 4.64-4.58 1.547 4.58 1.547 1.527 4.64ZM66.68 64.43c-3.804 2.488-8.32 3.945-13.181 3.945-4.86 0-9.377-1.457-13.181-3.945C31.73 65.346 25 72.63 25 81.575v1.237C25 86.228 27.735 89 31.107 89h10.179v-8.25c0-2.282 1.82-4.125 4.071-4.125h16.286c2.252 0 4.071 1.843 4.071 4.125V89h10.179C79.264 89 82 86.228 82 82.812v-1.237c0-8.946-6.73-16.23-15.319-17.145Zm-7.074 16.32c-1.12 0-2.036.928-2.036 2.063 0 1.134.916 2.062 2.036 2.062s2.036-.928 2.036-2.063c0-1.134-.916-2.062-2.036-2.062Zm-12.214 0c-1.12 0-2.036.928-2.036 2.063V89h4.072v-6.188c0-1.134-.916-2.062-2.036-2.062Z'
                fill='url(#c)'
            />
            <Defs>
                <LinearGradient
                    id='a'
                    x1={53.5}
                    y1={0}
                    x2={53.5}
                    y2={107}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop stopColor='#fff' />
                    <Stop offset={1} stopColor='#F7F5FF' />
                </LinearGradient>
                <LinearGradient
                    id='b'
                    x1={37.626}
                    y1={-25.39}
                    x2={149.932}
                    y2={62.819}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop stopColor='#8067EB' />
                    <Stop offset={0.456} stopColor='#DC5D83' />
                    <Stop offset={1} stopColor='#FB5184' />
                    <Stop offset={1} stopColor='#F71256' />
                </LinearGradient>
                <LinearGradient
                    id='c'
                    x1={45.044}
                    y1={7.339}
                    x2={111.294}
                    y2={52.278}
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
});
