import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'evmostestnet',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom: 'atevmos',
          exponent: 0
        },
        {
          denom: 'tevmos',
          exponent: 18
        }
      ],
      base: 'atevmos',
      name: 'Evmos Testnet',
      display: 'tevmos',
      symbol: 'TEVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
        }
      ]
    }
  ]
};
export default info;
