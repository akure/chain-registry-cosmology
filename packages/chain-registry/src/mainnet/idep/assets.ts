import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'idep',
  assets: [
    {
      description: 'The native token of IDEP chain',
      denom_units: [
        {
          denom: 'IDEP',
          exponent: 6,
          aliases: []
        },
        {
          denom: 'idep',
          exponent: 0,
          aliases: []
        }
      ],
      base: 'idep',
      name: 'IDEP',
      display: 'IDEP',
      symbol: 'IDEP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
        }
      ]
    }
  ]
};
export default info;
