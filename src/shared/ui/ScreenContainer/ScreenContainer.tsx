import { memo, PropsWithChildren } from 'react';

import { LinearGradient } from '../LinearGradient';
import { SafeAreaView } from '../SafeAreaView';
import { ScrollView } from '../ScrollView';

type Props = PropsWithChildren & {
    noScroll?: boolean;
    noPadding?: boolean;
};
const gradientColors = ['#fff', '#F7F5FF'];
const gradientStart = { x: 0, y: 0 };
const gradientEnd = { x: 0, y: 1 };

export const ScreenContainer = memo(({ children, noScroll, noPadding }: Props) => (
    <SafeAreaView flex={1}>
        <LinearGradient
            flex={1}
            start={gradientStart}
            end={gradientEnd}
            colors={gradientColors}
            paddingHorizontal={noPadding ? 0 : 24}
        >
            {noScroll ? children : <ScrollView>{children}</ScrollView>}
        </LinearGradient>
    </SafeAreaView>
));
