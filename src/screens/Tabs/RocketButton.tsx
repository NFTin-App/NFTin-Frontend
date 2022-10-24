import { memo } from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { DropShadow, RocketIcon, TouchableWithoutFeedback, useTheme, View } from '@shared/ui';

const GRADIENT_NAME = 'background-gradient';

type Props = React.ComponentProps<typeof TouchableWithoutFeedback>;

export const RocketButton = memo((props: Props) => {
    const { theme } = useTheme();

    const backgroundColor = `url(#${GRADIENT_NAME})`;

    return (
        <TouchableWithoutFeedback {...props}>
            <DropShadow
                shadowOffset={{ width: 0, height: 4 }}
                shadowOpacity={0.25}
                shadowRadius={8}
                shadowColor={theme.palette.primary200}
            >
                <View justifyContent='center' alignItems='center'>
                    <Svg viewBox='0 0 95 62' width={95} height={62}>
                        <Defs>
                            <LinearGradient id={GRADIENT_NAME} x1='0' y1='0' x2='100' y2='100'>
                                <Stop stopColor={theme.palette.primary100} offset='0%' />
                                <Stop stopColor={theme.palette.accent100} offset='45%' />
                                <Stop stopColor={theme.palette.accent200} offset='100%' />
                            </LinearGradient>
                        </Defs>
                        <Rect width={95} height={62} rx={31} fill={backgroundColor} />
                    </Svg>
                    <View
                        position='absolute'
                        top={0}
                        right={0}
                        left={0}
                        bottom={0}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <RocketIcon color={theme.palette.white} width={36} height={41} />
                    </View>
                </View>
            </DropShadow>
        </TouchableWithoutFeedback>
    );
});
