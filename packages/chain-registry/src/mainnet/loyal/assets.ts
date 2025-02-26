import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'loyal',
  assets: [
    {
      description: 'The native token of Loyal',
      denom_units: [
        {
          denom: 'ulyl',
          exponent: 0
        },
        {
          denom: 'lyl',
          exponent: 6
        }
      ],
      base: 'ulyl',
      name: 'Loyal',
      display: 'lyl',
      symbol: 'LYL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
        }
      ]
    }
  ]
};
export default info;
