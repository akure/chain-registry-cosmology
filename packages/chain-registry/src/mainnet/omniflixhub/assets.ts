import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'omniflixhub',
  assets: [
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom: 'uflix',
          exponent: 0
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      base: 'uflix',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-306'
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/uatom'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis osmo',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-199'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uosmo'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274',
          exponent: 0,
          aliases: ['uist']
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274',
      name: 'Agoric IST (Inter Stable Token)',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'uist',
            channel_id: 'channel-58'
          },
          chain: {
            channel_id: 'channel-30',
            path: 'transfer/channel-30/uist'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'agoric',
            base_denom: 'uist'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-77'
          },
          chain: {
            channel_id: 'channel-27',
            path: 'transfer/channel-27/uusdc'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630',
          exponent: 0
        },
        {
          denom: 'baddog',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630',
      name: 'BadDog (Osmosis)',
      display: 'baddog',
      symbol: 'BADDOG.osmo',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
            channel_id: 'channel-199'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.svg'
      }
    }
  ]
};
export default info;
