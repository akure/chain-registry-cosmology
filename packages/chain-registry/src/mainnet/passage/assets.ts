import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'passage',
  assets: [
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom: 'upasg',
          exponent: 0
        },
        {
          denom: 'pasg',
          exponent: 6
        }
      ],
      base: 'upasg',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingecko_id: 'passage',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }
      ]
    }
  ]
};
export default info;
