import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'pryzmtestnet',
  assets: [
    {
      description: 'The native token of PRYZM',
      denom_units: [
        {
          denom: 'upryzm',
          exponent: 0
        },
        {
          denom: 'pryzm',
          exponent: 6
        }
      ],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm.svg'
        }
      ]
    }
  ]
};
export default info;
