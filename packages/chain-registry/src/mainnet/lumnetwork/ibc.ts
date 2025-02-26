import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1120',
      connection_id: 'connection-807'
    },
    chain_2: {
      chain_name: 'lumnetwork',
      client_id: '07-tendermint-21',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-566',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lumnetwork',
      client_id: '07-tendermint-7',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1668',
      connection_id: 'connection-1280'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-115',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  }
];
export default info;
