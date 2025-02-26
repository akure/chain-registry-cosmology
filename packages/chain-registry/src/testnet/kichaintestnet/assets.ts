import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kichaintestnet',
  assets: [
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom: 'utki',
          exponent: 0
        },
        {
          denom: 'tki',
          exponent: 6
        }
      ],
      base: 'utki',
      name: 'Ki',
      display: 'tki',
      symbol: 'TKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }
      ]
    }
  ]
};
export default info;
