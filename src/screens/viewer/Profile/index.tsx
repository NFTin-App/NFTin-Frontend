import { View } from 'react-native';

import { SignOutButton } from '@features/auth';
import { Text } from '@shared/ui';

const ProfilePage = () => {
    return (
        <View>
            <Text color='black'>Profile</Text>
            <SignOutButton />
        </View>
    );
};

export default ProfilePage;
