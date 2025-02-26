import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'qwoyn',
  assets: [
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [
        {
          denom: 'uqwoyn',
          exponent: 0
        },
        {
          denom: 'qwoyn',
          exponent: 6
        }
      ],
      base: 'uqwoyn',
      name: 'Qwoyn Blockchain',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }
      ]
    }
  ]
};
export default info;
