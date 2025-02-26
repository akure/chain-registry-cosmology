import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bandchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://bandprotocol.com/',
  pretty_name: 'Band Protocol',
  chain_id: 'laozi-mainnet',
  daemon_name: 'bandd',
  node_home: '$HOME/.band',
  bech32_prefix: 'band',
  slip44: 494,
  fees: {
    fee_tokens: [
      {
        denom: 'uband',
        low_gas_price: 0.0025,
        average_gas_price: 0.003,
        high_gas_price: 0.005
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uband'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
  },
  description:
    'Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
  apis: {
    rpc: [
      {
        address: 'http://rpc.laozi1.bandchain.org:80',
        provider: 'bandprotocol'
      },
      {
        address: 'https://rpc-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://band-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://bandchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://band.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-band-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://band-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://bandprotocol-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://band-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/bandchain/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.band.bronbro.io/',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://laozi1.bandchain.org/api',
        provider: 'bandprotocol'
      },
      {
        address: 'https://api-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://band-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://band.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bandchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-band-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://band-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://bandprotocol-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://band-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/bandchain/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://lcd.band.bronbro.io/',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'grpc-bandchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'bandchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-band.cosmos-spaces.cloud:2240',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-band-01.stakeflow.io:2502',
        provider: 'Stakeflow'
      },
      {
        address: 'band-grpc.w3coins.io:22990',
        provider: 'w3coins'
      },
      {
        address: 'http://band.grpc.m.stavr.tech:7803',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-band.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'band.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'band-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'grpc.band.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'cosmoscan',
      url: 'https://cosmoscan.io',
      tx_page: 'https://cosmoscan.io/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/band',
      tx_page: 'https://www.mintscan.io/band/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/band/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/band-protocol',
      tx_page: 'https://ping.pub/band-protocol/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Band-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Band-Mainnet/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/band',
      tx_page: 'https://exp.nodeist.net/band/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/band-protocol',
      tx_page: 'https://atomscan.com/band-protocol/transactions/${txHash}',
      account_page:
        'https://atomscan.com/band-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/band',
      tx_page: 'https://bigdipper.live/band/transactions/${txHash}',
      account_page: 'https://bigdipper.live/band/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/band-protocol',
      account_page:
        'https://stakeflow.io/band-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'kjnodes Explorer',
      url: 'https://explorer.kjnodes.com/band',
      tx_page: 'https://explorer.kjnodes.com/band/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
    }
  ]
};
export default info;
