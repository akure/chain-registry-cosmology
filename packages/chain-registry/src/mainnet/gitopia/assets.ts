import { AssetList } from '@chain-registry-ak/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gitopia',
  assets: [
    {
      description: 'The native token of Gitopia',
      denom_units: [
        {
          denom: 'ulore',
          exponent: 0
        },
        {
          denom: 'LORE',
          exponent: 6
        }
      ],
      base: 'ulore',
      name: 'LORE',
      display: 'LORE',
      symbol: 'LORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }
      ],
      coingecko_id: 'gitopia'
    }
  ]
};
export default info;
