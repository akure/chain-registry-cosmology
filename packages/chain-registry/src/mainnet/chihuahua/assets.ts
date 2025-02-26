import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chihuahua',
  assets: [
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom: 'uhuahua',
          exponent: 0
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      base: 'uhuahua',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }
      ]
    },
    {
      description: 'Puppy',
      denom_units: [
        {
          denom:
            'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
          exponent: 0
        },
        {
          denom: 'puppy',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      base: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      }
    },
    {
      description: 'has a hat',
      denom_units: [
        {
          denom:
            'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
          exponent: 0
        },
        {
          denom: 'achihuahuawifhat',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }
      ]
    },
    {
      description: 'Woof',
      denom_units: [
        {
          denom:
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
          exponent: 0
        },
        {
          denom: 'WOOF',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }
      ]
    },
    {
      description: 'Tacos',
      denom_units: [
        {
          denom:
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
          exponent: 0
        },
        {
          denom: 'TACOS',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
      name: 'TACOS',
      display: 'TACOS',
      symbol: 'TACOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
        }
      ]
    },
    {
      description: 'Weed',
      denom_units: [
        {
          denom:
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
          exponent: 0
        },
        {
          denom: 'WEED',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
      name: 'WEED',
      display: 'WEED',
      symbol: 'WEED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
        }
      ]
    },
    {
      description: 'Bulldog',
      denom_units: [
        {
          denom:
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
          exponent: 0
        },
        {
          denom: 'BDOG',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
      name: 'BDOG',
      display: 'BDOG',
      symbol: 'BDOG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
        }
      ]
    },
    {
      description: 'CaneCorso',
      denom_units: [
        {
          denom:
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
          exponent: 0
        },
        {
          denom: 'CORSO',
          exponent: 6
        }
      ],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
      name: 'CORSO',
      display: 'CORSO',
      symbol: 'CORSO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
        }
      ]
    }
  ]
};
export default info;
