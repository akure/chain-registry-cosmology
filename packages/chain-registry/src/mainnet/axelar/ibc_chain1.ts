import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-201',
      connection_id: 'connection-182'
    },
    chain_2: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-79',
      connection_id: 'connection-54'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-28',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-185',
      connection_id: 'connection-163'
    },
    chain_2: {
      chain_name: 'celestia',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-125',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-187',
      connection_id: 'connection-165'
    },
    chain_2: {
      chain_name: 'composable',
      client_id: '07-tendermint-140',
      connection_id: 'connection-58'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-127',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-179',
      connection_id: 'connection-157'
    },
    chain_2: {
      chain_name: 'coreum',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-120',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-622',
      connection_id: 'connection-481'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-293',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-31',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-197',
      connection_id: 'connection-180'
    },
    chain_2: {
      chain_name: 'dymension',
      client_id: '07-tendermint-7',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-158',
      connection_id: 'connection-142'
    },
    chain_2: {
      chain_name: 'empowerchain',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-109',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-50',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-69',
      connection_id: 'connection-27'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-188',
      connection_id: 'connection-166'
    },
    chain_2: {
      chain_name: 'fxcore',
      client_id: '07-tendermint-24',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-128',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-162',
      connection_id: 'connection-148'
    },
    chain_2: {
      chain_name: 'haqq',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-168',
      connection_id: 'connection-150'
    },
    chain_2: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-54',
      connection_id: 'connection-40'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-114',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-37',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-113',
      connection_id: 'connection-93'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-84',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-69',
      connection_id: 'connection-178'
    },
    chain_2: {
      chain_name: 'jackal',
      client_id: '07-tendermint-69',
      connection_id: 'connection-57'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-25',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-150',
      connection_id: 'connection-97'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-71',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-42',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-11',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-118',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'kyve',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-180',
      connection_id: 'connection-158'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-101',
      connection_id: 'connection-80'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-121',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-123',
      connection_id: 'connection-110'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-78',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-150',
      connection_id: 'connection-135'
    },
    chain_2: {
      chain_name: 'odin',
      client_id: '07-tendermint-66',
      connection_id: 'connection-151'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-102',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-122',
      connection_id: 'connection-109'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-44',
      connection_id: 'connection-37'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-77',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-27',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-23',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1862',
      connection_id: 'connection-1453'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-208',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-40',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-44',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer',
          client_id: '07-tendermint-103',
          connection_id: 'connection-89'
        },
        chain_2: {
          channel_id: 'channel-61',
          port_id: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
          client_id: '07-tendermint-120',
          connection_id: 'connection-93'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-151',
      connection_id: 'connection-136'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-8',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-103',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-109',
      connection_id: 'connection-96'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-13',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-93',
      connection_id: 'connection-78'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-75',
      connection_id: 'connection-60'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-39',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-7',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-64',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-63',
      connection_id: 'connection-44'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  }
];
export default info;
