import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'terpnetwork',
  assets: [
    {
      description:
        "Terp Token (TERP) is the Terp Network's native utility token, used as the primary means to govern & secure the blockchain.",
      denom_units: [
        {
          denom: 'uterp',
          exponent: 0
        },
        {
          denom: 'terp',
          exponent: 6
        }
      ],
      base: 'uterp',
      name: 'Terp Network Native Token',
      display: 'terp',
      symbol: 'TERP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
        }
      ]
    },
    {
      description:
        "Thiol Gas Token (Thiols) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain & incentivize participants.",
      denom_units: [
        {
          denom: 'uthiol',
          exponent: 0
        },
        {
          denom: 'thiol',
          exponent: 6
        }
      ],
      base: 'uthiol',
      name: 'Thiol Terp Gas Token',
      display: 'thiol',
      symbol: 'THIOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
        }
      ]
    }
  ]
};
export default info;
