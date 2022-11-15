import { Children, memo, useCallback, useMemo, useRef, useState } from 'react';
import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView as RNScrollView,
    useWindowDimensions,
} from 'react-native';

import { DropShadow, OutlineButton, ScrollView, View } from '@shared/ui';
import { DotIcon } from '@shared/ui/icons/DotIcon';

interface Props {
    children: React.ReactNode;
    onFinish?: () => void;
}

const SLIDE_HEIGHT = 393;

export const OnboardingSlider = memo(({ children, onFinish }: Props) => {
    const [step, setStep] = useState(0);
    const { width } = useWindowDimensions();
    const scroll = useRef<RNScrollView | null>(null);
    const slidesCount = Children.count(children);
    const slides = useMemo(
        () =>
            Children.map(children, (child) => {
                return (
                    <View
                        flexDirection='row'
                        width={width}
                        height={SLIDE_HEIGHT + 40}
                        justifyContent='center'
                        alignItems='center'
                        paddingHorizontal={24}
                    >
                        <DropShadow
                            shadowOffset={{ width: 0, height: 4 }}
                            shadowOpacity={0.12}
                            shadowRadius={12}
                            shadowColor='primary200'
                        >
                            <View
                                borderRadius={18}
                                height={SLIDE_HEIGHT}
                                paddingHorizontal={36}
                                pt={41}
                                pb={36}
                                backgroundColor='white'
                            >
                                {child}
                            </View>
                        </DropShadow>
                    </View>
                );
            }),
        [children, width]
    );

    const handleNext = useCallback(() => {
        if (step < slidesCount - 1) {
            const nextStep = step + 1;
            scroll.current?.scrollTo({
                x: nextStep * width,
                animated: true,
            });
        } else {
            onFinish?.();
        }
    }, [step, slidesCount, width, onFinish]);

    const dots = [...new Array(slidesCount)].map((_, index) => (
        <DotIcon
            key={index}
            width={6}
            height={6}
            bgColor={step === index ? 'primary100' : 'gray200'}
            marginHorizontal={6}
            borderRadius={6}
        />
    ));

    const handleScroll = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const offset = event.nativeEvent.contentOffset.x;
            const scrolledToStep = Math.floor(Math.floor(offset) / Math.floor(width));
            setStep(scrolledToStep);
        },
        [setStep, width]
    );

    return (
        <View flex={1} justifyContent='space-between'>
            <View>
                <ScrollView
                    ref={scroll}
                    horizontal
                    width={width}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={200} // ⚠️ doesn't work on Android
                    decelerationRate='fast'
                    pagingEnabled
                    onScroll={handleScroll}
                >
                    {slides}
                </ScrollView>
                <View flexDirection='row' justifyContent='center' alignItems='center'>
                    {dots}
                </View>
            </View>
            <View paddingHorizontal={24} mb={40}>
                <OutlineButton title='Next' onPress={handleNext} />
            </View>
        </View>
    );
});
