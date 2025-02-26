import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lumenxtestnet',
  assets: [
    {
      description: 'The native token of Lumen Network',
      denom_units: [
        {
          denom: 'ulumen',
          exponent: 0
        },
        {
          denom: 'lumen',
          exponent: 6
        }
      ],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
        }
      ]
    }
  ]
};
export default info;
