import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'ununifi',
  assets: [
    {
      description: 'The governance token of UnUniFi protocol.',
      denom_units: [
        {
          denom: 'uguu',
          exponent: 0
        },
        {
          denom: 'guu',
          exponent: 6
        }
      ],
      base: 'uguu',
      name: 'UnUniFi',
      display: 'guu',
      symbol: 'GUU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
      },
      keywords: ['staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
        }
      ]
    }
  ]
};
export default info;
