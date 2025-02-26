import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dig',
  assets: [
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom: 'udig',
          exponent: 0
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      base: 'udig',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      coingecko_id: 'dig-chain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }
      ]
    }
  ]
};
export default info;
