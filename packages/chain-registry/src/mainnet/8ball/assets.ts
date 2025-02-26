import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: '8ball',
  assets: [
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom: 'uebl',
          exponent: 0
        },
        {
          denom: 'ebl',
          exponent: 6
        }
      ],
      base: 'uebl',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }
      ]
    }
  ]
};
export default info;
