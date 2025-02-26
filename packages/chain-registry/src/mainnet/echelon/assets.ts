import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'echelon',
  assets: [
    {
      description:
        'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [
        {
          denom: 'aechelon',
          exponent: 0
        },
        {
          denom: 'echelon',
          exponent: 18
        }
      ],
      base: 'aechelon',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      coingecko_id: 'echelon',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }
      ]
    }
  ]
};
export default info;
