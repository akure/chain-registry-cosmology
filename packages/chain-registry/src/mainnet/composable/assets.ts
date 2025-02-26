import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'composable',
  assets: [
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom: 'ppica',
          exponent: 0
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          provider: 'Composable Finance'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
          exponent: 0,
          aliases: ['4']
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '4',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/4'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
          exponent: 0,
          aliases: ['79228162514264337593543950342']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Statemine parachain.',
      denom_units: [
        {
          denom:
            'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
          exponent: 0,
          aliases: ['130']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '130',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/130'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130'
          }
        }
      ]
    }
  ]
};
export default info;
