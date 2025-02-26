import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cerberus',
  assets: [
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom: 'ucrbrus',
          exponent: 0
        },
        {
          denom: 'crbrus',
          exponent: 6
        }
      ],
      base: 'ucrbrus',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      coingecko_id: 'cerberus-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }
      ]
    }
  ]
};
export default info;
