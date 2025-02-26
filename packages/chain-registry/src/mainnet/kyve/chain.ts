import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kyve',
  chain_id: 'kyve-1',
  pretty_name: 'KYVE',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  website: 'https://www.kyve.network/',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ukyve',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ukyve'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.6-kyve-rc0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
  },
  description:
    'Revolutionizing data reliability in the Web3 space, KYVE Network provides fast and easy tooling for data validation, immutability, and retrieval, ensuring trustless data for seamless scalability and eliminating data risks and roadblocks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://kyve.rpc.m.stavr.tech:12357',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-kyve.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://kyve-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-kyve.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://kyve.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rpc-kyve.mms.team',
        provider: 'MMS'
      }
    ],
    rest: [
      {
        address: 'https://api-eu-1.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://kyve-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rest-kyve.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://lcd-kyve.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://kyve.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://kyve-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-kyve.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://kyve.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://api-kyve.mms.team',
        provider: 'MMS'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.kyve.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://kyve-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-kyve.cosmos-spaces.cloud:2590',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://grpc-kyve.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://kyve.grpc.stavr.tech:7106',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://kyve.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'grpc-kyve.mms.team:443',
        provider: 'MMS'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/kyve',
      tx_page: 'https://www.mintscan.io/kyve/txs/${txHash}',
      account_page: 'https://www.mintscan.io/kyve/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/kyve',
      tx_page: 'https://explorer.nodestake.top/kyve/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/kyve/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Kyve',
      tx_page: 'https://explorer.stavr.tech/Kyve/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Kyve/account/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/kyve',
      tx_page: 'https://explorer.stake-take.com/kyve/txs/${txHash}',
      account_page:
        'https://explorer.stake-take.com/kyve/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg'
    }
  ]
};
export default info;
