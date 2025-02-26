import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'firmachain',
  assets: [
    {
      description: 'The native token of FirmaChain',
      denom_units: [
        {
          denom: 'ufct',
          exponent: 0
        },
        {
          denom: 'fct',
          exponent: 6
        }
      ],
      base: 'ufct',
      name: 'FirmaChain',
      display: 'fct',
      symbol: 'FCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
      },
      coingecko_id: 'firmachain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
        }
      ]
    }
  ]
};
export default info;
