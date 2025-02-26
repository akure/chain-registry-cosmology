import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sgetestnet',
  chain_id: 'sge-network-3',
  pretty_name: 'SGE Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'sgenetwork.io',
  bech32_prefix: 'sge',
  daemon_name: 'usge',
  node_home: '$HOME/.sged',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usge',
        fixed_min_gas_price: 0
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://testnet-saage-rpc.lavenderfive.com/ ',
        provider: 'Lavender.Five'
      },
      {
        address: 'https://saage-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      },
      {
        address: 'https://sge.rpc.t.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://api-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      },
      {
        address: 'https://saage-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://sge.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'Sge BlockExplorer',
      url: 'https://blockexplorer.testnet.sgenetwork.io/',
      tx_page:
        'https://blockexplorer.testnet.sgenetwork.io/sge-network/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sge-Testnet',
      tx_page: 'https://explorer.stavr.tech/Sge-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Sge-Testnet/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg'
    }
  ]
};
export default info;
