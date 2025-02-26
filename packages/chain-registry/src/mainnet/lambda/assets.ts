import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lambda',
  assets: [
    {
      description: 'The native token of Lambda',
      denom_units: [
        {
          denom: 'ulamb',
          exponent: 0
        },
        {
          denom: 'lamb',
          exponent: 18
        }
      ],
      base: 'ulamb',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      coingecko_id: 'lambda',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }
      ]
    }
  ]
};
export default info;
