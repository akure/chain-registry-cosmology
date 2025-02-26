import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'arbitrum',
  assets: [
    {
      description: 'Native token of Arbitrum',
      type_asset: 'erc20',
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      denom_units: [
        {
          denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      coingecko_id: 'arbitrum',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }
      ]
    }
  ]
};
export default info;
