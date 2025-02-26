import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'avalanchetestnet',
  assets: [
    {
      description:
        'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'wei',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      coingecko_id: 'avalanche-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }
      ]
    },
    {
      description:
        'The wrapped ERC-20 representation of AVAX, the native token of Avalanche.',
      type_asset: 'erc20',
      address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      denom_units: [
        {
          denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'wavax',
          exponent: 18
        }
      ],
      base: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      name: 'Wrapped AVAX',
      display: 'wavax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'avalanchetestnet',
            base_denom: 'wei'
          },
          provider: 'Avalanche'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      coingecko_id: 'wrapped-avax',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      type_asset: 'erc20',
      address: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
      denom_units: [
        {
          denom: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'axlusdc',
          exponent: 6
        }
      ],
      base: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
      name: 'Axelar Wrapped USDC',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'uusdc'
          },
          provider: 'Axelar'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    }
  ]
};
export default info;
