import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sui',
  assets: [
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [
        {
          denom: '0x2::sui::SUI',
          exponent: 0,
          aliases: ['MIST']
        },
        {
          denom: 'SUI',
          exponent: 9
        }
      ],
      base: '0x2::sui::SUI',
      name: 'Sui',
      display: 'SUI',
      symbol: 'SUI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      coingecko_id: 'sui',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }
      ]
    }
  ]
};
export default info;
