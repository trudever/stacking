import { Network } from 'store/wallet';
import { ethers } from 'ethers';
import { DEFAULT_NETWORK_ID } from 'constants/defaults';

export const getETHToken = (network?: Network | null) => {
	return {
		symbol: 'ETH',
		address: ethers.constants.AddressZero,
		decimals: 18,
		logoURI: '',
		name: 'Ethereum',
		chainId: network?.id ?? DEFAULT_NETWORK_ID,
		tags: [],
	};
};
