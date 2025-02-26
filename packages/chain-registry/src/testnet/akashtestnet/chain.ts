import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akashtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://akash.network/',
  pretty_name: 'Sandbox',
  chain_id: 'sandbox-01',
  bech32_prefix: 'akash',
  daemon_name: 'akash',
  node_home: '$HOME/.akash',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uakt',
        fixed_min_gas_price: 0,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uakt'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sandbox-01.aksh.pw:443',
        provider: 'akash'
      }
    ],
    rest: [
      {
        address: 'https://api.sandbox-01.aksh.pw:443',
        provider: 'akash'
      }
    ],
    grpc: [
      {
        address: 'grpc.sandbox-01.aksh.pw:9090',
        provider: 'akash'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.sandbox-01.aksh.pw/akash',
      tx_page: 'https://explorer.sandbox-01.aksh.pw/akash/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
    }
  ]
};
export default info;
