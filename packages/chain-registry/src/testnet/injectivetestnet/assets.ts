import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'injectivetestnet',
  assets: [
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom: 'inj',
          exponent: 0
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ]
    }
  ]
};
export default info;
