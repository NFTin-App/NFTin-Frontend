import { PropsWithChildren, useCallback, useEffect } from 'react';
import Animated, {
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '@shared/types';
import {
    Button,
    ChatIcon,
    FlashBoltIcon,
    HeartIcon,
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    View,
} from '@shared/ui';

import background from './images/background.png';
import logo from './images/logo.png';
import nftCard from './images/nft_card.png';
import rocket from './images/rocket.png';
import star from './images/star.png';

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export const Start = () => {
    const { navigate } = useNavigation<ProfileScreenNavigationProp>();

    const nftCardAnimationController = useSharedValue(0);
    const rocketAnimationController = useSharedValue(0);
    const textAnimationController = useSharedValue(0);
    const starsAnimationController = useSharedValue(0);
    const button1AnimationController = useSharedValue(0);
    const button2AnimationController = useSharedValue(0);
    const button3AnimationController = useSharedValue(0);
    const actionButtonAnimationController = useSharedValue(0);

    useEffect(() => {
        nftCardAnimationController.value = withDelay(
            100,
            withTiming(1, {
                duration: 200,
                easing: Easing.out(Easing.ease),
            })
        );
        rocketAnimationController.value = withDelay(
            100,
            withTiming(1, {
                duration: 500,
                easing: Easing.out(Easing.ease),
            })
        );
        starsAnimationController.value = withDelay(
            600,
            withTiming(1, {
                duration: 800,
                easing: Easing.bounce,
            })
        );
        button1AnimationController.value = withDelay(
            2400,
            withTiming(1, {
                duration: 600,
            })
        );
        button2AnimationController.value = withDelay(
            2800,
            withTiming(1, {
                duration: 600,
            })
        );
        button3AnimationController.value = withDelay(
            3200,
            withTiming(1, {
                duration: 600,
            })
        );
        textAnimationController.value = withDelay(
            1100,
            withTiming(1, {
                duration: 1600,
                easing: Easing.in(Easing.ease),
            })
        );
        actionButtonAnimationController.value = withDelay(
            3800,
            withTiming(1, {
                duration: 400,
                easing: Easing.in(Easing.ease),
            })
        );
    }, [
        rocketAnimationController,
        nftCardAnimationController,
        textAnimationController,
        starsAnimationController,
        button1AnimationController,
        button2AnimationController,
        button3AnimationController,
        actionButtonAnimationController,
    ]);

    const handleButtonPress = useCallback(() => navigate('ConnectWallet'), [navigate]);

    const rocketStyle = useAnimatedStyle(() => {
        const rocketY = interpolate(rocketAnimationController.value, [0, 1], [1200, 0]);
        return {
            transform: [
                {
                    translateY: rocketY,
                },
            ],
        };
    });

    const nftCardStyle = useAnimatedStyle(() => {
        const nftX = interpolate(nftCardAnimationController.value, [0, 1], [-400, 0]);
        return {
            transform: [
                {
                    translateX: nftX,
                },
            ],
        };
    });

    const textStyle = useAnimatedStyle(() => ({
        opacity: textAnimationController.value,
    }));

    const starStyle = useAnimatedStyle(() => ({
        opacity: starsAnimationController.value,
    }));

    const button1Style = useAnimatedStyle(() => ({
        opacity: button1AnimationController.value,
    }));

    const button2Style = useAnimatedStyle(() => ({
        opacity: button2AnimationController.value,
    }));

    const button3Style = useAnimatedStyle(() => ({
        opacity: button3AnimationController.value,
    }));

    const actionButtonStyle = useAnimatedStyle(() => ({
        opacity: actionButtonAnimationController.value,
    }));

    return (
        <SafeAreaView flex={1}>
            <ImageBackground flex={1} source={background} resizeMode='stretch'>
                <View flex={1} paddingHorizontal={24} paddingBottom={40}>
                    <View alignItems='center' position='absolute' top={42} left={0} right={0}>
                        <View>
                            <AnimatedImage
                                width={231}
                                height={276}
                                source={nftCard}
                                style={nftCardStyle}
                            />
                            <AnimatedImage
                                width={83}
                                height={214}
                                source={rocket}
                                position='absolute'
                                bottom={4}
                                style={rocketStyle}
                                right={74}
                            />
                            <AnimatedImage
                                source={star}
                                width={28}
                                height={28}
                                position='absolute'
                                top={0}
                                right={4}
                                style={starStyle}
                            />
                            <AnimatedImage
                                source={star}
                                width={28}
                                height={28}
                                position='absolute'
                                left={80}
                                bottom={10}
                                style={starStyle}
                            />
                            <AnimatedView
                                position='absolute'
                                top={110}
                                left={190}
                                style={button1Style}
                            >
                                <IconCard>
                                    <HeartIcon
                                        width={24}
                                        height={24}
                                        color='accentGradient'
                                        outline={false}
                                    />
                                </IconCard>
                            </AnimatedView>

                            <AnimatedView
                                position='absolute'
                                bottom={35}
                                left={-16}
                                style={button2Style}
                            >
                                <IconCard>
                                    <FlashBoltIcon width={16} height={32} color='accentGradient' />
                                </IconCard>
                            </AnimatedView>

                            <AnimatedView
                                position='absolute'
                                top={-24}
                                left={36}
                                style={button3Style}
                            >
                                <IconCard>
                                    <ChatIcon
                                        outline={false}
                                        width={24}
                                        height={24}
                                        color='accentGradient'
                                    />
                                </IconCard>
                            </AnimatedView>
                        </View>
                    </View>
                    <View flex={1} justifyContent='flex-end'>
                        <AnimatedView alignItems='center' marginBottom={48} style={textStyle}>
                            <Image width={150} height={40} source={logo} marginBottom={12} />
                            <Text
                                width={150}
                                numberOfLines={2}
                                fontSize={14}
                                textAlign='center'
                                color='gray100'
                            >
                                Meet, evaluate and earn on your nft collection
                            </Text>
                        </AnimatedView>
                        <AnimatedView style={actionButtonStyle}>
                            <Button title="Let's begin" onPress={handleButtonPress} />
                        </AnimatedView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const IconCard = ({ children }: PropsWithChildren) => (
    <View
        width={64}
        height={64}
        backgroundColor='white'
        alignItems='center'
        justifyContent='center'
        borderRadius={12}
    >
        {children}
    </View>
);
