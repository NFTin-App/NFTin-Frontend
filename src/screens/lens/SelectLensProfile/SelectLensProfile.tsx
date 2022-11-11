import { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useEvent, useGate, useStore, useUnit } from 'effector-react';

import { ProfileItem as TProfileItem, profileModel } from '@entities/profile';
import { authModel, InitProfileButton } from '@features/auth';
import { OutlineButton, Text, View } from '@shared/ui';

import { ProfileItem } from './ProfileSelectItem';
import { $profileId, pageGate, updateProfileId } from './selectLensProfileModel';

export const SelectLensProfile = () => {
    useGate(pageGate);

    const [profileId, setProfileId] = useUnit([$profileId, updateProfileId]);
    const profiles = useStore(profileModel.$profiles);

    const onSelectProfile = (id: string) => {
        setProfileId(id);
    };

    const renderItem: ListRenderItem<TProfileItem> = ({ item }) => {
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
                        Choose the profile you want to connect to NFTin
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
                <InitProfileButton profileId={profileId} />

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
