import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'likecoin',
  assets: [
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom: 'nanolike',
          exponent: 0
        },
        {
          denom: 'like',
          exponent: 9
        }
      ],
      base: 'nanolike',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      coingecko_id: 'likecoin',
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
