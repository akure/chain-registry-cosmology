import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'gateway',
  assets: [
    {
      description: 'The native fee token of Gateway.',
      denom_units: [
        {
          denom: 'utest',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'test',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'sdk.coin',
      base: 'utest',
      name: 'Test',
      display: 'test',
      symbol: 'TEST'
    },
    {
      description: 'the native staking token of Gateway.',
      denom_units: [
        {
          denom: 'uworm',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'worm',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'sdk.coin',
      base: 'uworm',
      name: 'Worm',
      display: 'worm',
      symbol: 'WORM'
    },
    {
      description:
        'Sui (Wormhole), SUI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      name: 'Sui (Wormhole)',
      symbol: 'SUI',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      }
    },
    {
      description:
        'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      name: 'Wrapped Ether (Wormhole)',
      symbol: 'WETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Wormhole'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }
      ]
    },
    {
      description:
        'Wrapped liquid staked Ether 2.0 (Wormhole), wstETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
      display: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
      name: 'Wrapped liquid staked Ether 2.0 (Wormhole)',
      symbol: 'wstETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description:
        'Aptos Coin (Wormhole), APT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      name: 'Aptos Coin (Wormhole)',
      symbol: 'APT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      }
    },
    {
      description:
        'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      name: 'Tether USD (Wormhole)',
      symbol: 'USDT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description:
        'Wrapped SOL (Wormhole), SOL, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      name: 'Wrapped SOL (Wormhole)',
      symbol: 'SOL',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      }
    },
    {
      description:
        'Bonk (Wormhole), Bonk, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }
      ],
      address:
        'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      name: 'Bonk (Wormhole)',
      symbol: 'Bonk',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      }
    },
    {
      description:
        'Wrapped BTC (Wormhole), WBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
      display: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
      name: 'Wrapped BTC (Wormhole)',
      symbol: 'WBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      }
    },
    {
      description:
        'tBTC v2 (Wormhole), tBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
      display: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
      name: 'tBTC v2 (Wormhole)',
      symbol: 'tBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
      }
    },
    {
      description:
        'Dai Stablecoin (Wormhole), DAI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
      display: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
      name: 'Dai Stablecoin (Wormhole)',
      symbol: 'DAI',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      }
    },
    {
      description:
        'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      name: 'USD Coin (Wormhole)',
      symbol: 'USDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description:
        'Avalanche USD Coin (Wormhole), Avalanche USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
      display: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
      name: 'Avalanche USD Coin (Wormhole)',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description:
        'Pyth Network (Wormhole), PYTH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3']
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      name: 'Pyth Network',
      symbol: 'PYTH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      }
    },
    {
      description:
        'Solana USD Coin (Wormhole), Solana USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      denom_units: [
        {
          denom:
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
          exponent: 0,
          aliases: []
        },
        {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      name: 'Solana USD Coin (Wormhole)',
      symbol: 'solana.USDC.wh',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          provider: 'Wormhole'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default info;
