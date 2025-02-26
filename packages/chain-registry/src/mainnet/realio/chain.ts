import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'realio',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://realio.network/',
  pretty_name: 'Realio Network',
  chain_id: 'realionetwork_3301-1',
  bech32_prefix: 'realio',
  node_home: '$HOME/.realio-network',
  daemon_name: 'realio-networkd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'ario',
        fixed_min_gas_price: 1000000000,
        low_gas_price: 4000000000,
        average_gas_price: 5000000000,
        high_gas_price: 8000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ario'
      },
      {
        denom: 'arst'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://realio-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.rpc.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://realio.rpc.m.stavr.tech:21097',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://api-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://rpc.realio.safeblock.space',
        provider: 'Safe Block'
      }
    ],
    rest: [
      {
        address: 'https://realio-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.lcd.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://api-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://realio.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://rpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://api.realio.safeblock.space',
        provider: 'Safe Block'
      }
    ],
    grpc: [
      {
        address: 'realio-grpc.genznodes.dev:30090',
        provider: 'genznodes'
      },
      {
        address: 'realio.grpc.bccnodes.com:10990',
        provider: 'BccNodes'
      },
      {
        address: 'http://realio.grpc.m.stavr.tech:9062',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-realio.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://grpc.realio.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'grpc.realio.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'realio.grpc.skynodejs.net',
        provider: 'skynodejs'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://realio-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://jsonrpc.realio.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://evm-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://evm.realio.safeblock.space',
        provider: 'Safe Block'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/realio-mainnet',
      tx_page: 'https://explorer.stavr.tech/realio-mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/realio-mainnet/account/{$accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/realio',
      tx_page: 'https://explorer.nodestake.top/realio/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/realio/account/{$accountAddress}'
    },
    {
      kind: 'Sr20de Explorer',
      url: 'https://explorer.sr20de.xyz/Realio',
      tx_page: 'https://explorer.sr20de.xyz/Realio/tx/${txHash}',
      account_page:
        'https://explorer.sr20de.xyz/Realio/account/{$accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/realio',
      tx_page: 'https://explorer.tcnetwork.io/realio/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/realio/account/${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/realio',
      tx_page: 'https://explorer.safeblock.space/realio/tx/${txHash}',
      account_page:
        'https://explorer.safeblock.space/realio/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png'
    }
  ]
};
export default info;
