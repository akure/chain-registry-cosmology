import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'ethos',
  assets: [
    {
      description: 'The native token of Ethos',
      denom_units: [
        {
          denom: 'aRYT',
          exponent: 0
        },
        {
          denom: 'RYT',
          exponent: 18
        }
      ],
      base: 'aRYT',
      name: 'RYT',
      display: 'RYT',
      symbol: 'RYT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
        }
      ]
    }
  ]
};
export default info;
