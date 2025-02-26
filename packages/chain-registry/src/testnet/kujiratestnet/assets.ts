import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kujiratestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [
        {
          denom: 'ukuji',
          exponent: 0
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      base: 'ukuji',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }
      ]
    },
    {
      description: 'The testnet token of Fuzion',
      denom_units: [
        {
          denom: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
          exponent: 0
        },
        {
          denom: 'fuzn',
          exponent: 6
        }
      ],
      base: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
        }
      ]
    }
  ]
};
export default info;
