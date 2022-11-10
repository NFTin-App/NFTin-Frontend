import { Linking } from 'react-native';
import { useGate, useStore } from 'effector-react';

import { LoginAsGuestButton } from '@features/auth';
import lensLogo from '@shared/assets/media/lens.mp4';
import { RootStackScreenProps } from '@shared/types';
import { Button, GhostButton, Text, Video, View } from '@shared/ui';

import { $isUnavailableProfiles, pageGate } from './connectLensProfileModel';

const lensUrl = 'https://www.lens.xyz/';

export const ConnectLensProfile = ({ navigation }: RootStackScreenProps<'ConnectLensProfile'>) => {
    useGate(pageGate);

    const isUnavailableProfiles = useStore($isUnavailableProfiles);

    return (
        <View flex={2} paddingHorizontal={24} alignItems='center' justifyContent='space-around'>
            <View width='80%' alignItems='center' marginVertical={40}>
                <Video
                    source={lensLogo}
                    width={123}
                    height={123}
                    borderRadius={100}
                    borderWidth={2}
                    resizeMode='contain'
                    overflow='hidden'
                    alignSelf='center'
                    borderColor='#00501E'
                    repeat
                />

                <Text
                    marginTop={23}
                    fontSize={20}
                    color='black'
                    fontWeight='500'
                    textAlign='center'
                >
                    Are you alredy connectted to Lens?
                </Text>

                <Text color='black' textAlign='center' marginTop={20} fontSize={15}>
                    LENS PROTOCOL is a composable and decentrailized social graph. It lets creators
                    to take ownership of their content wherever they go in the digital garden of the
                    decentralized internet.
                </Text>

                <Text color='black' textAlign='center' marginTop={20} fontSize={15}>
                    If you have a profile NFT in your wallet you can connect it here to use Lens
                    through the NFTin app.
                </Text>
            </View>
            {/* //  TODO подключить либу или сделать самостоятельно реализацию <Stack></Stack> компонента */}
            <View width='100%'>
                <Button
                    textAttributes={{ fontSize: 16, fontWeight: '600' }}
                    title='Yes, connect Lens profile'
                    width='100%'
                    disabled={isUnavailableProfiles}
                    onPress={() => navigation.navigate('SelectLensProfile')}
                />

                <View marginTop={5}>
                    <LoginAsGuestButton title='No, continue as guest' />
                </View>

                <GhostButton
                    onPress={() => {
                        Linking.openURL(lensUrl);
                    }}
                    title='Сreate the Lens Profile'
                />
            </View>
        </View>
    );
};
