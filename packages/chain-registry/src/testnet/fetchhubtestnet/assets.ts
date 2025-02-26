import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'fetchhubtestnet',
  assets: [
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom: 'atestfet',
          exponent: 0
        },
        {
          denom: 'testfet',
          exponent: 18
        }
      ],
      base: 'atestfet',
      name: 'fetch-ai',
      display: 'fet',
      symbol: 'FET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      coingecko_id: 'fetch-ai',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }
      ]
    }
  ]
};
export default info;
