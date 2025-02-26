import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'terra',
      client_id: '07-tendermint-235',
      connection_id: 'connection-142'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-394',
      connection_id: 'connection-384'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-85',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-314',
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
  }
];
export default info;
