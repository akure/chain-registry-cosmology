import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'scorum',
  assets: [
    {
      description: 'The native token of Scorum',
      denom_units: [
        {
          denom: 'nscr',
          exponent: 0
        },
        {
          denom: 'scr',
          exponent: 9
        }
      ],
      base: 'nscr',
      name: 'Scorum',
      display: 'scr',
      symbol: 'SCR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
        }
      ]
    },
    {
      description: 'Scorum Power used for internal mechanics and staking',
      denom_units: [
        {
          denom: 'nsp',
          exponent: 0
        },
        {
          denom: 'sp',
          exponent: 9
        }
      ],
      base: 'nsp',
      name: 'Scorum Power',
      display: 'sp',
      symbol: 'SP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg'
        }
      ]
    },
    {
      description: 'Virtual(non-transferable) coin used to pay gas',
      denom_units: [
        {
          denom: 'gas',
          exponent: 0
        }
      ],
      base: 'gas',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg'
        }
      ]
    }
  ]
};
export default info;
