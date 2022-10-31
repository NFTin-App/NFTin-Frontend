import { ethers } from 'ethers';

import { Address, Nullable, ProfileId } from '@shared/types';
import Walletconnect from '@walletconnect/client';

export interface Viewer {
    address: Address;
    isConnected: boolean;
    profileId: Nullable<ProfileId>;
}
