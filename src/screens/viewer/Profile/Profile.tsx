import { memo } from 'react';
import { useGate, useStore } from 'effector-react';

import { profileModel } from '@entities/profile';
import { SignOutButton } from '@features/auth';
import { ScreenProps } from '@shared/types';
import { Button, Text, View } from '@shared/ui';

import { ProfileLoading } from './ProfileLoading';
import { pageGate } from './profileModel';

export const ProfilePage = memo(({ navigation }: ScreenProps<'Profile'>) => {
    useGate(pageGate, navigation);

    const profile = useStore(profileModel.$profile);

    // ? поменять на viewerModel.getViewerProfileIdFx.pending?
    if (!profile) {
        return <ProfileLoading />;
    }

    return (
        <View alignItems='center'>
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
