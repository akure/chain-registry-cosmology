import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cosmoshubtestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [
        {
          denom: 'uatom',
          exponent: 0
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'uatom',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ]
    }
  ]
};
export default info;
