import * as React from 'react';
import { Circle, Defs, Path, Stop } from 'react-native-svg';

import { G } from '../Svg/G';
import { LinearGradient } from '../Svg/LinearGradient';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const TokenIcon = (props: Props) => (
    <Icon width={22} height={22} {...props}>
        <G>
            <Circle
                cx={12.5}
                cy={12.5}
                r={8.082}
                fill='url(#b)'
                stroke='url(#c)'
                strokeWidth={1.165}
            />
            <Circle cx={12.5} cy={12.5} r={6.149} stroke='url(#d)' strokeWidth={0.312} />
            <G>
                <Circle cx={12.5} cy={12.5} r={6.305} fill='url(#f)' />
                <Circle cx={12.5} cy={12.5} r={6.305} fill='url(#g)' />
            </G>
            <Circle cx={12.5} cy={12.5} r={5.839} stroke='url(#h)' strokeWidth={0.932} />
            <G opacity={0.4}>
                <Path
                    d='M13.257 8.584h.398l-.398 3.098h1.394c.23 0 .227.141.151.292-.075.15-.02.035-.028.053-.513 1.009-1.286 2.513-2.313 4.522h-.399l.399-3.098h-1.394c-.195 0-.223-.146-.188-.225l.028-.067c1.57-3.048 2.35-4.575 2.35-4.575Z'
                    fill='url(#j)'
                />
            </G>
            <Path
                d='M12.874 8.584h.398l-.398 3.098h1.394c.231 0 .227.141.151.292-.075.15-.02.035-.027.053-.514 1.009-1.287 2.513-2.314 4.522h-.398l.398-3.098h-1.394c-.195 0-.223-.146-.187-.225l.028-.067c1.569-3.048 2.35-4.575 2.35-4.575Z'
                fill='url(#k)'
            />
            <Path
                d='M12.874 8.584h.398l-.398 3.098h1.394c.231 0 .227.141.151.292-.075.15-.02.035-.027.053-.514 1.009-1.287 2.513-2.314 4.522h-.398l.398-3.098h-1.394c-.195 0-.223-.146-.187-.225l.028-.067c1.569-3.048 2.35-4.575 2.35-4.575Z'
                fill='url(#l)'
            />
        </G>
        <Defs>
            <LinearGradient
                id='b'
                x1={12.5}
                y1={5}
                x2={12.5}
                y2={20}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#fff' />
                <Stop offset={1} stopColor='#F7F5FF' />
            </LinearGradient>
            <LinearGradient
                id='c'
                x1={10.275}
                y1={1.441}
                x2={26.018}
                y2={13.806}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='d'
                x1={10.629}
                y1={3.202}
                x2={23.865}
                y2={13.598}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='f'
                x1={12.5}
                y1={6.194}
                x2={12.5}
                y2={18.805}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#fff' />
                <Stop offset={1} stopColor='#F7F5FF' />
            </LinearGradient>
            <LinearGradient
                id='g'
                x1={10.629}
                y1={3.202}
                x2={23.865}
                y2={13.598}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='h'
                x1={10.629}
                y1={3.202}
                x2={23.865}
                y2={13.598}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='j'
                x1={13.448}
                y1={18.439}
                x2={7.593}
                y2={16.139}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='k'
                x1={13.065}
                y1={18.439}
                x2={7.21}
                y2={16.139}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8067EB' />
                <Stop offset={0.456} stopColor='#DC5D83' />
                <Stop offset={1} stopColor='#FB5184' />
                <Stop offset={1} stopColor='#F71256' />
            </LinearGradient>
            <LinearGradient
                id='l'
                x1={12.475}
                y1={16.549}
                x2={12.475}
                y2={8.584}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#fff' />
                <Stop offset={1} stopColor='#F7F5FF' />
            </LinearGradient>
        </Defs>
    </Icon>
);
