import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'logos',
  assets: [
    {
      description: 'The native token of Logos',
      denom_units: [
        {
          denom: 'aLYT',
          exponent: 0
        },
        {
          denom: 'LYT',
          exponent: 18
        }
      ],
      base: 'aLYT',
      name: 'LYT',
      display: 'LYT',
      symbol: 'LYT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
        }
      ]
    }
  ]
};
export default info;
