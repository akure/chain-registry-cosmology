import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'stargazetestnet',
  assets: [
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom: 'ustars',
          exponent: 0
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }
      ]
    }
  ]
};
export default info;
