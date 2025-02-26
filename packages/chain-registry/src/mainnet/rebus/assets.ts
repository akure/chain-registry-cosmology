import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'rebus',
  assets: [
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom: 'arebus',
          exponent: 0
        },
        {
          denom: 'rebus',
          exponent: 18
        }
      ],
      base: 'arebus',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      coingecko_id: 'rebus',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }
      ]
    }
  ]
};
export default info;
