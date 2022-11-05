import { memo } from 'react';
import { useEvent, useGate, useStore } from 'effector-react';

import { navigationModel } from '@entities/navigation';
import { profileModel } from '@entities/profile';
import { SignOutButton } from '@features/auth';
import { Button, Text, View } from '@shared/ui';

import { ProfileLoading } from './ProfileLoading';
import { pageGate } from './profileModel';

export const ProfilePage = memo(() => {
    useGate(pageGate);

    const navigate = useEvent(navigationModel.resetNavigateFx);
    const profile = useStore(profileModel.$profile);

    // ? поменять на viewerModel.getViewerProfileIdFx.pending?
    if (!profile) {
        return <ProfileLoading />;
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
                        navigate('ConnectLensProfile');
                    }}
                />
                <SignOutButton />
            </View>
        </View>
    );
});
