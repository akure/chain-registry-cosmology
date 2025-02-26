import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chain4energy',
  assets: [
    {
      description: 'The native token of Chain4Energy',
      denom_units: [
        {
          denom: 'uc4e',
          exponent: 0
        },
        {
          denom: 'c4e',
          exponent: 6
        }
      ],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
        }
      ]
    }
  ]
};
export default info;
