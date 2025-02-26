import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'octa',
  assets: [
    {
      description: 'The native token of Octa Chain',
      denom_units: [
        {
          denom: 'uocta',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'octa',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uocta',
      display: 'octa',
      name: 'Octa',
      symbol: 'OCTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
        }
      ]
    }
  ]
};
export default info;
