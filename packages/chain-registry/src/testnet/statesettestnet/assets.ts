import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'statesettestnet',
  assets: [
    {
      description: 'The native token of the Stateset Network',
      denom_units: [
        {
          denom: 'ustate',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'state',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ustate',
      name: 'Stateset',
      display: 'state',
      symbol: 'STATE'
    }
  ]
};
export default info;
