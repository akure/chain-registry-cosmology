import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'planq',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom: 'aplanq',
          exponent: 0
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      base: 'aplanq',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }
      ]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [
        {
          denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          exponent: 0
        },
        {
          denom: 'srcx',
          exponent: 9
        }
      ],
      base: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    }
  ]
};
export default info;
