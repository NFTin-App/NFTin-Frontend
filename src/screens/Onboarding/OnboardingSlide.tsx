import { memo } from 'react';

import { Body2, Title1, View } from '@shared/ui';

interface Props {
    title: string;
    image: React.ReactElement;
    description: string;
}

export const OnboardingSlide = memo(({ title, image, description }: Props) => {
    return (
        <View flex={1} alignItems='center'>
            <Title1 color='black100'>{title}</Title1>
            <View mt={29} mb={24}>
                {image}
            </View>
            <Body2 color='black100' textAlign='center'>
                {description}
            </Body2>
        </View>
    );
});
