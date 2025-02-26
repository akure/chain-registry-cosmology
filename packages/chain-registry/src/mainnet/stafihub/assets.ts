import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stafihub',
  assets: [
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom: 'ufis',
          exponent: 0
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      base: 'ufis',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom: 'uratom',
          exponent: 0
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      base: 'uratom',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'StaFiHub'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked IRISs',
      denom_units: [
        {
          denom: 'uriris',
          exponent: 0
        },
        {
          denom: 'riris',
          exponent: 6
        }
      ],
      base: 'uriris',
      name: 'rIRIS',
      display: 'riris',
      symbol: 'rIRIS',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris'
          },
          provider: 'StaFiHub'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked HUAHUAs',
      denom_units: [
        {
          denom: 'urhuahua',
          exponent: 0
        },
        {
          denom: 'rhuahua',
          exponent: 6
        }
      ],
      base: 'urhuahua',
      name: 'rHUAHUA',
      display: 'rhuahua',
      symbol: 'rHUAHUA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua'
          },
          provider: 'StaFiHub'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked SWTHs',
      denom_units: [
        {
          denom: 'urswth',
          exponent: 0
        },
        {
          denom: 'rswth',
          exponent: 8
        }
      ],
      base: 'urswth',
      name: 'rSWTH',
      display: 'rswth',
      symbol: 'rSWTH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'carbon',
            base_denom: 'uswth'
          },
          provider: 'StaFiHub'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
        }
      ]
    }
  ]
};
export default info;
