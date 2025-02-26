import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'uniontestnet',
  assets: [
    {
      description: 'The native token of union',
      denom_units: [
        {
          denom: 'muno',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'uno',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'muno',
      name: 'union',
      display: 'union',
      symbol: 'UNION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png'
      },
      coingecko_id: 'unionlabs',
      keywords: ['staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png'
        }
      ]
    }
  ]
};
export default info;
