import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'furya',
  assets: [
    {
      description: 'The native token of Furya',
      denom_units: [
        {
          denom: 'ufury',
          exponent: 0
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      base: 'ufury',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
        }
      ]
    }
  ]
};
export default info;
