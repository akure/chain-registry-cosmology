import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'babylontestnet',
  assets: [
    {
      description: 'The native staking token of Babylon.',
      denom_units: [
        {
          denom: 'ubbn',
          exponent: 0
        },
        {
          denom: 'bbn',
          exponent: 6
        }
      ],
      base: 'uatom',
      name: 'Babylon BBN',
      display: 'bbn',
      symbol: 'BBN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }
      ]
    }
  ]
};
export default info;
