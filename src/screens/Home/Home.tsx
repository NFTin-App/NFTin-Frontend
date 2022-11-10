import { SignOutButton } from '@features/auth';
import { Text, View } from '@shared/ui';

export const Home = () => {
    return (
        <View flex={1} justifyContent='center'>
            <Text>Home</Text>
            <SignOutButton />
        </View>
    );
};
