import { FlatList, ListRenderItem } from 'react-native';
import { useGate, useStore } from 'effector-react';

import { Nft, NftItem, nftModel } from '@entities/nft';
import { RootStackScreenProps } from '@shared/types';
import { GradientView, View } from '@shared/ui';

import { pageGate } from './nftListModel';

export const NftsList = ({ navigation }: RootStackScreenProps<'NftsList'>) => {
    useGate(pageGate);
    const nfts = useStore(nftModel.$nfts);
    const onPress = (id: string) => {
        navigation.navigate('AddNft', { id });
    };

    const renderNft: ListRenderItem<Nft> = ({ item }) => {
        return (
            <View width='45%' height={208} display='flex' margin={5}>
                <NftItem name={item.name} tokenId={item.tokenId} onPress={onPress} />
            </View>
        );
    };

    return (
        <GradientView
            start={{ x: 0, y: 0.4 }}
            end={{ x: 0, y: 0.8 }}
            colors={['#FFFFFF', '#F7F5FF']}
            padding={25}
            flex={1}
        >
            <FlatList
                data={nfts ?? []}
                renderItem={renderNft}
                numColumns={2}
                pagingEnabled
                columnWrapperStyle={{ justifyContent: 'center' }}
                keyExtractor={({ tokenId }) => tokenId}
            />
        </GradientView>
    );
};
