import { LensIcon, Text, TouchableOpacity, View } from '@shared/ui';

interface Props {
    handle: string;
    id: string;
    isSelected: boolean;
    onPress: (id: string) => void;
}

export const ProfileItem = ({ handle, isSelected, onPress, id }: Props) => {
    return (
        <TouchableOpacity
            paddingHorizontal={24}
            onPress={() => onPress(id)}
            height={100}
            flexDirection='row'
            alignItems='center'
            backgroundColor={isSelected ? 'pink' : undefined}
        >
            <View>
                <LensIcon width={50} height={50} viewBox='0 0 122 122' />
            </View>

            <Text
                color={isSelected ? 'white' : 'gray100'}
                fontWeight='500'
                fontSize={15}
                marginLeft={10}
            >
                @{handle}
            </Text>
        </TouchableOpacity>
    );
};
