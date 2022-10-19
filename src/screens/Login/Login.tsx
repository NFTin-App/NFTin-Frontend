import { ConnectWalletButton } from '@features/auth';
import { View } from '@shared/ui';

const LoginPage = () => {
    return (
        <View flex={1} paddingHorizontal={16} justifyContent={'center'}>
            <ConnectWalletButton />
        </View>
    );
};

export default LoginPage;
