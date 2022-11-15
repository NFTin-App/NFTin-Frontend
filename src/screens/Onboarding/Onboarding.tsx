import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '@shared/types';
import { GhostButton, Image, ScreenContainer, ScreenHeader, View } from '@shared/ui';

import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import { OnboardingSlide } from './OnboardingSlide';
import { OnboardingSlider } from './OnboardingSlider';

export const Onboarding = () => {
    const { navigate } = useNavigation<ProfileScreenNavigationProp>();
    const handleFinishOnboarding = useCallback(() => {
        navigate('ConnectWallet');
    }, [navigate]);

    return (
        <ScreenContainer noScroll noPadding>
            <ScreenHeader>
                <View flexDirection='row' justifyContent='flex-end' flex={1}>
                    <GhostButton title='Skip' onPress={handleFinishOnboarding} />
                </View>
            </ScreenHeader>
            <OnboardingSlider onFinish={handleFinishOnboarding}>
                <OnboardingSlide
                    title='Share you NFTs'
                    image={<Image source={slide1} width={194} height={169} />}
                    description={
                        "You like your collection, you're ready to share it with the world and get likes and comments"
                    }
                />
                <OnboardingSlide
                    title='Meet collectors'
                    image={<Image source={slide2} width={117} height={169} />}
                    description='Find people with similar tastes and follow them'
                />
                <OnboardingSlide
                    title='Earn tokens'
                    image={<Image source={slide3} width={212} height={171} />}
                    description='The more likes and comments you collect, the more tokens you get to use for your likes and comments'
                />
            </OnboardingSlider>
        </ScreenContainer>
    );
};
