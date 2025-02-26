import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'quasartestnet',
  assets: [
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom: 'uqsr',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uqsr',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR'
    },
    {
      denom_units: [
        {
          denom: 'uayy',
          exponent: 0
        },
        {
          denom: 'ayy',
          exponent: 6
        }
      ],
      base: 'uay',
      name: 'AYY',
      display: 'ayy',
      symbol: 'AYY'
    },
    {
      denom_units: [
        {
          denom: 'uoro',
          exponent: 0
        },
        {
          denom: 'oro',
          exponent: 6
        }
      ],
      base: 'oro',
      name: 'oro',
      display: 'oro',
      symbol: 'ORO'
    }
  ]
};
export default info;
