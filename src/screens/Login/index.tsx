import { View } from 'react-native';

import { ConnectWalletButton } from '@features/auth';

import styles from './styles.scss';

const LoginPage = () => {
    return (
        <View style={styles.main}>
            <ConnectWalletButton />
        </View>
    );
};

export default LoginPage;
