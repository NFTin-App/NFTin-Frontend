import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp, RootStackScreenProps } from '@shared/types';
import { DropShadow, LightningIcon, Text, TouchableOpacity, View } from '@shared/ui';

import { Nft } from '../nftTypes';

interface Props {
    name: string;
    tokenId: string;
    onPress?: (tokenId: string) => void;
}

export const NftItem = ({ name, onPress, tokenId }: Props) => {
    return (
        <DropShadow
            shadowColor='#332F48'
            shadowOffset={{
                width: 0,
                height: 0,
            }}
            shadowOpacity={0.12}
            shadowRadius={4}
            height='100%'
        >
            <TouchableOpacity
                onPress={() => onPress?.(tokenId)}
                backgroundColor={'white'}
                flex={1}
                borderRadius={12}
            >
                <View backgroundColor={'#D4D4D4'} height={159} borderRadius={12} />

                <View paddingTop={8} paddingHorizontal={12} paddingBottom={12}>
                    <Text color='black100' fontWeight={'500'}>
                        {name}
                    </Text>

                    <View flexDirection='row' alignItems='center'>
                        <LightningIcon />
                        <Text color='black100' fontWeight={'500'}>
                            193
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </DropShadow>
    );
};
