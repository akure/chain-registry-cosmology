import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'zetachain',
  assets: [
    {
      description: 'The native token of ZetaChain',
      denom_units: [
        {
          denom: 'azeta',
          exponent: 0
        },
        {
          denom: 'zeta',
          exponent: 18
        }
      ],
      base: 'azeta',
      name: 'ZetaChain',
      display: 'zeta',
      symbol: 'ZETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.svg'
        }
      ]
    }
  ]
};
export default info;
