import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1899',
      connection_id: 'connection-1472'
    },
    chain_2: {
      chain_name: 'provenance',
      client_id: '07-tendermint-31',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-222',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
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
