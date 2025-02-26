import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sgetestnet',
  assets: [
    {
      description:
        'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [
        {
          denom: 'usge',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'usge',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'usge',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        }
      ]
    }
  ]
};
export default info;
