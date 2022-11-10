import { ethers } from 'ethers';

import Walletconnect from '@walletconnect/client';

export type Connector = Walletconnect;

export type Provider = ethers.providers.Web3Provider;

export type Signer = ethers.providers.JsonRpcSigner;
