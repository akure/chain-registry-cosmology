import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'aptos',
  assets: [
    {
      description:
        'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [
        {
          denom: '0x1::aptos_coin::AptosCoin',
          exponent: 0,
          aliases: ['Octa']
        },
        {
          denom: 'APT',
          exponent: 8
        }
      ],
      base: '0x1::aptos_coin::AptosCoin',
      name: 'Aptos Coin',
      display: 'APT',
      symbol: 'APT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      },
      coingecko_id: 'aptos',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            dark_mode: true
          }
        }
      ]
    }
  ]
};
export default info;
