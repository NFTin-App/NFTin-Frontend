import { memo } from 'react';

import { Body, Heading, View } from '@shared/ui';

interface Props {
    title: string;
    image: React.ReactElement;
    description: string;
}

export const OnboardingSlide = memo(({ title, image, description }: Props) => {
    return (
        <View flex={1} alignItems='center'>
            <Heading color='black100'>{title}</Heading>
            <View mt={29} mb={24}>
                {image}
            </View>
            <Body lineHeight={22} color='black100' textAlign='center'>
                {description}
            </Body>
        </View>
    );
});
