import { Address, Nullable, ProfileId } from '@shared/types';

export interface Viewer {
    address: Address;
    isConnected: boolean;
    profileId: Nullable<ProfileId>;
}
