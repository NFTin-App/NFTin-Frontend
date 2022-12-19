import { memo } from 'react';
import { useGate, useStore } from 'effector-react';

import { ProfileAvatar, profileModel } from '@entities/profile';
import { useIsFocused } from '@react-navigation/native';
import { HomeTabScreenProps } from '@shared/types';
import {
    AddIcon,
    CategoryIcon,
    DropShadow,
    GradientText,
    GradientView,
    IconButton,
    LightningIcon,
    Text,
    TokenIcon,
    View,
} from '@shared/ui';

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
        <View>
            <GradientView
                start={{ x: 0, y: 0.4 }}
                end={{ x: 0, y: 1 }}
                colors={['#F7F5FF', '#FFFFFF']}
                paddingVertical={25}
                borderBottomLeftRadius={42}
                borderBottomRightRadius={42}
            >
                <View flexDirection='row' justifyContent='center'>
                    <View width='20%'>
                        <IconButton
                            justifyContent='center'
                            alignItems='center'
                            width={44}
                            height={44}
                            borderRadius={8}
                            disabled
                        >
                            <CategoryIcon />
                        </IconButton>

                        <IconButton
                            marginTop={12}
                            justifyContent='center'
                            alignItems='center'
                            width={44}
                            height={44}
                            borderRadius={8}
                            onPress={() => {
                                navigation.navigate('NftsList');
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </View>

                    <View width='50%' alignItems='center'>
                        <Text color='black100'>{profile?.name} </Text>
                        <Text color='gray100' fontSize={12}>
                            @{profile?.handle}
                        </Text>
                        <View marginTop={15}>
                            <ProfileAvatar />
                        </View>
                    </View>

                    <View width='20%' alignItems='center'>
                        <GradientView
                            colors={['#FFFFFF', '#F7F5FF']}
                            start={{ x: 0, y: 0.7 }}
                            end={{ x: 0, y: 1.2 }}
                            flexDirection='row'
                            alignItems='center'
                            borderRadius={12}
                            backgroundColor='white'
                            paddingHorizontal={20}
                            paddingVertical={15}
                        >
                            <LightningIcon alignItems='center' justifyContent='center' />

                            <GradientText
                                marginLeft={5}
                                colors={['#8067EB', '#DC5D83', '#FB5184', '#F61256']}
                            >
                                0
                            </GradientText>
                        </GradientView>

                        <View marginTop={12} flexDirection='row' alignItems='center'>
                            <TokenIcon />

                            <Text marginLeft={5} color='gray100'>
                                0
                            </Text>
                        </View>
                    </View>
                </View>

                {profile?.bio && (
                    <DropShadow
                        shadowColor='#332F48'
                        shadowOffset={{
                            width: 0,
                            height: 0,
                        }}
                        shadowOpacity={0.12}
                        shadowRadius={4}
                        paddingHorizontal={25}
                    >
                        <View
                            paddingVertical={8}
                            paddingHorizontal={24}
                            borderRadius={100}
                            marginTop={80}
                            backgroundColor='white'
                        >
                            (
                            <Text
                                color='black100'
                                textAlign='center'
                                fontSize={14}
                                fontWeight='400'
                            >
                                {profile?.bio}
                            </Text>
                            )
                        </View>
                    </DropShadow>
                )}

                <View marginTop={20} paddingHorizontal={25} flexDirection='row'>
                    {/* <View flex={1} alignItems='center'>
                        <Text fontSize={14} color='black100'>
                            TODO
                        </Text>
                        <Text color='#616161'>Items</Text>
                    </View>

                    <View width={1} height='100%' backgroundColor='#F3F4F6' /> */}
                    <View flex={1} alignItems='center'>
                        <Text fontSize={14} color='black100'>
                            {profile?.totalFollowing}
                        </Text>
                        <Text color='#616161'>Following</Text>
                    </View>

                    <View width={1} height='100%' backgroundColor='#F3F4F6' />
                    <View flex={1} alignItems='center'>
                        <Text fontSize={14} color='black100'>
                            {profile?.totalFollowers}
                        </Text>
                        <Text color='#616161'>Followers</Text>
                    </View>
                </View>
            </GradientView>
        </View>
    );
});
