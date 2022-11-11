import { NftItem, nftModel } from '@entities/nft';
import { AddNftButton } from '@features/post';
import { RootStackScreenProps } from '@shared/types';
import { GradientView, OutlineButton, Text, View } from '@shared/ui';
import { useStoreMap } from 'effector-react';

export const AddNft = ({ route }: RootStackScreenProps<'AddNft'>) => {
    const nft = useStoreMap({
        store: nftModel.$nfts,
        keys: [route.params.id],
        fn: (nfts, [tokenId]) => {
            return nfts?.find((nft) => nft.tokenId === tokenId);
        },
    });

    if (!nft) {
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
                    <NftItem name={nft.name} tokenId={nft.tokenId} />
                </View>
            </View>

            <AddNftButton tokenId={route.params.id} title='Add nft' />
        </GradientView>
    );
};
