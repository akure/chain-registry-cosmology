import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'likecointestnet',
  assets: [
    {
      description: 'EKIL is the native token for LikeCoin Testnet',
      denom_units: [
        {
          denom: 'nanoekil',
          exponent: 0
        },
        {
          denom: 'ekil',
          exponent: 9
        }
      ],
      base: 'nanoekil',
      name: 'LikeCoin',
      display: 'ekil',
      symbol: 'EKIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }
      ]
    }
  ]
};
export default info;
