import { ScreenProps } from '@shared/types';
import { Button, GhostButton, LensIcon, OutlineButton, Text, View } from '@shared/ui';
import { useGate, useStore } from 'effector-react';
import { $isUnavailableProfiles, pageGate } from './connectLensProfileModel';

export const ConnectLensProfile = ({ navigation }: ScreenProps<'ConnectLensProfile'>) => {
    useGate(pageGate);

    const isUnavailableProfiles = useStore($isUnavailableProfiles);

    const buttonColor = isUnavailableProfiles ? 'gray200' : 'purple';

    return (
        <View flex={2} paddingHorizontal={24} alignItems='center' justifyContent='space-around'>
            <View width='80%' alignItems='center' marginVertical={40}>
                <LensIcon />

                <Text
                    color='black'
                    fontWeight='500'
                    textAlign='center'
                    marginTop={23}
                    fontSize={20}
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
                    textAttirbutes={{ fontSize: 16, fontWeight: '600', color: buttonColor }}
                    title='Yes, connect Lens profile'
                    width='100%'
                    disabled={isUnavailableProfiles}
                    onPress={() => navigation.push('SelectLensProfile')}
                />
                <View marginTop={5}>
                    <OutlineButton
                        textAttirbutes={{ fontSize: 16, fontWeight: '600', color: 'purple' }}
                        title='No, continue to NFTin as guest'
                        width='100%'
                    />
                </View>

                <GhostButton title='Сreate the Lens Profile NFT' />
            </View>
        </View>
    );
};
