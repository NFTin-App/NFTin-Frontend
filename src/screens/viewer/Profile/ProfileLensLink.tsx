import { useEvent } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { useNavigation } from '@react-navigation/native';
import lensLogo from '@shared/assets/media/lens.mp4';
import { ProfileScreenNavigationProp } from '@shared/types';
import { Button, Text, Video, View } from '@shared/ui';

export const ProfileLensLink = () => {
    const { reset } = useNavigation<ProfileScreenNavigationProp>();
    const updateIsGuest = useEvent(viewerModel.updateGuestFx);

    const redirectToConnect = async () => {
        await updateIsGuest(false);

        reset({
            index: 0,
            routes: [{ name: 'ConnectLensProfile' }],
        });
    };

    return (
        <View
            flex={2}
            marginTop={50}
            paddingHorizontal={24}
            alignItems='center'
            justifyContent='space-around'
        >
            <View width='100%' alignItems='center'>
                <Video
                    source={lensLogo}
                    width={185}
                    height={185}
                    borderRadius={100}
                    borderWidth={2}
                    resizeMode='contain'
                    overflow='hidden'
                    alignSelf='center'
                    borderColor='#00501E'
                    repeat
                />
                <View width='80%' marginTop={50}>
                    <Text color='black' textAlign='center' fontSize={20} fontWeight='500'>
                        Connect Lens profile NFT to track your NFTin portfolio!
                    </Text>

                    <Text color='black' textAlign='center' marginTop={20} fontSize={15}>
                        To become a part of NFTin, you need to connect Lens profile.
                    </Text>
                </View>
            </View>

            <View width='100%' marginBottom='25%'>
                <Button
                    textAttributes={{ fontSize: 16, fontWeight: '600' }}
                    title='Yes, connect Lens profile'
                    width='100%'
                    onPress={redirectToConnect}
                />
            </View>
        </View>
    );
};
