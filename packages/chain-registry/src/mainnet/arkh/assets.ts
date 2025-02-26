import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'arkh',
  assets: [
    {
      description: 'The native token of Arkhadian',
      denom_units: [
        {
          denom: 'arkh',
          exponent: 0
        },
        {
          denom: 'ARKH',
          exponent: 6
        }
      ],
      base: 'arkh',
      name: 'Arkh',
      display: 'ARKH',
      symbol: 'ARKH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }
      ]
    }
  ]
};
export default info;
