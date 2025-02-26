import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'panacea',
  assets: [
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom: 'umed',
          exponent: 0
        },
        {
          denom: 'med',
          exponent: 6
        }
      ],
      base: 'umed',
      name: 'MediBloc',
      display: 'med',
      symbol: 'MED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      coingecko_id: 'medibloc',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }
      ]
    }
  ]
};
export default info;
