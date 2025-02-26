import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mun',
  assets: [
    {
      description: 'The native token of Mun',
      denom_units: [
        {
          denom: 'umun',
          exponent: 0
        },
        {
          denom: 'mun',
          exponent: 6
        }
      ],
      base: 'umun',
      name: 'Mun',
      display: 'mun',
      symbol: 'MUN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
        }
      ]
    }
  ]
};
export default info;
