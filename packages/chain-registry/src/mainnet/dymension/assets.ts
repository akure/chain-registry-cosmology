import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dymension',
  assets: [
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom: 'adym',
          exponent: 0
        },
        {
          denom: 'dym',
          exponent: 18
        }
      ],
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }
      ]
    }
  ]
};
export default info;
