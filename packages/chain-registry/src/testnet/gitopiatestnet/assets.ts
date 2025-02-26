import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'gitopiatestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the testnet version of Gitopia.',
      denom_units: [
        {
          denom: 'utlore',
          exponent: 0
        },
        {
          denom: 'tlore',
          exponent: 6
        }
      ],
      base: 'utlore',
      name: 'TLORE',
      display: 'tlore',
      symbol: 'TLORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
        }
      ]
    }
  ]
};
export default info;
