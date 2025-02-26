import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'conscious',
  assets: [
    {
      description:
        'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom: 'acvnt',
          exponent: 0
        },
        {
          denom: 'cvnt',
          exponent: 18
        }
      ],
      base: 'acvnt',
      name: 'Cvn',
      display: 'cvnt',
      symbol: 'CVN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png'
      },
      coingecko_id: 'consciousdao'
    }
  ]
};
export default info;
