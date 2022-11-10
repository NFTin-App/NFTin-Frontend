import { SignOutButton } from '@features/auth';
import { Text, View } from '@shared/ui';

export const Loading = () => {
    return (
        <View>
            <SignOutButton />
            <Text color='black'>App loading</Text>
        </View>
    );
};
