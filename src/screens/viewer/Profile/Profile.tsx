import { memo } from 'react';
import { useGate, useStore } from 'effector-react';

import { profileModel } from '@entities/profile';
import { SignOutButton } from '@features/auth';
import { useIsFocused } from '@react-navigation/native';
import { HomeTabScreenProps } from '@shared/types';
import { Button, Text, View } from '@shared/ui';

import { ProfileLensLink } from './ProfileLensLink';
import { ProfileLoading } from './ProfileLoading';
import { $profileStatus, pageGate } from './profileModel';
import { ProfileStatus } from './profileTypes';
import { ProfileWalletConnect } from './ProfileWalletConnect';

const renderProfile = (profileStatus: ProfileStatus) => {
    switch (profileStatus) {
        case 'loading':
            return <ProfileLoading />;
        case 'needLensProfile':
            return <ProfileLensLink />;
        case 'needWalletConnect':
            return <ProfileWalletConnect />;
        default:
            return null;
    }
};

export const ProfilePage = memo(({ navigation }: HomeTabScreenProps<'Profile'>) => {
    const isFocused = useIsFocused();

    useGate(pageGate, isFocused);

    const profileStatus = useStore($profileStatus);
    const profile = useStore(profileModel.$profile);

    const profileContent = renderProfile(profileStatus);

    if (profileContent) {
        return profileContent;
    }

    return (
        <View flex={1} alignItems='center'>
            <View>
                <Text color='gray100' fontSize={12}>
                    @{profile?.handle}
                </Text>
                <Button
                    title='to selectProfile'
                    onPress={() => {
                        navigation.navigate('ConnectLensProfile');
                    }}
                />
                <SignOutButton />
            </View>
        </View>
    );
});
