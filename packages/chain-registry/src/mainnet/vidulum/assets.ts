import { AssetList } from '@chain-registry-ak/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'vidulum',
  assets: [
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom: 'uvdl',
          exponent: 0
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      base: 'uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      coingecko_id: 'vidulum',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }
      ]
    }
  ]
};
export default info;
