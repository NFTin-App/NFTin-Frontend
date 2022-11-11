import { Nullable } from '@shared/types';

export interface Nft {
    name: string;
    tokenAddress: string;
    tokenId: string;
    tokenURI: Nullable<string>;
}
