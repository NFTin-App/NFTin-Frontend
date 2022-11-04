import { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useEvent, useGate, useStore } from 'effector-react';

import { authModel } from '@features/auth';
import { ScreenProps } from '@shared/types';
import { OutlineButton, Text, View } from '@shared/ui';

import { ProfileItem } from './ProfileSelectItem';
import { $profileId, $profiles, pageGate, updateProfileId } from './selectLensProfileModel';
import { ProfileItem as ProfileItemData } from './selectProfileTypes';

export const SelectLensProfile = ({ navigation }: ScreenProps<'SelectLensProfile'>) => {
    useGate(pageGate, navigation);

    const profileId = useStore($profileId);
    const setProfileId = useEvent(updateProfileId);
    const profiles = useStore($profiles);
    const linkLensProfileToAddress = useEvent(authModel.linkLensProfileToAddress);
    const [isPending, setIsPending] = useState(false);

    const onSelectProfile = (id: string) => {
        setProfileId(id);
    };

    const renderItem: ListRenderItem<ProfileItemData> = ({ item }) => {
        const { handle, id } = item;

        return (
            <ProfileItem
                onPress={onSelectProfile}
                isSelected={profileId === id}
                handle={handle}
                id={id}
            />
        );
    };

    const onLinkAdress = async () => {
        if (profileId) {
            setIsPending(true);
            linkLensProfileToAddress(profileId);
        }
    };

    const buttonColor = !profileId ? 'gray200' : 'purple';

    return (
        <View backgroundColor='white' height='100%' flex={3}>
            <View flex={5}>
                <View paddingHorizontal={24} alignItems='center'>
                    <Text
                        color='gray100'
                        fontWeight='500'
                        textAlign='center'
                        width='80%'
                        marginTop={40}
                        fontSize={16}
                    >
                        Choose the profile NFT you want to connect to NFTin
                    </Text>
                </View>

                <View marginTop={20}>
                    <FlatList
                        data={profiles}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>

            <View paddingHorizontal={24} flex={1}>
                <OutlineButton
                    disabled={isPending}
                    borderColor={buttonColor}
                    textAttirbutes={{
                        color: buttonColor,
                    }}
                    // TODO обработка завершение контракта, сделать лоадинг
                    title={isPending ? 'LOADING...' : 'Continue'}
                    onPress={onLinkAdress}
                />
                <Text
                    fontSize={12}
                    fontWeight='400'
                    textAlign='center'
                    color='gray100'
                    marginTop={10}
                >
                    You will be able to link a new account only after a week.
                </Text>
            </View>
        </View>
    );
};
