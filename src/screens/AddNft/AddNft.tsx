import { useStoreMap } from 'effector-react';

import { NftItem, nftModel } from '@entities/nft';
import { AddNftButton } from '@features/post';
import { RootStackScreenProps } from '@shared/types';
import { GradientView, Text, View } from '@shared/ui';

export const AddNft = ({ route }: RootStackScreenProps<'AddNft'>) => {
    const currentNft = useStoreMap({
        store: nftModel.$nfts,
        keys: [route.params.id],
        fn: (nfts, [tokenId]) => {
            return nfts?.find((nft) => nft.tokenId === tokenId);
        },
    });

    if (!currentNft) {
        return null;
    }

    return (
        <GradientView
            start={{ x: 0, y: 0.4 }}
            end={{ x: 0, y: 0.8 }}
            colors={['#FFFFFF', '#F7F5FF']}
            padding={25}
            flex={1}
        >
            <View flex={1}>
                <Text color='black100' fontSize={16} marginBottom={5}>
                    Your chose:
                </Text>
                <View height={208} width={159}>
                    <NftItem name={currentNft.name} tokenId={currentNft.tokenId} />
                </View>
            </View>

            <AddNftButton tokenId={route.params.id} title='Add nft' />
        </GradientView>
    );
};
