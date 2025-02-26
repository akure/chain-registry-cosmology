import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'source',
  assets: [
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [
        {
          denom: 'usource',
          exponent: 0
        },
        {
          denom: 'source',
          exponent: 6
        }
      ],
      base: 'usource',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      coingecko_id: 'source',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }
      ]
    },
    {
      description:
        "Source Protocol's SRCX Token Bridged from BNB Through Planq",
      denom_units: [
        {
          denom:
            'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
          exponent: 0,
          aliases: ['srcx']
        },
        {
          denom: 'srcx',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
      name: 'SRCX',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channel_id: 'channel-61'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
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
