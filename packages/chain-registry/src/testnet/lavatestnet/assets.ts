import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'lavatestnet',
  assets: [
    {
      description: 'The native token of Lava',
      denom_units: [
        {
          denom: 'ulava',
          exponent: 0
        },
        {
          denom: 'lava',
          exponent: 6
        }
      ],
      base: 'ulava',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }
      ]
    }
  ]
};
export default info;
