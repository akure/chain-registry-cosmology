import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lumnetwork',
  assets: [
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom: 'ulum',
          exponent: 0
        },
        {
          denom: 'lum',
          exponent: 6
        }
      ],
      base: 'ulum',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }
      ]
    }
  ]
};
export default info;
