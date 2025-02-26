import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'archwaytestnet',
  assets: [
    {
      description: 'The native token of Archway testnetwork',
      denom_units: [
        {
          denom: 'aconst',
          exponent: 0
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST'
    }
  ]
};
export default info;
