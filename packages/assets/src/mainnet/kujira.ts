import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'kujira',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/FD021051CD0A21590CAC7907B22749B19CC8CCB6A22DE48C21FE7D9EF1EE80B7',
          exponent: 0,
          aliases: ['aacre']
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      base: 'ibc/FD021051CD0A21590CAC7907B22749B19CC8CCB6A22DE48C21FE7D9EF1EE80B7',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/5F46DC002154B34EF0E2FA269A128B70946B8A45B2544433479F74594715495E',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      base: 'ibc/5F46DC002154B34EF0E2FA269A128B70946B8A45B2544433479F74594715495E',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/BF603AD88AA4C36FC8CA99F6D703CA1D7D437A1EA97023A73A8BA4437A05ABDF',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      base: 'ibc/BF603AD88AA4C36FC8CA99F6D703CA1D7D437A1EA97023A73A8BA4437A05ABDF',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }
      ]
    },
    {
      description:
        'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [
        {
          denom:
            'ibc/AA74EA0A76E85DF5254D2E92B3E656C4CB8B1213AEA7EB45D1F22FC26C754946',
          exponent: 0,
          aliases: ['ubld']
        },
        {
          denom: 'bld',
          exponent: 6
        }
      ],
      base: 'ibc/AA74EA0A76E85DF5254D2E92B3E656C4CB8B1213AEA7EB45D1F22FC26C754946',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }
      ]
    },
    {
      description:
        'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [
        {
          denom:
            'ibc/3FE1543C50A8C05CCA7B7C80475B6E615F6E280D4C1C66B76A57981F41CEAE9A',
          exponent: 0,
          aliases: ['uist']
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      base: 'ibc/3FE1543C50A8C05CCA7B7C80475B6E615F6E280D4C1C66B76A57981F41CEAE9A',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-61'
          }
        }
      ]
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/7023F9629A70F8112764D959D04F52EA3115A0AED3CEE59694799FD8C91A97FA',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      base: 'ibc/7023F9629A70F8112764D959D04F52EA3115A0AED3CEE59694799FD8C91A97FA',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Akash',
      denom_units: [
        {
          denom:
            'ibc/38CE08C487DDAC0A0025B96AECEABA5F038ACDE843CD6EF1486CAC14C002EBE6',
          exponent: 0,
          aliases: [
            'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/38CE08C487DDAC0A0025B96AECEABA5F038ACDE843CD6EF1486CAC14C002EBE6',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom:
              'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-64'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [
        {
          denom:
            'ibc/AB5A3681C25F2FEE9F167C0345D6E7C52DBDFE6D6ADD38A76BF6A0028F42426D',
          exponent: 0,
          aliases: ['uandr']
        },
        {
          denom: 'andr',
          exponent: 6
        }
      ],
      coingecko_id: 'andromeda-2',
      base: 'ibc/AB5A3681C25F2FEE9F167C0345D6E7C52DBDFE6D6ADD38A76BF6A0028F42426D',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }
      ]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom:
            'ibc/950993C6DA64F5A60A48D65A18CAB2D8190DE2DC1B861E70E8B03C61F7D5FBDC',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/950993C6DA64F5A60A48D65A18CAB2D8190DE2DC1B861E70E8B03C61F7D5FBDC',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-99'
          }
        }
      ]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/DBED819CC199D40839F4B193A687D8738242490B8C0199CD3409323A7F2D5835',
          exponent: 0,
          aliases: [
            'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278'
          ]
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DBED819CC199D40839F4B193A687D8738242490B8C0199CD3409323A7F2D5835',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom:
              'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-99'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
      }
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/E815EFB31D29E2F776839207B5918B7F26B3DEB9596973839B427DDCBD8505A1',
          exponent: 0,
          aliases: [
            'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1'
          ]
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E815EFB31D29E2F776839207B5918B7F26B3DEB9596973839B427DDCBD8505A1',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom:
              'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-99'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'vidulum',
            base_denom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/78E27527E43675AC6AD1466EFBB9948835EF37FB450CDC0775673DCBE856A4AF',
          exponent: 0,
          aliases: ['umntl']
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      base: 'ibc/78E27527E43675AC6AD1466EFBB9948835EF37FB450CDC0775673DCBE856A4AF',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      coingecko_id: 'assetmantle',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingecko_id: 'axlusdc',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: "Frax's fractional-algorithmic stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
          exponent: 0,
          aliases: ['frax-wei']
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      base: 'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'frax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      ]
    },
    {
      description: 'Dai stablecoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
          exponent: 0,
          aliases: ['dai-wei']
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      base: 'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'dai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
        }
      ]
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
          exponent: 0,
          aliases: ['uusdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uusdt',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        }
      ]
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
          exponent: 0,
          aliases: ['weth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'weth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      base: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wbtc-satoshi',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ]
    },
    {
      description: 'Aave on Axelar',
      denom_units: [
        {
          denom:
            'ibc/5E6061C9FE6FC8E5E4E0B7A9313561D28BA6D2A246877DF0FB6636EEEA055131',
          exponent: 0,
          aliases: ['aave-wei']
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      base: 'ibc/5E6061C9FE6FC8E5E4E0B7A9313561D28BA6D2A246877DF0FB6636EEEA055131',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'aave-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }
      ]
    },
    {
      description: 'ApeCoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1C9CC36F8E961719EAF52D4A2ECAB84538D0425C63CAC77D516BF07FFAF931D5',
          exponent: 0,
          aliases: ['ape-wei']
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      base: 'ibc/1C9CC36F8E961719EAF52D4A2ECAB84538D0425C63CAC77D516BF07FFAF931D5',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ape-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }
      ]
    },
    {
      description: 'Axie Infinity Shard on Axelar',
      denom_units: [
        {
          denom:
            'ibc/5181AFC5D9858E80212EE5C9F35D52DAE4E26AD5F55B19DD633206C51DECB6AF',
          exponent: 0,
          aliases: ['axs-wei']
        },
        {
          denom: 'axs',
          exponent: 18
        }
      ],
      base: 'ibc/5181AFC5D9858E80212EE5C9F35D52DAE4E26AD5F55B19DD633206C51DECB6AF',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'axs-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }
      ]
    },
    {
      description: 'Chainlink on Axelar',
      denom_units: [
        {
          denom:
            'ibc/FC59D6840A41252352263CEA2B832BB86D68D03CBA194263CB9F3C15946796FB',
          exponent: 0,
          aliases: ['link-wei']
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      base: 'ibc/FC59D6840A41252352263CEA2B832BB86D68D03CBA194263CB9F3C15946796FB',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'link-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }
      ]
    },
    {
      description: 'Maker on Axelar',
      denom_units: [
        {
          denom:
            'ibc/31A4E6623063E702FB9CF2E7B616DFCCDE319CA2FC4775CDFF26F29F628E7ACF',
          exponent: 0,
          aliases: ['mkr-wei']
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      base: 'ibc/31A4E6623063E702FB9CF2E7B616DFCCDE319CA2FC4775CDFF26F29F628E7ACF',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'mkr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }
      ]
    },
    {
      description: 'Rai Reflex Index on Axelar',
      denom_units: [
        {
          denom:
            'ibc/4CA23432A78B272A9EB7010CB72A15A199066D239F1B13BB583F3945EB8A315C',
          exponent: 0,
          aliases: ['rai-wei']
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      base: 'ibc/4CA23432A78B272A9EB7010CB72A15A199066D239F1B13BB583F3945EB8A315C',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'rai-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }
      ]
    },
    {
      description: 'Shiba Inu on Axelar',
      denom_units: [
        {
          denom:
            'ibc/43BF3152103ED706E207005E7C433AB3440572C1D444FFE49321A0EF6A8EFC82',
          exponent: 0,
          aliases: ['shib-wei']
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      base: 'ibc/43BF3152103ED706E207005E7C433AB3440572C1D444FFE49321A0EF6A8EFC82',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'shib-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }
      ]
    },
    {
      description: 'Lido Staked Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/CA856BEC686F1F2DCFA410D282B1325D98B8AB81436A626F4214B7BF441AAA98',
          exponent: 0,
          aliases: ['steth-wei']
        },
        {
          denom: 'steth',
          exponent: 18
        }
      ],
      base: 'ibc/CA856BEC686F1F2DCFA410D282B1325D98B8AB81436A626F4214B7BF441AAA98',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'steth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }
      ]
    },
    {
      description: 'Uniswap on Axelar',
      denom_units: [
        {
          denom:
            'ibc/0A88A08F3E9573DB9D8CB74AA3746F6D23C41C3EE7B6CC5AA4695A1DD74FF86B',
          exponent: 0,
          aliases: ['uni-wei']
        },
        {
          denom: 'uni',
          exponent: 18
        }
      ],
      base: 'ibc/0A88A08F3E9573DB9D8CB74AA3746F6D23C41C3EE7B6CC5AA4695A1DD74FF86B',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'uni-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }
      ]
    },
    {
      description: 'Chain on Axelar',
      denom_units: [
        {
          denom:
            'ibc/7558FFC9B72318EC0510FC99970F079AA28CE1D96B3C34A775A0CCDBE5A2D500',
          exponent: 0,
          aliases: ['xcn-wei']
        },
        {
          denom: 'xcn',
          exponent: 18
        }
      ],
      base: 'ibc/7558FFC9B72318EC0510FC99970F079AA28CE1D96B3C34A775A0CCDBE5A2D500',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'xcn-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }
      ]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539',
          exponent: 0,
          aliases: ['dot-planck']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      base: 'ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539',
      name: 'Wrapped Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'dot-planck',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ]
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom:
            'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wglmr-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ]
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom:
            'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wmatic-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }
      ]
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom:
            'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wbnb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }
      ]
    },
    {
      description: 'Binance USD on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
          exponent: 0,
          aliases: ['busd-wei']
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      base: 'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'busd-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }
      ]
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wavax-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ]
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wftm-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      ]
    },
    {
      description: "Circle's stablecoin from Polygon on Axelar",
      denom_units: [
        {
          denom:
            'ibc/7712A3178B36586E44B4AF56B68EFB648EF32ED855F79D61D845858D919458F2',
          exponent: 0,
          aliases: ['polygon-uusdc']
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/7712A3178B36586E44B4AF56B68EFB648EF32ED855F79D61D845858D919458F2',
      name: 'USD Coin from Polygon',
      display: 'polygon-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'polygon-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: "Circle's stablecoin from Avalanche on Axelar",
      denom_units: [
        {
          denom:
            'ibc/C9397AFC209C4C14BCADAC0CBCAA2D2ABEDE4A5D3B94FFCDCD1175F589C10445',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      base: 'ibc/C9397AFC209C4C14BCADAC0CBCAA2D2ABEDE4A5D3B94FFCDCD1175F589C10445',
      name: 'USD Coin from Avalanche',
      display: 'avalanche-usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'avalanche-uusdc',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description: 'Wrapped FIL on Axelar',
      denom_units: [
        {
          denom:
            'ibc/12B075C6C552060240E92A4A215CAF4DB0F1CA98F90897AB30282B9A15842595',
          exponent: 0,
          aliases: ['wfil-wei']
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      base: 'ibc/12B075C6C552060240E92A4A215CAF4DB0F1CA98F90897AB30282B9A15842595',
      name: 'Wrapped FIL from Filecoin',
      display: 'fil',
      symbol: 'axlFIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wfil-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
        }
      ]
    },
    {
      description: 'Arbitrum on Axelar',
      denom_units: [
        {
          denom:
            'ibc/96179F5B44CCC15E03AB43D7118E714B4D5CE8F187F7D8A60F2A514299761EA9',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      base: 'ibc/96179F5B44CCC15E03AB43D7118E714B4D5CE8F187F7D8A60F2A514299761EA9',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'arb-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0447761C090DB521DAC0268E8CB4EBF567E519B937DE6FECD2472AA6A1EDE658',
          exponent: 0,
          aliases: ['pepe-wei']
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      base: 'ibc/0447761C090DB521DAC0268E8CB4EBF567E519B937DE6FECD2472AA6A1EDE658',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'pepe-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/3F782FAA0722C47BA753F60010148DB067BD916F3894931552F5007CF5F5F2BC',
          exponent: 0,
          aliases: ['cbeth-wei']
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      base: 'ibc/3F782FAA0722C47BA753F60010148DB067BD916F3894931552F5007CF5F5F2BC',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'cbeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0ABEC6EE026C0BEE3712CE58BC0A5D7A7B8B8130535094E459152CB562C1EC85',
          exponent: 0,
          aliases: ['reth-wei']
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      base: 'ibc/0ABEC6EE026C0BEE3712CE58BC0A5D7A7B8B8130535094E459152CB562C1EC85',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'reth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/579194AD6EB1B02FE30D7031EF284C1BB7B272EE5F7700462CD8B3DECB542175',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      base: 'ibc/579194AD6EB1B02FE30D7031EF284C1BB7B272EE5F7700462CD8B3DECB542175',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'sfrxeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B572E6F30E7C33D78A50D8B4E973A9C118C30F848DF31A95FAA5E4C7450A8BD0',
          exponent: 0,
          aliases: ['wsteth-wei']
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      base: 'ibc/B572E6F30E7C33D78A50D8B4E973A9C118C30F848DF31A95FAA5E4C7450A8BD0',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'wsteth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
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
      denom_units: [
        {
          denom:
            'ibc/B4B3B08FE5FEA65CB25E467C9D95D180A6CDB0EBE730E7BB20CA1BF6C9A80D9B',
          exponent: 0,
          aliases: ['yieldeth-wei']
        },
        {
          denom: 'YieldETH',
          exponent: 18
        }
      ],
      base: 'ibc/B4B3B08FE5FEA65CB25E467C9D95D180A6CDB0EBE730E7BB20CA1BF6C9A80D9B',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'yieldeth-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/2EDD873C800111E6997DD01721079A0BA961DC79B1DE367FBA043BAC45C556F4',
          exponent: 0,
          aliases: ['ox-wei']
        },
        {
          denom: 'ox',
          exponent: 18
        }
      ],
      base: 'ibc/2EDD873C800111E6997DD01721079A0BA961DC79B1DE367FBA043BAC45C556F4',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'ox-wei',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      }
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/FFA3D0E9C3CDE729559FB71A09E9E6CFA5A85AFABAC9F3CB5DD3942BFF935F9C',
          exponent: 0,
          aliases: ['swth']
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/FFA3D0E9C3CDE729559FB71A09E9E6CFA5A85AFABAC9F3CB5DD3942BFF935F9C',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [
        {
          denom:
            'ibc/ED2B26865124554B3DFCA21B72A86B2864669295696C8684171CD54E1C7C67A4',
          exponent: 0,
          aliases: ['usc']
        },
        {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/ED2B26865124554B3DFCA21B72A86B2864669295696C8684171CD54E1C7C67A4',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ]
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/47212EE247EF64B87B0A7F61901CCF1EC05AC25DA0BA1989EA4A28955CD4FE8E',
          exponent: 0,
          aliases: ['bnb.1.6.773edb']
        },
        {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }
      ],
      base: 'ibc/47212EE247EF64B87B0A7F61901CCF1EC05AC25DA0BA1989EA4A28955CD4FE8E',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'bnb.1.6.773edb',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }
      ]
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/5645072E518F2EE362EE57EB9CCFCDFE01F9480ED49FE76449C939CB5C9B7B72',
          exponent: 0,
          aliases: ['bneo.1.14.e2e5f6']
        },
        {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }
      ],
      base: 'ibc/5645072E518F2EE362EE57EB9CCFCDFE01F9480ED49FE76449C939CB5C9B7B72',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'bneo.1.14.e2e5f6',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
        }
      ]
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/614AE0D401204BA1792A01DDE46263BDEC6A4524CA6108137E2FA891640F6990',
          exponent: 0,
          aliases: ['busd.1.6.754a80']
        },
        {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }
      ],
      base: 'ibc/614AE0D401204BA1792A01DDE46263BDEC6A4524CA6108137E2FA891640F6990',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'busd.1.6.754a80',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }
      ]
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [
        {
          denom:
            'ibc/369F7CA80FD18C2E79CD25A3BD371EF9C735C3210C20A812625CC2CBE52DB6EF',
          exponent: 0,
          aliases: ['cglp.1.19.1698d3']
        },
        {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }
      ],
      base: 'ibc/369F7CA80FD18C2E79CD25A3BD371EF9C735C3210C20A812625CC2CBE52DB6EF',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'cglp.1.19.1698d3',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
        }
      ]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [
        {
          denom:
            'ibc/8374139B2BFECF639A2C0A84E53B7492329C95123B21F84324E8825B50EF0E8F',
          exponent: 0,
          aliases: ['cgt/1']
        },
        {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }
      ],
      base: 'ibc/8374139B2BFECF639A2C0A84E53B7492329C95123B21F84324E8825B50EF0E8F',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ]
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/6EFB95337CFA11E7C27BA79FE1ACBD0AE153114FEFE575FEE9EF2989FC40507A',
          exponent: 0,
          aliases: ['eth.1.19.c3b805']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/6EFB95337CFA11E7C27BA79FE1ACBD0AE153114FEFE575FEE9EF2989FC40507A',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'eth.1.19.c3b805',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }
      ]
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/DEB81A21B8112F2D29BF9A516AC853276F7AAD22B0DF3EE95E9E26FBA8F7B15B',
          exponent: 0,
          aliases: ['eth.1.2.942d87']
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }
      ],
      base: 'ibc/DEB81A21B8112F2D29BF9A516AC853276F7AAD22B0DF3EE95E9E26FBA8F7B15B',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'eth.1.2.942d87',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }
      ]
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/B33CEB612F076CAF7898B7AA6C194197534A18FB81558E787CDDCEBC6868B522',
          exponent: 0,
          aliases: ['usdc.1.2.343151']
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/B33CEB612F076CAF7898B7AA6C194197534A18FB81558E787CDDCEBC6868B522',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'usdc.1.2.343151',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
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
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/FAB5403C99727B365922AAA188368C106D145DCDA0D49924C7A3B4126703054F',
          exponent: 0,
          aliases: ['usdc.1.6.53ff75']
        },
        {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }
      ],
      base: 'ibc/FAB5403C99727B365922AAA188368C106D145DCDA0D49924C7A3B4126703054F',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'usdc.1.6.53ff75',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
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
    },
    {
      description: 'ZIL token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/3D6A5F869A74299B52FFA9E3288C27B917C6762EE3C63491E78C90CE9BA42C71',
          exponent: 0,
          aliases: ['zil.1.18.1a4a06']
        },
        {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL']
        }
      ],
      base: 'ibc/3D6A5F869A74299B52FFA9E3288C27B917C6762EE3C63491E78C90CE9BA42C71',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'zil.1.18.1a4a06',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
          exponent: 0,
          aliases: ['ucmdx']
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      base: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/46B7745F093B6185D871EBE8EA3B3EDE54E7CBFDF9B8DB6EE0F8DF3446B388A5',
          exponent: 0,
          aliases: ['uharbor']
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      base: 'ibc/46B7745F093B6185D871EBE8EA3B3EDE54E7CBFDF9B8DB6EE0F8DF3446B388A5',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/1603E8643A49AD47F536F645A4BF0E4C1E06C76F0A98CBE8054B177F1EE7C39A',
          exponent: 0,
          aliases: ['ucmst']
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      base: 'ibc/1603E8643A49AD47F536F645A4BF0E4C1E06C76F0A98CBE8054B177F1EE7C39A',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom:
            'ibc/22F3DC562FEA2148D9D7B15E31FA1F00F211C241C0D367435D9AB61506FE5857',
          exponent: 0,
          aliases: ['ppica']
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      base: 'ibc/22F3DC562FEA2148D9D7B15E31FA1F00F211C241C0D367435D9AB61506FE5857',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'ppica',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/7E2985D74ED3A2C0136260B0D4BE3D45E8424C2F3DFEF2BA6A5717C669EA9124',
          exponent: 0,
          aliases: [
            'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9'
          ]
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7E2985D74ED3A2C0136260B0D4BE3D45E8424C2F3DFEF2BA6A5717C669EA9124',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom:
              'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/92572BDB00B1A7052B4F557F7925D30CB05A4D5F643314B0697709C560CEC39F',
          exponent: 0,
          aliases: [
            'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/92572BDB00B1A7052B4F557F7925D30CB05A4D5F643314B0697709C560CEC39F',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom:
              'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description:
        'The native staking and governance token of Statemine parachain.',
      denom_units: [
        {
          denom:
            'ibc/B0E2B4DF9639C38A4256F50F494AE240DD92560E0256E563082561F517BB49BB',
          exponent: 0,
          aliases: [
            'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B0E2B4DF9639C38A4256F50F494AE240DD92560E0256E563082561F517BB49BB',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom:
              'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-101'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130'
          }
        }
      ]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom:
            'ibc/DF2EE65970C03A37C3CA55884601329BEDB32B155B52F9B6B1D5D4CBB8AD9BA4',
          exponent: 0,
          aliases: ['ucore']
        },
        {
          denom: 'core',
          exponent: 6
        }
      ],
      base: 'ibc/DF2EE65970C03A37C3CA55884601329BEDB32B155B52F9B6B1D5D4CBB8AD9BA4',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-122'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-343',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on the Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB',
          exponent: 0,
          aliases: [
            'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB816E4CD95F1E1A446D7282C9F3D05F99D2E6B5EBA12E3AF6A8F8281DB84AEB',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-343',
            base_denom:
              'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'FX on Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE',
          exponent: 0,
          aliases: [
            'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EBBE6553941A1F0111A9163F885F7665417467FB630D68F5D4F15425C1E64FDE',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-343',
            base_denom:
              'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      }
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/E41F596AC5F1BF0298758CC40CBF1DB2DA0615F10BF28E4D9E82B9EEE7A0DBF2',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      base: 'ibc/E41F596AC5F1BF0298758CC40CBF1DB2DA0615F10BF28E4D9E82B9EEE7A0DBF2',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-67'
          }
        }
      ]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/3B75D0590D8691FF6C682F7E2E7A177DC36CBC49C9848FBF06959E8F42FA9193',
          exponent: 0,
          aliases: ['ubcre']
        },
        {
          denom: 'bcre',
          exponent: 6
        }
      ],
      base: 'ibc/3B75D0590D8691FF6C682F7E2E7A177DC36CBC49C9848FBF06959E8F42FA9193',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-67'
          }
        }
      ]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/6A4CEDCEA40B587A4BCF7FDFB1D5A13D13F8A807A22A4E759EA702640CE086B0',
          exponent: 0,
          aliases: ['adydx']
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      base: 'ibc/6A4CEDCEA40B587A4BCF7FDFB1D5A13D13F8A807A22A4E759EA702640CE086B0',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-118'
          }
        }
      ]
    },
    {
      description: 'Noble USDC on dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/AF62E69333BAF0AB427E36B00166E6A317660BCDB949631A6DA006B231D28FD8',
          exponent: 0,
          aliases: [
            'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AF62E69333BAF0AB427E36B00166E6A317660BCDB949631A6DA006B231D28FD8',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom:
              'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-118'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom:
            'ibc/9012F7E79EACC34CE81A4404ECBEED5A5DFFD61CCEE23F2B8600BAC948C483E6',
          exponent: 0,
          aliases: ['adym']
        },
        {
          denom: 'dym',
          exponent: 18
        }
      ],
      base: 'ibc/9012F7E79EACC34CE81A4404ECBEED5A5DFFD61CCEE23F2B8600BAC948C483E6',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom:
            'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
          exponent: 0,
          aliases: ['aevmos']
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      base: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Evmos',
      denom_units: [
        {
          denom:
            'ibc/C7C70DFF414C982BF81BB55D16690BA97A04DAE6A5A7DFFAEF285CAAF5EF4792',
          exponent: 0,
          aliases: [
            'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C7C70DFF414C982BF81BB55D16690BA97A04DAE6A5A7DFFAEF285CAAF5EF4792',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom:
              'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [
        {
          denom:
            'ibc/0B41F8EB39912A15611BC834EB98962B59EE03C4CA8F781E709BB875BC18DC4B',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        },
        {
          denom: 'neok',
          exponent: 18
        }
      ],
      base: 'ibc/0B41F8EB39912A15611BC834EB98962B59EE03C4CA8F781E709BB875BC18DC4B',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }
      ]
    },
    {
      description: 'The token of Teledisko DAO.',
      denom_units: [
        {
          denom:
            'ibc/845D9E1C29A73366D4EF35195110815AB8687C9E976522BF5BA1CEC2EFAECB97',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        },
        {
          denom: 'berlin',
          exponent: 18
        }
      ],
      base: 'ibc/845D9E1C29A73366D4EF35195110815AB8687C9E976522BF5BA1CEC2EFAECB97',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-23'
          }
        }
      ]
    },
    {
      description: 'The native token of Furya',
      denom_units: [
        {
          denom:
            'ibc/359AF48D8512344FD8B6514CA79C26AC120B4F12FFE2D2A46528A58439272BD5',
          exponent: 0,
          aliases: ['ufury']
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      base: 'ibc/359AF48D8512344FD8B6514CA79C26AC120B4F12FFE2D2A46528A58439272BD5',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-119'
          }
        }
      ]
    },
    {
      description: 'The native fee token of Gateway.',
      denom_units: [
        {
          denom:
            'ibc/608B2FA2CC241DC41B3D8CBF7DB2A0D11B4636B859FE4A8A73F1F5DBAAB3745B',
          exponent: 0,
          aliases: ['utest']
        },
        {
          denom: 'test',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/608B2FA2CC241DC41B3D8CBF7DB2A0D11B4636B859FE4A8A73F1F5DBAAB3745B',
      name: 'Test',
      display: 'test',
      symbol: 'TEST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'utest',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }
      ]
    },
    {
      description: 'the native staking token of Gateway.',
      denom_units: [
        {
          denom:
            'ibc/B07CA9FD2C05A5D34E517647E18B84B33A9AC7FF5BC12E334D63F63D4EDC37DF',
          exponent: 0,
          aliases: ['uworm']
        },
        {
          denom: 'worm',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/B07CA9FD2C05A5D34E517647E18B84B33A9AC7FF5BC12E334D63F63D4EDC37DF',
      name: 'Worm',
      display: 'worm',
      symbol: 'WORM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uworm',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }
      ]
    },
    {
      description:
        'Sui (Wormhole), SUI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      denom_units: [
        {
          denom:
            'ibc/EBA52E7239CC1BC7F8ECF4F41523B6DD477FF067FD953315704A9A4FD2131B48',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          ]
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y',
      base: 'ibc/EBA52E7239CC1BC7F8ECF4F41523B6DD477FF067FD953315704A9A4FD2131B48',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      name: 'Sui (Wormhole)',
      symbol: 'SUI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/7D9D28CABB49A4BB1A50C3B7E4544BFDBC5DDFAEB84A7787755A34CE7196CE15',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          ]
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm',
      base: 'ibc/7D9D28CABB49A4BB1A50C3B7E4544BFDBC5DDFAEB84A7787755A34CE7196CE15',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      name: 'Wrapped Ether (Wormhole)',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/2A2F8625107E0DA8A9457206086B691AA7ADBAD0CDBE612C0673E75D9AD333DC',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b'
          ]
        },
        {
          denom: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt',
      base: 'ibc/2A2F8625107E0DA8A9457206086B691AA7ADBAD0CDBE612C0673E75D9AD333DC',
      display: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
      name: 'Wrapped liquid staked Ether 2.0 (Wormhole)',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/65BA5412B0FF40DABDCA5EBF26A1A6E04C49A8263BFD7961D72E2FC5CC3AD0DA',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          ]
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0',
      base: 'ibc/65BA5412B0FF40DABDCA5EBF26A1A6E04C49A8263BFD7961D72E2FC5CC3AD0DA',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      name: 'Aptos Coin (Wormhole)',
      symbol: 'APT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/67444CF45C68D90AE33FA7DB2244365AC014EE295D2393B0C43AB1905208A2F7',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          ]
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw',
      base: 'ibc/67444CF45C68D90AE33FA7DB2244365AC014EE295D2393B0C43AB1905208A2F7',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      name: 'Tether USD (Wormhole)',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          ]
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl',
      base: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      name: 'Wrapped SOL (Wormhole)',
      symbol: 'SOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/BD9492BC1470FA29CBAEB39BB384CAA2030B190362D0A16641465FCFD8A59FB2',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          ]
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }
      ],
      address:
        'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
      base: 'ibc/BD9492BC1470FA29CBAEB39BB384CAA2030B190362D0A16641465FCFD8A59FB2',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      name: 'Bonk (Wormhole)',
      symbol: 'Bonk',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/B2C7F21B604E3974A7DA5DAA9395905F2F3C85392F8A221CFDF62E4A9F4E48E4',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd'
          ]
        },
        {
          denom: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk',
      base: 'ibc/B2C7F21B604E3974A7DA5DAA9395905F2F3C85392F8A221CFDF62E4A9F4E48E4',
      display: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
      name: 'Wrapped BTC (Wormhole)',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/966410B7B51150145FE3905A5AB6106F38345007AA276744C916768413B7E52D',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw'
          ]
        },
        {
          denom: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5',
      base: 'ibc/966410B7B51150145FE3905A5AB6106F38345007AA276744C916768413B7E52D',
      display: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
      name: 'tBTC v2 (Wormhole)',
      symbol: 'tBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/3CE8A3DE4AE5AE2B4B8C03B2B227CC284732EDC849E506615FF2AA3D8EB1BAFC',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1'
          ]
        },
        {
          denom: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
          exponent: 8,
          aliases: []
        }
      ],
      address:
        'wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87',
      base: 'ibc/3CE8A3DE4AE5AE2B4B8C03B2B227CC284732EDC849E506615FF2AA3D8EB1BAFC',
      display: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
      name: 'Dai Stablecoin (Wormhole)',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/C5EADE2C526B9629D230AC02A97644984ACB7C2F9A6C85126D1025CB0DA42588',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          ]
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/C5EADE2C526B9629D230AC02A97644984ACB7C2F9A6C85126D1025CB0DA42588',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      name: 'USD Coin (Wormhole)',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/F9F41DB8DA49EA6AB9EB4B2C9E0ECDC2502ABDA2FE728B85994BF31240CBC163',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4'
          ]
        },
        {
          denom: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
          exponent: 6,
          aliases: []
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/F9F41DB8DA49EA6AB9EB4B2C9E0ECDC2502ABDA2FE728B85994BF31240CBC163',
      display: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
      name: 'Avalanche USD Coin (Wormhole)',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/B656797488F96D75AC8B779DAE42CA9EEC4589E563772748184DCCCC37842BCD',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          ]
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }
      ],
      address:
        'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/B656797488F96D75AC8B779DAE42CA9EEC4589E563772748184DCCCC37842BCD',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      name: 'Pyth Network',
      symbol: 'PYTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
            'ibc/CB95F3D1449858A77DAC28D660404698BC9F70561907820705FE9E4AE9DC4E9B',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          ]
        },
        {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/CB95F3D1449858A77DAC28D660404698BC9F70561907820705FE9E4AE9DC4E9B',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      name: 'Solana USD Coin (Wormhole)',
      symbol: 'solana.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-113'
          }
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
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/D20559F0071F4BFDFF519D0C12B77AFE2A4481D44214BD92808B0C36B1E223C9',
          exponent: 0,
          aliases: ['ugraviton']
        },
        {
          denom: 'graviton',
          exponent: 6
        }
      ],
      base: 'ibc/D20559F0071F4BFDFF519D0C12B77AFE2A4481D44214BD92808B0C36B1E223C9',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [
        {
          denom:
            'ibc/24DD547340629EACCFEFDE8461A0A40769239CBC9E2ADB2ED0C51C324EEB93A7',
          exponent: 0,
          aliases: ['gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006']
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      base: 'ibc/24DD547340629EACCFEFDE8461A0A40769239CBC9E2ADB2ED0C51C324EEB93A7',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [
        {
          denom:
            'ibc/35C18EBF8C2691FA9AAAAD0E8B9ECA8C3C903D681429C6017E3F6CE49B786E81',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        },
        {
          denom: 'gweth',
          exponent: 18
        }
      ],
      base: 'ibc/35C18EBF8C2691FA9AAAAD0E8B9ECA8C3C903D681429C6017E3F6CE49B786E81',
      name: 'Wrapped Ethereum',
      display: 'gweth',
      symbol: 'WETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [
        {
          denom:
            'ibc/3458D4A2653918EAE5926A6F7CB6DCE91C13DAECDB05AA40F050F8867A6649FE',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        },
        {
          denom: 'gusdc',
          exponent: 6
        }
      ],
      base: 'ibc/3458D4A2653918EAE5926A6F7CB6DCE91C13DAECDB05AA40F050F8867A6649FE',
      name: 'USD Coin',
      display: 'gusdc',
      symbol: 'USDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [
        {
          denom:
            'ibc/A8967E668E2BC3D603366FA33B3ADC8EFFD6E72CC9DB3827EAAD90245ADBAA45',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        },
        {
          denom: 'gusdt',
          exponent: 6
        }
      ],
      base: 'ibc/A8967E668E2BC3D603366FA33B3ADC8EFFD6E72CC9DB3827EAAD90245ADBAA45',
      name: 'Tether USD',
      display: 'gusdt',
      symbol: 'USDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [
        {
          denom:
            'ibc/E02A6F2BA8DD3F861DF43EB2F55F64A6B87E6F4838651000E20E9DC9FF0CB628',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        },
        {
          denom: 'gwbtc',
          exponent: 8
        }
      ],
      base: 'ibc/E02A6F2BA8DD3F861DF43EB2F55F64A6B87E6F4838651000E20E9DC9FF0CB628',
      name: 'Wrapped Bitcoin',
      display: 'gwbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [
        {
          denom:
            'ibc/7B87E813A8B02F4BC5B448C96A5DE131F2F5F6BA7DEDF0D9D3F0F2CA5BB256FA',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        },
        {
          denom: 'gdai',
          exponent: 18
        }
      ],
      base: 'ibc/7B87E813A8B02F4BC5B448C96A5DE131F2F5F6BA7DEDF0D9D3F0F2CA5BB256FA',
      name: 'Dai Stablecoin',
      display: 'gdai',
      symbol: 'DAI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge sDAI',
      denom_units: [
        {
          denom:
            'ibc/A8558A4C2F51A63B43509424886D9232375DD0105A7C448BFCC2A6791753DE2C',
          exponent: 0,
          aliases: ['gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA']
        },
        {
          denom: 'gsdai',
          exponent: 18
        }
      ],
      base: 'ibc/A8558A4C2F51A63B43509424886D9232375DD0105A7C448BFCC2A6791753DE2C',
      name: 'Savings Dai',
      display: 'gsdai',
      symbol: 'sDAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          image_sync: {
            base_denom: 'ethereum',
            chain_name: '0x83F20F44975D03b1b09e64809B757c47f942BEeA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge OCC',
      denom_units: [
        {
          denom:
            'ibc/20B9EECB038E06DF80B6E2C4B0D643BA39DD4C258E0D2CEDE65EB167C332AC75',
          exponent: 0,
          aliases: ['gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207']
        },
        {
          denom: 'gocc',
          exponent: 18
        }
      ],
      base: 'ibc/20B9EECB038E06DF80B6E2C4B0D643BA39DD4C258E0D2CEDE65EB167C332AC75',
      name: 'OccamFi',
      display: 'gocc',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
        }
      ]
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/CF7FDCF52614BF30B51105D734F0A6B6667A98EA2A780A29DB472650191EACC9',
          exponent: 0,
          aliases: ['gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        },
        {
          denom: 'page',
          exponent: 8
        }
      ],
      base: 'ibc/CF7FDCF52614BF30B51105D734F0A6B6667A98EA2A780A29DB472650191EACC9',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-107',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }
      ]
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/5A3DCF59BC9EC5C0BB7AA0CA0279FC2BB126640CB8B8F704F7BC2DC42495041B',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/5A3DCF59BC9EC5C0BB7AA0CA0279FC2BB126640CB8B8F704F7BC2DC42495041B',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Injective',
      denom_units: [
        {
          denom:
            'ibc/846FDFC7BD31A49FEAC3F48BF0974457F7B7E9E920661C98DED33C2E2C196586',
          exponent: 0,
          aliases: [
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/846FDFC7BD31A49FEAC3F48BF0974457F7B7E9E920661C98DED33C2E2C196586',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'ERIS liquid staked INJ',
      denom_units: [
        {
          denom:
            'ibc/6F8A3946F249E725EEF75926140F49884484BE86E29661DE9681218F212C4B1A',
          exponent: 0,
          aliases: ['factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ']
        },
        {
          denom: 'ampINJ',
          exponent: 6
        }
      ],
      base: 'ibc/6F8A3946F249E725EEF75926140F49884484BE86E29661DE9681218F212C4B1A',
      name: 'ERIS Amplified INJ',
      display: 'ampINJ',
      symbol: 'ampINJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom:
            'ibc/423DE4133F8676069BC9550FF251F1F870F6885621C8E363A9F70257BF3AA638',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      base: 'ibc/423DE4133F8676069BC9550FF251F1F870F6885621C8E363A9F70257BF3AA638',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      coingecko_id: 'autism',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom:
            'ibc/B3B78878425258831BDB0CB95CF8871E75E3CC80B15361A17108C2538816BC2F',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      base: 'ibc/B3B78878425258831BDB0CB95CF8871E75E3CC80B15361A17108C2538816BC2F',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      coingecko_id: 'dog-wif-nuchucks',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denom_units: [
        {
          denom:
            'ibc/830D949FC16B37291F0EAEA5D5677839DFD12972F267152DF0FD294E05B80677',
          exponent: 0,
          aliases: ['factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI']
        },
        {
          denom: 'WGMI',
          exponent: 6
        }
      ],
      base: 'ibc/830D949FC16B37291F0EAEA5D5677839DFD12972F267152DF0FD294E05B80677',
      name: 'WGMI',
      display: 'WGMI',
      symbol: 'WGMI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/E55D279CD184AD48C73755038EA7752D7C55DFB0211D2405243D3E15FD578EDB',
          exponent: 0,
          aliases: [
            'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3'
          ]
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E55D279CD184AD48C73755038EA7752D7C55DFB0211D2405243D3E15FD578EDB',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [
        {
          denom:
            'ibc/9C1B4780C6D5696D8BCB6DFB08289330C7875D3096C93658928D2A0F0B65A02C',
          exponent: 0,
          aliases: ['peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      base: 'ibc/9C1B4780C6D5696D8BCB6DFB08289330C7875D3096C93658928D2A0F0B65A02C',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      }
    },
    {
      description:
        'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/',
      denom_units: [
        {
          denom:
            'ibc/96CE430777F2F0F631EEF2AFF4C0C6230C4DD4A8193DAAC43A515D75F5A661AF',
          exponent: 0,
          aliases: ['factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava']
        },
        {
          denom: 'hava',
          exponent: 6
        }
      ],
      base: 'ibc/96CE430777F2F0F631EEF2AFF4C0C6230C4DD4A8193DAAC43A515D75F5A661AF',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom:
            'ibc/6D7BEE8B2512B43615CFC4A354BD2C9A6F1B2A9DBF537EF619CCA2AE8422E418',
          exponent: 0,
          aliases: [
            'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8'
          ]
        },
        {
          denom: 'BADKID',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6D7BEE8B2512B43615CFC4A354BD2C9A6F1B2A9DBF537EF619CCA2AE8422E418',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom:
              'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [
        {
          denom:
            'ibc/E5FCAF626B01A60CB56EEC8D63C5EC720E5B7EDB9B92A2CC6AA2541499772D81',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        },
        {
          denom: 'NINPO',
          exponent: 6
        }
      ],
      base: 'ibc/E5FCAF626B01A60CB56EEC8D63C5EC720E5B7EDB9B92A2CC6AA2541499772D81',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [
        {
          denom:
            'ibc/06790C0D827E373601D75FCD6923C4172CF2A68AF16B07AF1AB762ADCFE67911',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        },
        {
          denom: 'JUDO',
          exponent: 6
        }
      ],
      base: 'ibc/06790C0D827E373601D75FCD6923C4172CF2A68AF16B07AF1AB762ADCFE67911',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-98',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-54'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom:
            'ibc/2034A2717C2E9F5C19285A7F697CECFA14F34784B912AD32B6E3D7833090EB16',
          exponent: 0,
          aliases: ['ujkl']
        },
        {
          denom: 'jkl',
          exponent: 6
        }
      ],
      base: 'ibc/2034A2717C2E9F5C19285A7F697CECFA14F34784B912AD32B6E3D7833090EB16',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingecko_id: 'jackal-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-39',
            base_denom: 'ujkl',
            chain_name: 'jackal'
          },
          chain: {
            channel_id: 'channel-94'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
          exponent: 0,
          aliases: ['ujuno']
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-87',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B62610294777CD7D4567F7125B5D88DE95C6B7F7ED25430F3808F863202BC599',
          exponent: 0,
          aliases: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B62610294777CD7D4567F7125B5D88DE95C6B7F7ED25430F3808F863202BC599',
      name: 'ATOM on Juno',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-87',
            base_denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address:
        'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [
        {
          denom:
            'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
          exponent: 0
        },
        {
          denom: 'banana',
          exponent: 6
        }
      ],
      base: 'ibc/B3ACD48DDF47EE346C6162A2F2FDA5B24EEFBC72F76DBE9546B45375526B3BCF',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-87',
            base_denom:
              'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/586C96CD737D2B2AB1FC2778751173F472FDEC6F5AA76E7B3BCCDBFE82DD8455',
          exponent: 0,
          aliases: ['factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX']
        },
        {
          denom: 'nexx',
          exponent: 6
        }
      ],
      address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
      base: 'ibc/586C96CD737D2B2AB1FC2778751173F472FDEC6F5AA76E7B3BCCDBFE82DD8455',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-87',
            base_denom:
              'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/541DEF5910D60B1FF944F8068B1B987F80423E92F988B8C6BDBC82C996E42CAF',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        },
        {
          denom: 'dgl',
          exponent: 6
        }
      ],
      address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
      base: 'ibc/541DEF5910D60B1FF944F8068B1B987F80423E92F988B8C6BDBC82C996E42CAF',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-87',
            base_denom:
              'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/8ACBD59272835F06D7083A1D0AB866D9B09BF76754A1C7DC6AEBE0DB3D84EA3B',
          exponent: 0,
          aliases: ['ukava']
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      base: 'ibc/8ACBD59272835F06D7083A1D0AB866D9B09BF76754A1C7DC6AEBE0DB3D84EA3B',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/CEA34137DEBFFFB534CAAD7CEB5A96A9F8847CBD8CAE9030DB987437DC324362',
          exponent: 0,
          aliases: ['hard']
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      base: 'ibc/CEA34137DEBFFFB534CAAD7CEB5A96A9F8847CBD8CAE9030DB987437DC324362',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/1139F1B44AF867A20D936410729AA00B4F8170367E244E62E0C223D8934C692B',
          exponent: 0,
          aliases: ['swp']
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      base: 'ibc/1139F1B44AF867A20D936410729AA00B4F8170367E244E62E0C223D8934C692B',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/9DB49B033A9008E5E2C0476CE91C76CF9539DDD702B6C6BB3611927D7CCE530D',
          exponent: 0,
          aliases: ['usdx']
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      base: 'ibc/9DB49B033A9008E5E2C0476CE91C76CF9539DDD702B6C6BB3611927D7CCE530D',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-95'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      base: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-95'
          }
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
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      base: 'ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umars',
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-55'
          }
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/21F041CFE99994E0D027D0C5F72A9EB6224CBCAF5A6AD5DDB75F67A781D46C68',
          exponent: 0,
          aliases: ['uwhale']
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      base: 'ibc/21F041CFE99994E0D027D0C5F72A9EB6224CBCAF5A6AD5DDB75F67A781D46C68',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'ampWHALE',
      denom_units: [
        {
          denom:
            'ibc/034FBAB83B9B8AB35217DD59452C92EBC845ECD2E44AB17D260D9A2E7200AC79',
          exponent: 0,
          aliases: [
            'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE'
          ]
        },
        {
          denom: 'ampWHALE',
          exponent: 6
        }
      ],
      base: 'ibc/034FBAB83B9B8AB35217DD59452C92EBC845ECD2E44AB17D260D9A2E7200AC79',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'boneWHALE',
      denom_units: [
        {
          denom:
            'ibc/0C86C1202E29CBB6356E86E0A641ECC068DC98DBDF32150CE05A5E8D4EDC8A6F',
          exponent: 0,
          aliases: [
            'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale'
          ]
        },
        {
          denom: 'boneWHALE',
          exponent: 6
        }
      ],
      base: 'ibc/0C86C1202E29CBB6356E86E0A641ECC068DC98DBDF32150CE05A5E8D4EDC8A6F',
      name: 'boneWHALE',
      display: 'boneWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'FABLE',
      denom_units: [
        {
          denom:
            'ibc/DE0FC0B4CAC42BE113CD56CCCF133C720C8C77716C218C19EDB1C8B13135A4DC',
          exponent: 0,
          aliases: [
            'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable'
          ]
        },
        {
          denom: 'fable',
          exponent: 6
        }
      ],
      base: 'ibc/DE0FC0B4CAC42BE113CD56CCCF133C720C8C77716C218C19EDB1C8B13135A4DC',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [
        {
          denom:
            'ibc/C2029C09AFC6FF0A00C6CB81E78529998C34A083CCCD57A2BEEFBEF0C005F897',
          exponent: 0,
          aliases: [
            'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708'
          ]
        },
        {
          denom: 'bluna',
          exponent: 6
        }
      ],
      base: 'ibc/C2029C09AFC6FF0A00C6CB81E78529998C34A083CCCD57A2BEEFBEF0C005F897',
      address:
        'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      type_asset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        }
      ]
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/2661BA7AD557526A9BE35C7576EEF8E82B14A01ECCE36AD139979FD683D37C9D',
          exponent: 0,
          aliases: [
            'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          ]
        },
        {
          denom: 'RAC',
          exponent: 6
        }
      ],
      base: 'ibc/2661BA7AD557526A9BE35C7576EEF8E82B14A01ECCE36AD139979FD683D37C9D',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/BA7E3453C2855BF2EC7EB368C3A5F498C4194677EE789780D7F1F534686D1D6D',
          exponent: 0,
          aliases: [
            'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          ]
        },
        {
          denom: 'ASH',
          exponent: 6
        }
      ],
      base: 'ibc/BA7E3453C2855BF2EC7EB368C3A5F498C4194677EE789780D7F1F534686D1D6D',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'Tether USDt on Migaloo',
      denom_units: [
        {
          denom:
            'ibc/7B2FBB0DCC3511F3735963DEEB9C157D468D0E870703DA61BE1C9006C363BD21',
          exponent: 0,
          aliases: [
            'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7B2FBB0DCC3511F3735963DEEB9C157D468D0E870703DA61BE1C9006C363BD21',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'GUPPY',
      denom_units: [
        {
          denom:
            'ibc/675CC877238E9063F5C63D8AC9435AE2833B499200F541C6F0F2D4F07CD65261',
          exponent: 0,
          aliases: [
            'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          ]
        },
        {
          denom: 'GUPPY',
          exponent: 6
        }
      ],
      base: 'ibc/675CC877238E9063F5C63D8AC9435AE2833B499200F541C6F0F2D4F07CD65261',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO established on Migaloo.',
      denom_units: [
        {
          denom:
            'ibc/963532A97C3EF15733C579611D0A93D6B6789051330727EC3DEB173643236BEA',
          exponent: 0,
          aliases: [
            'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir'
          ]
        },
        {
          denom: 'OPHIR',
          exponent: 6
        }
      ],
      base: 'ibc/963532A97C3EF15733C579611D0A93D6B6789051330727EC3DEB173643236BEA',
      name: 'OPHIR',
      display: 'OPHIR',
      symbol: 'OPHIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/897EF0F4FD498272A316B23F58C3F253818232FEB7235A98AD69B0548244E486',
          exponent: 0,
          aliases: [
            'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          ]
        },
        {
          denom: 'SHARK',
          exponent: 6
        }
      ],
      base: 'ibc/897EF0F4FD498272A316B23F58C3F253818232FEB7235A98AD69B0548244E486',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-58'
          }
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/173E561B8E97AB49FBA540663C1D02DC1B2D2871B5C8434935982CB15B0C7765',
          exponent: 0,
          aliases: ['untrn']
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      base: 'ibc/173E561B8E97AB49FBA540663C1D02DC1B2D2871B5C8434935982CB15B0C7765',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [
        {
          denom:
            'ibc/828BC69D0E109632CBA0E345C816D39953ED81CC56296C93288D4A1D8D1EAF2C',
          exponent: 0,
          aliases: [
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/828BC69D0E109632CBA0E345C816D39953ED81CC56296C93288D4A1D8D1EAF2C',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [
        {
          denom:
            'ibc/407A403AD461D5CEBEF7205A5672188573DC53DBF8E6AA831CC4CB46F2321201',
          exponent: 0,
          aliases: [
            'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/407A403AD461D5CEBEF7205A5672188573DC53DBF8E6AA831CC4CB46F2321201',
      name: 'IBC usdc',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      description: 'Tia on Neutron',
      denom_units: [
        {
          denom:
            'ibc/E720B28B57512C088E476FA74D01F8AE744C6F7DAA5EDA559BE7406BD9E73015',
          exponent: 0,
          aliases: [
            'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7'
          ]
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E720B28B57512C088E476FA74D01F8AE744C6F7DAA5EDA559BE7406BD9E73015',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [
        {
          denom:
            'ibc/5AC4326C7FC7A84864FA5631928811F58C92475C429FEF4F1FCB3328D68039D1',
          exponent: 0,
          aliases: [
            'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe'
          ]
        },
        {
          denom: 'ASTROPEPE',
          exponent: 6
        }
      ],
      base: 'ibc/5AC4326C7FC7A84864FA5631928811F58C92475C429FEF4F1FCB3328D68039D1',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [
        {
          denom:
            'ibc/BA5445831952CB0FC61076A4FB14A64C8E022061DA4B591E6BF0ED37C5C909EA',
          exponent: 0,
          aliases: [
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          ]
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      base: 'ibc/BA5445831952CB0FC61076A4FB14A64C8E022061DA4B591E6BF0ED37C5C909EA',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
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
      description: 'NBTC on Neutron',
      denom_units: [
        {
          denom:
            'ibc/C250FC24E81AFFBE1F1FC0BEA86E41F03A039558888060ACE72F5B9A28E68FA2',
          exponent: 0,
          aliases: [
            'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920'
          ]
        },
        {
          denom: 'sat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C250FC24E81AFFBE1F1FC0BEA86E41F03A039558888060ACE72F5B9A28E68FA2',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      }
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [
        {
          denom:
            'ibc/463335E2B9193F2AAF19BC699CB95F407C1BB0E5E54109F2BFAF5E3EB82E3974',
          exponent: 0,
          aliases: [
            'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/463335E2B9193F2AAF19BC699CB95F407C1BB0E5E54109F2BFAF5E3EB82E3974',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/3CF31CB1729FD2011718F66B20861D23A7FB6492C29FFADE2C1E58D10C3D225F',
          exponent: 0,
          aliases: [
            'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          ]
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      base: 'ibc/3CF31CB1729FD2011718F66B20861D23A7FB6492C29FFADE2C1E58D10C3D225F',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      coingecko_id: 'newt',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'ASTRO on Neutron',
      denom_units: [
        {
          denom:
            'ibc/D641A3E4D8F4BD53720E0DAEB59F1083F4A427F99B488528D1145294B59BC399',
          exponent: 0,
          aliases: [
            'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A'
          ]
        },
        {
          denom: 'astro',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D641A3E4D8F4BD53720E0DAEB59F1083F4A427F99B488528D1145294B59BC399',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
      }
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denom_units: [
        {
          denom:
            'ibc/15D88A4E859585FB10718607066653BDE2491AB7CFD6E9A578A799F6BC9B82CC',
          exponent: 0,
          aliases: [
            'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi'
          ]
        },
        {
          denom: 'corgi',
          exponent: 6
        }
      ],
      base: 'ibc/15D88A4E859585FB10718607066653BDE2491AB7CFD6E9A578A799F6BC9B82CC',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'ibc/1E3CF276C8D283678C076E9F86697F10DAB6A51055165E81907C65A5963F42FA',
          exponent: 0,
          aliases: [
            'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          ]
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      base: 'ibc/1E3CF276C8D283678C076E9F86697F10DAB6A51055165E81907C65A5963F42FA',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'Jimmy Neutron Finance',
      denom_units: [
        {
          denom:
            'ibc/212E3EA99376AE1E668F6CF16A2C533843845C4DC00FAA9BA353A8EEA8E9D443',
          exponent: 0,
          aliases: [
            'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY'
          ]
        },
        {
          denom: 'jimmy',
          exponent: 6
        }
      ],
      base: 'ibc/212E3EA99376AE1E668F6CF16A2C533843845C4DC00FAA9BA353A8EEA8E9D443',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom:
            'ibc/2618165FB15523140C34365941366CBD2124D161A07B70E7B86071BD12A0E4AE',
          exponent: 0,
          aliases: [
            'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          ]
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      base: 'ibc/2618165FB15523140C34365941366CBD2124D161A07B70E7B86071BD12A0E4AE',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [
        {
          denom:
            'ibc/B37E88246642D16B81F2FAFDEAF69E552832BCD846F2C41E9D7090D0A9BC6C70',
          exponent: 0,
          aliases: [
            'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj'
          ]
        },
        {
          denom: 'bitcosmos',
          exponent: 6
        }
      ],
      base: 'ibc/B37E88246642D16B81F2FAFDEAF69E552832BCD846F2C41E9D7090D0A9BC6C70',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'What the Fuck',
      denom_units: [
        {
          denom:
            'ibc/5E051759A5BB29FF4CE94E342DC0E87C086DC8B3FA875430B8A21927BEA8B8C9',
          exponent: 0,
          aliases: [
            'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf'
          ]
        },
        {
          denom: 'wtf',
          exponent: 6
        }
      ],
      base: 'ibc/5E051759A5BB29FF4CE94E342DC0E87C086DC8B3FA875430B8A21927BEA8B8C9',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'NLS on Neutron',
      denom_units: [
        {
          denom:
            'ibc/5B3DBE256A8DBF9BF0DC4FE70E36BAF8DD1F4E10780FF9B108BD4DF596DDC959',
          exponent: 0,
          aliases: [
            'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972'
          ]
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5B3DBE256A8DBF9BF0DC4FE70E36BAF8DD1F4E10780FF9B108BD4DF596DDC959',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      }
    },
    {
      description: 'A Mechanical Canine',
      denom_units: [
        {
          denom:
            'ibc/ACF2BC8AF9EB1E12A18322F41B401D60F110078AE8D8089F3D1369656A9CC715',
          exponent: 0,
          aliases: [
            'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard'
          ]
        },
        {
          denom: 'goddard',
          exponent: 6
        }
      ],
      base: 'ibc/ACF2BC8AF9EB1E12A18322F41B401D60F110078AE8D8089F3D1369656A9CC715',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/68C6671BC8A27E137FD2E254F1C09A6147567D30B3490BB261F861EEC8843080',
          exponent: 0,
          aliases: [
            'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          ]
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      base: 'ibc/68C6671BC8A27E137FD2E254F1C09A6147567D30B3490BB261F861EEC8843080',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'NEWTROLL',
      denom_units: [
        {
          denom:
            'ibc/5C6FA8710A71BA138595164265F5F25193EB5B448E8EBADD95EEF7705BA60C76',
          exponent: 0,
          aliases: [
            'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll'
          ]
        },
        {
          denom: 'newtroll',
          exponent: 6
        }
      ],
      base: 'ibc/5C6FA8710A71BA138595164265F5F25193EB5B448E8EBADD95EEF7705BA60C76',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'Retro Game',
      denom_units: [
        {
          denom:
            'ibc/33350F915B32F89FBBEBBDEF138B4BE84911702E8C70B4D9081539E98C9A7426',
          exponent: 0,
          aliases: [
            'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro'
          ]
        },
        {
          denom: 'retro',
          exponent: 6
        }
      ],
      base: 'ibc/33350F915B32F89FBBEBBDEF138B4BE84911702E8C70B4D9081539E98C9A7426',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'THE FIRST NATIVE GODDARD MEMECOIN ON NEUTRON',
      denom_units: [
        {
          denom:
            'ibc/658B19263BC768593F71FA34B3B52A36081517F1E2D7F1AF1B2CABB0D7698889',
          exponent: 0,
          aliases: [
            'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD'
          ]
        },
        {
          denom: 'goddard',
          exponent: 6
        }
      ],
      base: 'ibc/658B19263BC768593F71FA34B3B52A36081517F1E2D7F1AF1B2CABB0D7698889',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODDARD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/29E1766F964BCF323E98B2F78FFB7D478613BCD70FEBDD33E04C5292DC6943FB',
          exponent: 0,
          aliases: [
            'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958'
          ]
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/29E1766F964BCF323E98B2F78FFB7D478613BCD70FEBDD33E04C5292DC6943FB',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'Astro BOY',
      denom_units: [
        {
          denom:
            'ibc/BD03D7304C4D4F14C5A241599B659DA88430655E50C334E1B72E4F6250355CEB',
          exponent: 0,
          aliases: [
            'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv'
          ]
        },
        {
          denom: 'boy',
          exponent: 6
        }
      ],
      base: 'ibc/BD03D7304C4D4F14C5A241599B659DA88430655E50C334E1B72E4F6250355CEB',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom:
            'ibc/44F93238174089E8A578F537AA9A1A900E02AB33BEF9F8EA2F9AB20E0F4514A1',
          exponent: 0,
          aliases: [
            'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8'
          ]
        },
        {
          denom: 'BADKID',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/44F93238174089E8A578F537AA9A1A900E02AB33BEF9F8EA2F9AB20E0F4514A1',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'Reflections of cartel activity on Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/A707E42BF0E16C9DFF5B54FDD98F55D47685C7CD8E682D90F98F0C52582D548D',
          exponent: 0,
          aliases: [
            'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel'
          ]
        },
        {
          denom: 'cartel',
          exponent: 6
        }
      ],
      base: 'ibc/A707E42BF0E16C9DFF5B54FDD98F55D47685C7CD8E682D90F98F0C52582D548D',
      name: 'cartel',
      display: 'cartel',
      symbol: 'CARTEL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom:
              'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }
      ]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/C53931BE8DBFA7FB2F183E4B3C835E005187B167AFC0165724004B878FD5FD66',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/C53931BE8DBFA7FB2F183E4B3C835E005187B167AFC0165724004B878FD5FD66',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }
      ]
    },
    {
      description:
        'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [
        {
          denom:
            'ibc/90D9BE4D0D9BFD6AE61FCACF84765820EDA9EE795548324AD60FF416E6685ECF',
          exponent: 0,
          aliases: ['ufrienzies']
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      base: 'ibc/90D9BE4D0D9BFD6AE61FCACF84765820EDA9EE795548324AD60FF416E6685ECF',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }
      ]
    },
    {
      description: 'ATOM token on Noble',
      denom_units: [
        {
          denom:
            'ibc/1E833054498176E86012B5398929481A6AF750ABEDC97D447F15B04256780D31',
          exponent: 0,
          aliases: [
            'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0'
          ]
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E833054498176E86012B5398929481A6AF750ABEDC97D447F15B04256780D31',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom:
              'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }
      ],
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
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uusdc',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      ]
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/30372BFF4C64316885E3DF29EAC00E2A5A5FE856161AD667AA96CF35EFCED446',
          exponent: 0,
          aliases: ['unom']
        },
        {
          denom: 'nom',
          exponent: 6
        }
      ],
      base: 'ibc/30372BFF4C64316885E3DF29EAC00E2A5A5FE856161AD667AA96CF35EFCED446',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unom',
            chain_name: 'nomic'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }
      ]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/A6826D67800ED864F3BF51D56B0165DAF2491B00D93433564158D87BAA0C82BE',
          exponent: 0,
          aliases: ['usat']
        },
        {
          denom: 'nbtc',
          exponent: 14
        }
      ],
      base: 'ibc/A6826D67800ED864F3BF51D56B0165DAF2491B00D93433564158D87BAA0C82BE',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'usat',
            chain_name: 'nomic'
          },
          chain: {
            channel_id: 'channel-116'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/4EFD563C64F84F60AFB4BB7A8473AAA632CF5817FDF2CF51E68E4E3EDAE66430',
          exponent: 0,
          aliases: ['loki']
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      base: 'ibc/4EFD563C64F84F60AFB4BB7A8473AAA632CF5817FDF2CF51E68E4E3EDAE66430',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingecko_id: 'odin-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'loki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }
      ]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/06AB154D88A95D7165682A56B69561CA5078EA2D6C9620EC4F34DB6C48346A59',
          exponent: 0,
          aliases: ['mGeo']
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      base: 'ibc/06AB154D88A95D7165682A56B69561CA5078EA2D6C9620EC4F34DB6C48346A59',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'mGeo',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }
      ]
    },
    {
      description: 'DOKI the last Dragon',
      denom_units: [
        {
          denom:
            'ibc/DBE837E151E982B03AD5C311C7EF617FE69A435CE36DA3E93CC7BA5F5BC428B0',
          exponent: 0,
          aliases: ['udoki']
        },
        {
          denom: 'doki',
          exponent: 6
        }
      ],
      base: 'ibc/DBE837E151E982B03AD5C311C7EF617FE69A435CE36DA3E93CC7BA5F5BC428B0',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'udoki',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }
      ]
    },
    {
      description: 'Myrkur the leader of OLD Order',
      denom_units: [
        {
          denom:
            'ibc/BF843A6CD41D816EEFDEFEDBDFABE40743F6CD6AAD698FCF315D24D8D9EFB6E9',
          exponent: 0,
          aliases: ['umyrk']
        },
        {
          denom: 'myrk',
          exponent: 6
        }
      ],
      base: 'ibc/BF843A6CD41D816EEFDEFEDBDFABE40743F6CD6AAD698FCF315D24D8D9EFB6E9',
      name: 'MYRK',
      display: 'myrk',
      symbol: 'MYRK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'umyrk',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }
      ]
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/C5DE50A49887816DC270CC303302B1725A9ABF35697F3A882A6E363C39F56F10',
          exponent: 0,
          aliases: ['mO9W']
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      base: 'ibc/C5DE50A49887816DC270CC303302B1725A9ABF35697F3A882A6E363C39F56F10',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-63',
            base_denom: 'mO9W',
            chain_name: 'odin'
          },
          chain: {
            channel_id: 'channel-157'
          }
        }
      ]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom:
            'ibc/15FF6DF1FA1790C9199EDB6F6DAAE0EEE93BA22B3B4E9326282C389074098B8A',
          exponent: 0,
          aliases: ['uflix']
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      base: 'ibc/15FF6DF1FA1790C9199EDB6F6DAAE0EEE93BA22B3B4E9326282C389074098B8A',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/151077D06F97D905EA689B41316F856E2E31ACC5312CEA92893B8E18D988B610',
          exponent: 0,
          aliases: [
            'ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/151077D06F97D905EA689B41316F856E2E31ACC5312CEA92893B8E18D988B610',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom:
              'ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/82D5D52387A6867652190F116FD79240B40BA93E4DE7BB1AEC2C12BE838EC8D9',
          exponent: 0,
          aliases: [
            'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/82D5D52387A6867652190F116FD79240B40BA93E4DE7BB1AEC2C12BE838EC8D9',
      name: 'Osmosis osmo',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom:
              'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6C387856BD1DE742CC6BE092808B1DCE0959D6A892687F424C0C40BA7872F959',
          exponent: 0,
          aliases: [
            'ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274'
          ]
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6C387856BD1DE742CC6BE092808B1DCE0959D6A892687F424C0C40BA7872F959',
      name: 'Agoric IST (Inter Stable Token)',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom:
              'ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'agoric',
            base_denom: 'uist'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/E1C48099874A9F2204F463305AF1EE0B94603498A2E2727F8204EB99E46E5537',
          exponent: 0,
          aliases: [
            'ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E1C48099874A9F2204F463305AF1EE0B94603498A2E2727F8204EB99E46E5537',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom:
              'ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/E8FBBCAFFCCCE00E3BBB823ACB2C59DF627E5AE05744463B25FE79F68847D885',
          exponent: 0,
          aliases: [
            'ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630'
          ]
        },
        {
          denom: 'baddog',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E8FBBCAFFCCCE00E3BBB823ACB2C59DF627E5AE05744463B25FE79F68847D885',
      name: 'BadDog (Osmosis)',
      display: 'baddog',
      symbol: 'BADDOG.osmo',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-26',
            base_denom:
              'ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-70'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.svg'
      }
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/05554A9BFDD28894D7F18F4C707AA0930D778751A437A9FE1F4684A3E1199728',
          exponent: 0,
          aliases: [
            'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/05554A9BFDD28894D7F18F4C707AA0930D778751A437A9FE1F4684A3E1199728',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description:
        "Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It's the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.",
      denom_units: [
        {
          denom:
            'ibc/F472078E60F4AA887DA65A6009E501882594AAA5721C3C13F54724E6B29F1718',
          exponent: 0,
          aliases: [
            'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
          ]
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F472078E60F4AA887DA65A6009E501882594AAA5721C3C13F54724E6B29F1718',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/C975A2A3ED94B56B93336A188D953C2C8895931BD96BE0DA4DB82F9B560B0EDF',
          exponent: 0,
          aliases: [
            'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
          ]
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C975A2A3ED94B56B93336A188D953C2C8895931BD96BE0DA4DB82F9B560B0EDF',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ]
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/0168A27E5B93E22E51DDF474FF86C6E43F8074B9D2454C6A8EE993490B169F13',
          exponent: 0,
          aliases: [
            'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0168A27E5B93E22E51DDF474FF86C6E43F8074B9D2454C6A8EE993490B169F13',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
        }
      ]
    },
    {
      description:
        'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denom_units: [
        {
          denom:
            'ibc/DE4A687552F5C4D7A5CA767DFAFD35FF59D8152BEDBDBFF655B8454389A60301',
          exponent: 0,
          aliases: [
            'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7'
          ]
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DE4A687552F5C4D7A5CA767DFAFD35FF59D8152BEDBDBFF655B8454389A60301',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      ]
    },
    {
      description:
        'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denom_units: [
        {
          denom:
            'ibc/42E5DE6005EB40A0206957D34DA6CB52D5C92C66C024B3C2CA23EB9D747095D6',
          exponent: 0,
          aliases: [
            'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D'
          ]
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/42E5DE6005EB40A0206957D34DA6CB52D5C92C66C024B3C2CA23EB9D747095D6',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/F34DC2408B2EB193D2A82388AC5F9AC86282B14BBF623A8581BBE075654547CD',
          exponent: 0,
          aliases: [
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F34DC2408B2EB193D2A82388AC5F9AC86282B14BBF623A8581BBE075654547CD',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ]
    },
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/71F5B573D4D0B07F28C01DEDF5BBF4019E2B8C7C198EAC4C3B13D88FE4348651',
          exponent: 0,
          aliases: [
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1'
          ]
        },
        {
          denom: 'cro',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71F5B573D4D0B07F28C01DEDF5BBF4019E2B8C7C198EAC4C3B13D88FE4348651',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ]
    },
    {
      description:
        'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denom_units: [
        {
          denom:
            'ibc/06FAF4B1EBEC5EDCA8710C26A5872C0BBF2719A134BED7427E5ECC98D733C450',
          exponent: 0,
          aliases: [
            'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D'
          ]
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/06FAF4B1EBEC5EDCA8710C26A5872C0BBF2719A134BED7427E5ECC98D733C450',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }
      ]
    },
    {
      description:
        'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [
        {
          denom:
            'ibc/98B3B5E3CB2AE461B82B93667E57F33413BA28B60B529E5A0CCC3D40F32AE070',
          exponent: 0,
          aliases: [
            'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB'
          ]
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/98B3B5E3CB2AE461B82B93667E57F33413BA28B60B529E5A0CCC3D40F32AE070',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        }
      ]
    },
    {
      description:
        'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [
        {
          denom:
            'ibc/CB6456BFC918DE8005F4A7C7AA23F48CB8C7B5CBBD59DAAE7089D4D56730C649',
          exponent: 0,
          aliases: [
            'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373'
          ]
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CB6456BFC918DE8005F4A7C7AA23F48CB8C7B5CBBD59DAAE7089D4D56730C649',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/E216E3FE674FF526C41DD2366337585FC07B6CCFEB2E17FD2A82F06DE0EE9772',
          exponent: 0,
          aliases: [
            'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0'
          ]
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E216E3FE674FF526C41DD2366337585FC07B6CCFEB2E17FD2A82F06DE0EE9772',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/B7E26E6EDF80EF3536ECE2658A27D142CB875FC5342839496E721F3D0F7AEA56',
          exponent: 0,
          aliases: [
            'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
          ]
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B7E26E6EDF80EF3536ECE2658A27D142CB875FC5342839496E721F3D0F7AEA56',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/1F63B5C7AFF7205FDAEA5013FB571B006B29D1AEE6ACE75CBF55919D00AE3C98',
          exponent: 0,
          aliases: [
            'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1F63B5C7AFF7205FDAEA5013FB571B006B29D1AEE6ACE75CBF55919D00AE3C98',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'DOT.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom:
            'ibc/49CCA5C7C250B95DC27934C5F30BFCD486A3A9B559A4DD45B914A935ED2D7391',
          exponent: 0,
          aliases: [
            'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
          ]
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/49CCA5C7C250B95DC27934C5F30BFCD486A3A9B559A4DD45B914A935ED2D7391',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/3FAAB757ABE073EE7CB27D3837E89AF31ADE5DDF631257B5246269557B8B063D',
          exponent: 0,
          aliases: [
            'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205'
          ]
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3FAAB757ABE073EE7CB27D3837E89AF31ADE5DDF631257B5246269557B8B063D',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/222A726564C3556BA918B771F4BFDE37EE326B497A66022DE7A1F5CF11BE9DF8',
          exponent: 0,
          aliases: [
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
          ]
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/222A726564C3556BA918B771F4BFDE37EE326B497A66022DE7A1F5CF11BE9DF8',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/980C2301F7AE64F1F986456C77A6B1AD09C7464EF214DA3994DBED0CA0FFA063',
          exponent: 0,
          aliases: [
            'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC'
          ]
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/980C2301F7AE64F1F986456C77A6B1AD09C7464EF214DA3994DBED0CA0FFA063',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/4472060867B1527ECE6456D82B463A536EAF4ABC57E0099FF5302F4C93D8C65E',
          exponent: 0,
          aliases: [
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
          ]
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4472060867B1527ECE6456D82B463A536EAF4ABC57E0099FF5302F4C93D8C65E',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/D94CE55336EE76F39515880FD83EEFB2D8DA4755313EF6AE3950EFAC11A38E6F',
          exponent: 0,
          aliases: [
            'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
          ]
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D94CE55336EE76F39515880FD83EEFB2D8DA4755313EF6AE3950EFAC11A38E6F',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }
      ]
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/2ABA09675029A237096FCF25564DFE1B6007E60DE6065F0D4485EAE70FA110B9',
          exponent: 0,
          aliases: [
            'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293'
          ]
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2ABA09675029A237096FCF25564DFE1B6007E60DE6065F0D4485EAE70FA110B9',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [
        {
          denom:
            'ibc/0279375310EAE08714D4BF80324B4C60C7BE7BD6D95715DC12E3D39BDAEAFC81',
          exponent: 0,
          aliases: [
            'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
          ]
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0279375310EAE08714D4BF80324B4C60C7BE7BD6D95715DC12E3D39BDAEAFC81',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }
      ],
      keywords: ['canon']
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/223B8848663D9496FF7E85E3DA5C1CDACE6E5437F98F61CE957A08EF448C3B19',
          exponent: 0,
          aliases: [
            'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
          ]
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/223B8848663D9496FF7E85E3DA5C1CDACE6E5437F98F61CE957A08EF448C3B19',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }
      ]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/D5AB3D48F52F9F01B3FD7A1A3327EEC3FD26D112A6A90DB34B973712112B01EF',
          exponent: 0,
          aliases: [
            'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076'
          ]
        },
        {
          denom: 'regen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D5AB3D48F52F9F01B3FD7A1A3327EEC3FD26D112A6A90DB34B973712112B01EF',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }
      ]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom:
            'ibc/81B22035F4CC17A461D14B5359FE5156C5C456A7C0E40038E6D3D6FB1CB54BC9',
          exponent: 0,
          aliases: [
            'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84'
          ]
        },
        {
          denom: 'dvpn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/81B22035F4CC17A461D14B5359FE5156C5C456A7C0E40038E6D3D6FB1CB54BC9',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }
      ]
    },
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom:
            'ibc/1EC747246AEDDF7673C5998017B0228A2791E4DF34C7BFC5A3FC5AA27312A361',
          exponent: 0,
          aliases: [
            'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0'
          ]
        },
        {
          denom: 'iris',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1EC747246AEDDF7673C5998017B0228A2791E4DF34C7BFC5A3FC5AA27312A361',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }
      ]
    },
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom:
            'ibc/A9A7A2DEF6E58269BD9CF4BEE7DA92DF888637188129B939936F82CB2F50A355',
          exponent: 0,
          aliases: [
            'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC'
          ]
        },
        {
          denom: 'iov',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A9A7A2DEF6E58269BD9CF4BEE7DA92DF888637188129B939936F82CB2F50A355',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }
      ]
    },
    {
      description:
        'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [
        {
          denom:
            'ibc/CD80FCC8402764E8A9EEA70A1F9D85A90CBCCDFE6E0122FDF72101272D2CCA6A',
          exponent: 0,
          aliases: [
            'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59'
          ]
        },
        {
          denom: 'ngm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CD80FCC8402764E8A9EEA70A1F9D85A90CBCCDFE6E0122FDF72101272D2CCA6A',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }
      ]
    },
    {
      description:
        'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/BE2A859F45356C1F5512EBFE03D6F8CEFAAE79B4ED1100AE16C0B3F8EFE5D27F',
          exponent: 0,
          aliases: [
            'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F'
          ]
        },
        {
          denom: 'eur',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE2A859F45356C1F5512EBFE03D6F8CEFAAE79B4ED1100AE16C0B3F8EFE5D27F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }
      ]
    },
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom:
            'ibc/6A6F524504D43390A563874357766B7938A1C4AF9CFF501535B662D6B0034270',
          exponent: 0,
          aliases: [
            'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525'
          ]
        },
        {
          denom: 'like',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6A6F524504D43390A563874357766B7938A1C4AF9CFF501535B662D6B0034270',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }
      ]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/00D4689E1A57F7CA6ECD500063CD6CAFEAD576C6AA3DEED22F91D349CFF31A97',
          exponent: 0,
          aliases: [
            'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B'
          ]
        },
        {
          denom: 'ixo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/00D4689E1A57F7CA6ECD500063CD6CAFEAD576C6AA3DEED22F91D349CFF31A97',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }
      ]
    },
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom:
            'ibc/92AFD34E461F19A09F443DBBF965E9C37F32F07E51DCD3AB6D0A9924AEE9991D',
          exponent: 0,
          aliases: [
            'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5'
          ]
        },
        {
          denom: 'bcna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/92AFD34E461F19A09F443DBBF965E9C37F32F07E51DCD3AB6D0A9924AEE9991D',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }
      ]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/A3E3BEF3262AC6ECFC7621DE81F3FBA0C1601008DEF0AB2DB2F8D41952BF2E1E',
          exponent: 0,
          aliases: [
            'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452'
          ]
        },
        {
          denom: 'btsg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A3E3BEF3262AC6ECFC7621DE81F3FBA0C1601008DEF0AB2DB2F8D41952BF2E1E',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }
      ]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom:
            'ibc/D7A6BCB63800B311FBD0166B696ABCBC3671FD216C68D8DEBFC78E3275F1880A',
          exponent: 0,
          aliases: [
            'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E'
          ]
        },
        {
          denom: 'xki',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D7A6BCB63800B311FBD0166B696ABCBC3671FD216C68D8DEBFC78E3275F1880A',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }
      ]
    },
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom:
            'ibc/EC9888B748805CF99002A590F730F1DF1B2229EAC02B8AF161BC62492E73E0AF',
          exponent: 0,
          aliases: [
            'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB'
          ]
        },
        {
          denom: 'med',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EC9888B748805CF99002A590F730F1DF1B2229EAC02B8AF161BC62492E73E0AF',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }
      ]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/0D195D77BF4A83885EEA8C9B9BEE69CA1DF3C4CED7B042E7819AA04BDD7AEC5A',
          exponent: 0,
          aliases: [
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0D195D77BF4A83885EEA8C9B9BEE69CA1DF3C4CED7B042E7819AA04BDD7AEC5A',
      name: 'bostrom',
      display:
        'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/DF3CE506B8745E1B0F085D238FE9F1020F852D24E2F4987F340DB688FC963F09',
          exponent: 0,
          aliases: [
            'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0'
          ]
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DF3CE506B8745E1B0F085D238FE9F1020F852D24E2F4987F340DB688FC963F09',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/BE2880BC3502CC9589487030B8E6DBC231648E395885CE9669C2736443EE376E',
          exponent: 0,
          aliases: [
            'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA'
          ]
        },
        {
          denom: 'cheq',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE2880BC3502CC9589487030B8E6DBC231648E395885CE9669C2736443EE376E',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }
      ]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom:
            'ibc/F81FEE12FF26974589FFAA6758C8CDCFEDB5E37283257D6A2E4C86515D8385AA',
          exponent: 0,
          aliases: [
            'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2'
          ]
        },
        {
          denom: 'lum',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F81FEE12FF26974589FFAA6758C8CDCFEDB5E37283257D6A2E4C86515D8385AA',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }
      ]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/1AF443440E07CAA8320D6218CD3480677EB1C7283C00B0DD494DB82E7BB93CBD',
          exponent: 0,
          aliases: [
            'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD'
          ]
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1AF443440E07CAA8320D6218CD3480677EB1C7283C00B0DD494DB82E7BB93CBD',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }
      ]
    },
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom:
            'ibc/160779B46490709D3DB711DD16A95A65AF89DD9609774C776ED660AF29EC860D',
          exponent: 0,
          aliases: [
            'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C'
          ]
        },
        {
          denom: 'dsm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/160779B46490709D3DB711DD16A95A65AF89DD9609774C776ED660AF29EC860D',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }
      ]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom:
            'ibc/D33F52F50E37F1C37ECCC9A28536AFD2E6B2472C3E37607239DF2F8089420DC9',
          exponent: 0,
          aliases: [
            'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D'
          ]
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D33F52F50E37F1C37ECCC9A28536AFD2E6B2472C3E37607239DF2F8089420DC9',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom:
            'ibc/DAF505AD69316EC4E46FBD31B2DF18A7FB0D22F8CA585C135F0DF85B4C0BA2CA',
          exponent: 0,
          aliases: [
            'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E'
          ]
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DAF505AD69316EC4E46FBD31B2DF18A7FB0D22F8CA585C135F0DF85B4C0BA2CA',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }
      ]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom:
            'ibc/64D8A78523B5EB0CC1AAE3F960EBE28D638B313BF4CA5B1CE023446D06D80CC5',
          exponent: 0,
          aliases: [
            'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE'
          ]
        },
        {
          denom: 'band',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/64D8A78523B5EB0CC1AAE3F960EBE28D638B313BF4CA5B1CE023446D06D80CC5',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }
      ]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [
        {
          denom:
            'ibc/04EBBB330C7FD7A332FE2951234D933474211AD7038D66A0A971DA1AB222DD2D',
          exponent: 0,
          aliases: [
            'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593'
          ]
        },
        {
          denom: 'darc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/04EBBB330C7FD7A332FE2951234D933474211AD7038D66A0A971DA1AB222DD2D',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }
      ]
    },
    {
      description: 'The native token of Umee',
      denom_units: [
        {
          denom:
            'ibc/81BBC43EA381EA8E4830DF791CDAA77EC780137D7D2FDB7234A1ACD512C2B713',
          exponent: 0,
          aliases: [
            'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C'
          ]
        },
        {
          denom: 'umee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/81BBC43EA381EA8E4830DF791CDAA77EC780137D7D2FDB7234A1ACD512C2B713',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }
      ]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/357CAFC42451B31469FC8E8C2AAAA20F9557A0C1E86E115A420AFC9D7031F72C',
          exponent: 0,
          aliases: [
            'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44'
          ]
        },
        {
          denom: 'graviton',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/357CAFC42451B31469FC8E8C2AAAA20F9557A0C1E86E115A420AFC9D7031F72C',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }
      ]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [
        {
          denom:
            'ibc/1B7FAEE707B7009D4D0E2112EBED46025C04AF4347AACFCD529808EC0553738E',
          exponent: 0,
          aliases: [
            'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84'
          ]
        },
        {
          denom: 'dec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1B7FAEE707B7009D4D0E2112EBED46025C04AF4347AACFCD529808EC0553738E',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/32230BB446FF6A85051D6634F30D306035788730BB05B42F28C710588BA7FA54',
          exponent: 0,
          aliases: [
            'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6'
          ]
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/32230BB446FF6A85051D6634F30D306035788730BB05B42F28C710588BA7FA54',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }
      ]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/E3A8FF801FAE24BD9A912BD888B6B56671817C7D13142E6BFA657D919B5782F3',
          exponent: 0,
          aliases: [
            'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3'
          ]
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E3A8FF801FAE24BD9A912BD888B6B56671817C7D13142E6BFA657D919B5782F3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }
      ]
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom:
            'ibc/D5F668AA43F9DE1F5E8A443EC5F9DD2D71AB3F3DC42CCD374F8751615A13B70B',
          exponent: 0,
          aliases: [
            'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7'
          ]
        },
        {
          denom: 'crbrus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D5F668AA43F9DE1F5E8A443EC5F9DD2D71AB3F3DC42CCD374F8751615A13B70B',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom:
            'ibc/538FCE034D5106BAD45C58A47C664C8ACAA05E7A7D642EDEB4CCDA03C968BEE0',
          exponent: 0,
          aliases: [
            'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447'
          ]
        },
        {
          denom: 'fet',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/538FCE034D5106BAD45C58A47C664C8ACAA05E7A7D642EDEB4CCDA03C968BEE0',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/B6BFF361528ACBC86E089C20B5D409C2DB2416E782E522DBDA0EA41364AA4F8E',
          exponent: 0,
          aliases: [
            'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC'
          ]
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B6BFF361528ACBC86E089C20B5D409C2DB2416E782E522DBDA0EA41364AA4F8E',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/38786DB8D1F59E258C88CEF5F1BE477D074692AEC0E140A427656DB357D17A27',
          exponent: 0,
          aliases: [
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
          ]
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/38786DB8D1F59E258C88CEF5F1BE477D074692AEC0E140A427656DB357D17A27',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }
      ]
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/ACFAC255034E83CBC3FC80E9A2A9842D7FC63C6F5EAEE7521CE072F2FDE18044',
          exponent: 0,
          aliases: [
            'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273'
          ]
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/ACFAC255034E83CBC3FC80E9A2A9842D7FC63C6F5EAEE7521CE072F2FDE18044',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/3C48070E3E3A47E82302EE741AA951432545F115AF143056724761D8E56DB810',
          exponent: 0,
          aliases: [
            'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780'
          ]
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3C48070E3E3A47E82302EE741AA951432545F115AF143056724761D8E56DB810',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }
      ]
    },
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom:
            'ibc/E074EE8F08601E941FA830E3F12CD8FED2CB39CD9B35BB9CA0B479E99D1784E2',
          exponent: 0,
          aliases: [
            'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8'
          ]
        },
        {
          denom: 'tick',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E074EE8F08601E941FA830E3F12CD8FED2CB39CD9B35BB9CA0B479E99D1784E2',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/235F2EEF66989D2A832C56CA212615204ADC2E62CE74DBA1EA5E6AD471D125CA',
          exponent: 0,
          aliases: [
            'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB'
          ]
        },
        {
          denom: 'ROWAN',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/235F2EEF66989D2A832C56CA212615204ADC2E62CE74DBA1EA5E6AD471D125CA',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Shentu',
      denom_units: [
        {
          denom:
            'ibc/95D7732F3B845FCD050C34F66F934BCF88F1507561C6871EC24777CFDB8498BC',
          exponent: 0,
          aliases: [
            'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3'
          ]
        },
        {
          denom: 'ctk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/95D7732F3B845FCD050C34F66F934BCF88F1507561C6871EC24777CFDB8498BC',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }
      ]
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denom_units: [
        {
          denom:
            'ibc/D4F001185334E7A92ED22A6A5B378D1680E2A5CA01BA845D572E21AFADCBAA58',
          exponent: 0,
          aliases: [
            'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B'
          ]
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D4F001185334E7A92ED22A6A5B378D1680E2A5CA01BA845D572E21AFADCBAA58',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }
      ]
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denom_units: [
        {
          denom:
            'ibc/1EAC09745812DD90C33F424368EE2DA63DA926EB77A9CCE51154BD1868AE548C',
          exponent: 0,
          aliases: [
            'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788'
          ]
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1EAC09745812DD90C33F424368EE2DA63DA926EB77A9CCE51154BD1868AE548C',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }
      ]
    },
    {
      description:
        'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denom_units: [
        {
          denom:
            'ibc/D6CBBFC75BDAC0F2CD9C3C9EFCDE7DD49F86F03897037DBEC50D18BEEADB4400',
          exponent: 0,
          aliases: [
            'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE'
          ]
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D6CBBFC75BDAC0F2CD9C3C9EFCDE7DD49F86F03897037DBEC50D18BEEADB4400',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [
        {
          denom:
            'ibc/FA0A5425A3F6B53A3407CBE5B4DD3659BD070A79F8220F1C4FAAB315D5EA74BA',
          exponent: 0,
          aliases: [
            'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796'
          ]
        },
        {
          denom: 'gwbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA0A5425A3F6B53A3407CBE5B4DD3659BD070A79F8220F1C4FAAB315D5EA74BA',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [
        {
          denom:
            'ibc/1C4F19EB1F76C10D2CBFCE6000D76847C6C3B073B51460FAC9FCA6CED180294F',
          exponent: 0,
          aliases: [
            'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5'
          ]
        },
        {
          denom: 'gweth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1C4F19EB1F76C10D2CBFCE6000D76847C6C3B073B51460FAC9FCA6CED180294F',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [
        {
          denom:
            'ibc/6810E6D85774BF3831C78702C247683FF4946AE5F6BEA515CA5C1B9B964E845C',
          exponent: 0,
          aliases: [
            'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E'
          ]
        },
        {
          denom: 'gusdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6810E6D85774BF3831C78702C247683FF4946AE5F6BEA515CA5C1B9B964E845C',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [
        {
          denom:
            'ibc/BE9EC6C540A1A5A6374ED31FB7FA6B70171EFC4025B03A239E9AB355B8655FFC',
          exponent: 0,
          aliases: [
            'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5'
          ]
        },
        {
          denom: 'gdai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE9EC6C540A1A5A6374ED31FB7FA6B70171EFC4025B03A239E9AB355B8655FFC',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [
        {
          denom:
            'ibc/F60B02760681318C417650CB4A02C0B0D0894731E40FFE9447458641A1306665',
          exponent: 0,
          aliases: [
            'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805'
          ]
        },
        {
          denom: 'gusdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F60B02760681318C417650CB4A02C0B0D0894731E40FFE9447458641A1306665',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
        }
      ]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/53211EEF9C06B4C43030A3D9FC6E792F30DC53DE3D7494EAE8A58EBCA7450D76',
          exponent: 0,
          aliases: [
            'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3'
          ]
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/53211EEF9C06B4C43030A3D9FC6E792F30DC53DE3D7494EAE8A58EBCA7450D76',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }
      ]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [
        {
          denom:
            'ibc/BB34C1E80B664D15EF1E0118BC6DD0972EE4C51DA13ED5DEEB5657C9EA9437E9',
          exponent: 0,
          aliases: [
            'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2'
          ]
        },
        {
          denom: 'hash',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB34C1E80B664D15EF1E0118BC6DD0972EE4C51DA13ED5DEEB5657C9EA9437E9',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }
      ]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [
        {
          denom:
            'ibc/3BEE9405DFA19456F8257A86FBDAB8ED567996D63C40ECF50E3D55FBCB0A7E43',
          exponent: 0,
          aliases: [
            'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2'
          ]
        },
        {
          denom: 'glx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3BEE9405DFA19456F8257A86FBDAB8ED567996D63C40ECF50E3D55FBCB0A7E43',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        }
      ]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denom_units: [
        {
          denom:
            'ibc/1B9F8452DB9515052614443326E5179EA1089C48C7D7DE2CE84F9F482C45F757',
          exponent: 0,
          aliases: [
            'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1B9F8452DB9515052614443326E5179EA1089C48C7D7DE2CE84F9F482C45F757',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }
      ]
    },
    {
      description: 'Token governance for Junoswap',
      denom_units: [
        {
          denom:
            'ibc/58A6B6E84F1FC322C80164DE533307DC59AD0D1F0963DB169C1D202DBE4FF51F',
          exponent: 0,
          aliases: [
            'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC'
          ]
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/58A6B6E84F1FC322C80164DE533307DC59AD0D1F0963DB169C1D202DBE4FF51F',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }
      ]
    },
    {
      description:
        'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [
        {
          denom:
            'ibc/4E3BB7FB7D47F075195735A92DD08ACAD47FBABD6EF6CAA0674FA128C0DAB59D',
          exponent: 0,
          aliases: [
            'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA'
          ]
        },
        {
          denom: 'meme',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4E3BB7FB7D47F075195735A92DD08ACAD47FBABD6EF6CAA0674FA128C0DAB59D',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }
      ]
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denom_units: [
        {
          denom:
            'ibc/24935200973A5594399DDCEAF552226BDB78C9AF6998142504ED9579EB09326F',
          exponent: 0,
          aliases: [
            'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7'
          ]
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/24935200973A5594399DDCEAF552226BDB78C9AF6998142504ED9579EB09326F',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }
      ]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denom_units: [
        {
          denom:
            'ibc/2127FEBD9718BF6EC970C25382490946E306DE2F3EE6AAA2BDD76DC618A14588',
          exponent: 0,
          aliases: [
            'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484'
          ]
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2127FEBD9718BF6EC970C25382490946E306DE2F3EE6AAA2BDD76DC618A14588',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }
      ]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/462DC8AB005DD0E3FAA4E5D0F778C8992CE5182D5A970B04C5E41BDF011584F8',
          exponent: 0,
          aliases: [
            'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9'
          ]
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/462DC8AB005DD0E3FAA4E5D0F778C8992CE5182D5A970B04C5E41BDF011584F8',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }
      ]
    },
    {
      description: 'Native token of Rizon Chain',
      denom_units: [
        {
          denom:
            'ibc/807DE27A6E6CC8B89EF3F09FD31D00FD3B318486009E50CBAC441CEA1C6C83CD',
          exponent: 0,
          aliases: [
            'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219'
          ]
        },
        {
          denom: 'atolo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/807DE27A6E6CC8B89EF3F09FD31D00FD3B318486009E50CBAC441CEA1C6C83CD',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/2DAA5FC2FE412810B3D8CCA5599DD2A87BCBC55F91A31318DD7F7CE100F0ED8D',
          exponent: 0,
          aliases: [
            'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC'
          ]
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2DAA5FC2FE412810B3D8CCA5599DD2A87BCBC55F91A31318DD7F7CE100F0ED8D',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/34BBF4395C0F05064A8A46023C9A96AF6E694BDDCF47BC054FD4B8EFA0E94B5D',
          exponent: 0,
          aliases: [
            'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5'
          ]
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/34BBF4395C0F05064A8A46023C9A96AF6E694BDDCF47BC054FD4B8EFA0E94B5D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }
      ]
    },
    {
      description:
        'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denom_units: [
        {
          denom:
            'ibc/E9079D4AB6CAB16ECBA1070302FEA70E7F3F35D1C699B874CBBA444BCAF97A2E',
          exponent: 0,
          aliases: [
            'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049'
          ]
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E9079D4AB6CAB16ECBA1070302FEA70E7F3F35D1C699B874CBBA444BCAF97A2E',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }
      ]
    },
    {
      description:
        'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [
        {
          denom:
            'ibc/8D8EAA1E999993FAD27E939AE4431BA7C7B98184EFE8BA7839DC77C63ED878C2',
          exponent: 0,
          aliases: [
            'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4'
          ]
        },
        {
          denom: 'l1',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8D8EAA1E999993FAD27E939AE4431BA7C7B98184EFE8BA7839DC77C63ED878C2',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denom_units: [
        {
          denom:
            'ibc/B9D3404666BDE63208F56A67A70C120E8641F433E7F7A07E59B5B26F9B7BFE20',
          exponent: 0,
          aliases: [
            'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE'
          ]
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B9D3404666BDE63208F56A67A70C120E8641F433E7F7A07E59B5B26F9B7BFE20',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denom_units: [
        {
          denom:
            'ibc/F3B53226B0752A4307B22164F3355857C87906231FDAC022EB3EFBE8FF7B2B84',
          exponent: 0,
          aliases: [
            'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4'
          ]
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F3B53226B0752A4307B22164F3355857C87906231FDAC022EB3EFBE8FF7B2B84',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denom_units: [
        {
          denom:
            'ibc/EE2B8574A438F790F587D6A6F0463FF3F69655F63711CEBD426824295B22B6F1',
          exponent: 0,
          aliases: [
            'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3'
          ]
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EE2B8574A438F790F587D6A6F0463FF3F69655F63711CEBD426824295B22B6F1',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }
      ]
    },
    {
      description:
        "RAI is a non-pegged, ETH-backed stable asset. It is useful as more 'stable' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.",
      denom_units: [
        {
          denom:
            'ibc/044FCDEB6046AAEC446B7FF7006ACD688FAA562708EC1138B15C12A1D7647785',
          exponent: 0,
          aliases: [
            'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E'
          ]
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/044FCDEB6046AAEC446B7FF7006ACD688FAA562708EC1138B15C12A1D7647785',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denom_units: [
        {
          denom:
            'ibc/B44847AA170D31791199D6EBFF68C9C804208AAEBA8B7CCD2A10FBD9AEEBEE50',
          exponent: 0,
          aliases: [
            'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2'
          ]
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B44847AA170D31791199D6EBFF68C9C804208AAEBA8B7CCD2A10FBD9AEEBEE50',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/50912B240E434748AE6F111707E886EC49E414A8064A63E2F40B207B6D3163DA',
          exponent: 0,
          aliases: [
            'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE'
          ]
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/50912B240E434748AE6F111707E886EC49E414A8064A63E2F40B207B6D3163DA',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }
      ]
    },
    {
      description: 'The native token of Tgrade',
      denom_units: [
        {
          denom:
            'ibc/AB062FFA46C0D540DE3042722EB42366CDA32A9BA072A72633C16090653A6F24',
          exponent: 0,
          aliases: [
            'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C'
          ]
        },
        {
          denom: 'tgd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AB062FFA46C0D540DE3042722EB42366CDA32A9BA072A72633C16090653A6F24',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        }
      ]
    },
    {
      description:
        'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [
        {
          denom:
            'ibc/58982BFA0A901CC7BFC039BBDE691569CF5104A5B2B1F3828ECEE577737CD252',
          exponent: 0,
          aliases: [
            'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D'
          ]
        },
        {
          denom: 'echelon',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/58982BFA0A901CC7BFC039BBDE691569CF5104A5B2B1F3828ECEE577737CD252',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }
      ]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/E006519958AC578D8CFAF3AFCB5801E4387E0EBFAB1E4367303E4CC5EFEEB0B5',
          exponent: 0,
          aliases: [
            'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B'
          ]
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E006519958AC578D8CFAF3AFCB5801E4387E0EBFAB1E4367303E4CC5EFEEB0B5',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/77A46B30AE9BEB6F03F7FC600D8D60659A67A34AAC52A23C6BB49F8770B5CB5C',
          exponent: 0,
          aliases: [
            'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A'
          ]
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/77A46B30AE9BEB6F03F7FC600D8D60659A67A34AAC52A23C6BB49F8770B5CB5C',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/385429FEF5FD8242CBFAC2D1740F8783A25BA80F99090371AE94B3BC18E9781B',
          exponent: 0,
          aliases: [
            'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D'
          ]
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/385429FEF5FD8242CBFAC2D1740F8783A25BA80F99090371AE94B3BC18E9781B',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denom_units: [
        {
          denom:
            'ibc/01A7E5910A8DEAD03690AAC7DA3C558D5E50491B1E935592F389F0AD8082B51F',
          exponent: 0,
          aliases: [
            'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/01A7E5910A8DEAD03690AAC7DA3C558D5E50491B1E935592F389F0AD8082B51F',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        }
      ]
    },
    {
      description:
        'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denom_units: [
        {
          denom:
            'ibc/BF65E5061551DC2F62CEBC5795FA454CE4C214486AE5BC4DDB477495DD2669D3',
          exponent: 0,
          aliases: [
            'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49'
          ]
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BF65E5061551DC2F62CEBC5795FA454CE4C214486AE5BC4DDB477495DD2669D3',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denom_units: [
        {
          denom:
            'ibc/3C4539FA75D10038B9B9FEE727684F42AFE6DC882D54E9DDE57D03CA1A296C43',
          exponent: 0,
          aliases: [
            'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3C4539FA75D10038B9B9FEE727684F42AFE6DC882D54E9DDE57D03CA1A296C43',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denom_units: [
        {
          denom:
            'ibc/1B1DEEAE1B4C7F7DB6879340F2EE28343EB326522AB02FF4E3693729FD6B0576',
          exponent: 0,
          aliases: [
            'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8'
          ]
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1B1DEEAE1B4C7F7DB6879340F2EE28343EB326522AB02FF4E3693729FD6B0576',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }
      ]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/34B675CD245752FCADAC4A9E22B02FC002B13EA93B2BE938CD565B54468A51F8',
          exponent: 0,
          aliases: [
            'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580'
          ]
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/34B675CD245752FCADAC4A9E22B02FC002B13EA93B2BE938CD565B54468A51F8',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }
      ]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [
        {
          denom:
            'ibc/4D519E9022436B848247CCB7BCEB1A29F23E8B6C2578FF2E5EDF4399CB29F4DC',
          exponent: 0,
          aliases: [
            'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7'
          ]
        },
        {
          denom: 'lumen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4D519E9022436B848247CCB7BCEB1A29F23E8B6C2578FF2E5EDF4399CB29F4DC',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom:
            'ibc/13DB5FDD92C1FCFE804777F3CA0B59A9E8F338FA98401CA8BA4C1136FF2644E1',
          exponent: 0,
          aliases: [
            'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D'
          ]
        },
        {
          denom: 'ORAI',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/13DB5FDD92C1FCFE804777F3CA0B59A9E8F338FA98401CA8BA4C1136FF2644E1',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [
        {
          denom:
            'ibc/E9AD9A3A8F23F113507EC7F3139F54D6FE20FB4A4F469D3B928FCA4E21477F94',
          exponent: 0,
          aliases: [
            'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B'
          ]
        },
        {
          denom: 'cudos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E9AD9A3A8F23F113507EC7F3139F54D6FE20FB4A4F469D3B928FCA4E21477F94',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/C41C3B5A3B2D82890846712670127ED95EC5815445D771B3AF7562B097851C0A',
          exponent: 0,
          aliases: [
            'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE'
          ]
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C41C3B5A3B2D82890846712670127ED95EC5815445D771B3AF7562B097851C0A',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }
      ]
    },
    {
      description:
        'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [
        {
          denom:
            'ibc/37788147FC33630E6CC51C65812FBB7258A44F4370A3EF0AD1D89A77553214C3',
          exponent: 0,
          aliases: [
            'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604'
          ]
        },
        {
          denom: 'bld',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/37788147FC33630E6CC51C65812FBB7258A44F4370A3EF0AD1D89A77553214C3',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }
      ]
    },
    {
      description:
        'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [
        {
          denom:
            'ibc/972DED54146FF994C0CF07019EE92EE473E13990A4FE40B06CFE5BD3B2D9C785',
          exponent: 0,
          aliases: [
            'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5'
          ]
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/972DED54146FF994C0CF07019EE92EE473E13990A4FE40B06CFE5BD3B2D9C785',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/57BB38FA01689D3E4FA6ACE4009433179A4B233379FB32B80924AA04D9E412A2',
          exponent: 0,
          aliases: [
            'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B'
          ]
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/57BB38FA01689D3E4FA6ACE4009433179A4B233379FB32B80924AA04D9E412A2',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }
      ]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/821A55EB7CC269F4FDD677B9C96A36C8E46330B62168F3E5FA7EA53B19C2448F',
          exponent: 0,
          aliases: [
            'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3'
          ]
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/821A55EB7CC269F4FDD677B9C96A36C8E46330B62168F3E5FA7EA53B19C2448F',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/34EBA74436A1E755DF99072B23265EA57B8422F7C6B89EDAC9E8DD6F21B490BB',
          exponent: 0,
          aliases: [
            'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4'
          ]
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/34EBA74436A1E755DF99072B23265EA57B8422F7C6B89EDAC9E8DD6F21B490BB',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F535FE1A4EB96E3A6B45153B1187AC9B8BBEB2D230AEFBD196862BF421B92BAF',
          exponent: 0,
          aliases: [
            'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901'
          ]
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F535FE1A4EB96E3A6B45153B1187AC9B8BBEB2D230AEFBD196862BF421B92BAF',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/8BA23DEF74997F6F51FF2B2077405162FCF4120DC235DFF0D562A940B285C43E',
          exponent: 0,
          aliases: [
            'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A'
          ]
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8BA23DEF74997F6F51FF2B2077405162FCF4120DC235DFF0D562A940B285C43E',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }
      ]
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denom_units: [
        {
          denom:
            'ibc/A6A6C95CD22654BE1050CF4FEF599C163783C2965BAE343ADA224514835FD7B1',
          exponent: 0,
          aliases: [
            'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C'
          ]
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A6A6C95CD22654BE1050CF4FEF599C163783C2965BAE343ADA224514835FD7B1',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }
      ]
    },
    {
      description: 'StakeEasy governance token',
      denom_units: [
        {
          denom:
            'ibc/B96F2EB382E5A69A0C9B7D573F287B5C69EA4E16D127DB0A6DEA177DDFD8D5EF',
          exponent: 0,
          aliases: [
            'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6'
          ]
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B96F2EB382E5A69A0C9B7D573F287B5C69EA4E16D127DB0A6DEA177DDFD8D5EF',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/2CA254B78CE7F5F990066BEB5924FBC2DFEB142BB68C0A7893BDB229DF34D7F5',
          exponent: 0,
          aliases: [
            'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
          ]
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2CA254B78CE7F5F990066BEB5924FBC2DFEB142BB68C0A7893BDB229DF34D7F5',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom:
            'ibc/36C960E6504AC5E8FFF8F9ED3D1216FDF1FDD3A9D69630ABA93058ABAB6E0A89',
          exponent: 0,
          aliases: [
            'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9'
          ]
        },
        {
          denom: 'rebus',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/36C960E6504AC5E8FFF8F9ED3D1216FDF1FDD3A9D69630ABA93058ABAB6E0A89',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }
      ]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [
        {
          denom:
            'ibc/57371E019BBD3070D6AB2BE79F5851149EAE401541D8E9698424423D8B6152A0',
          exponent: 0,
          aliases: [
            'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC'
          ]
        },
        {
          denom: 'tori',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/57371E019BBD3070D6AB2BE79F5851149EAE401541D8E9698424423D8B6152A0',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B81EFCF0C617D3A0C36C4614F35E3257DA3B0E150614741EF40C89B7E701BA79',
          exponent: 0,
          aliases: [
            'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE'
          ]
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B81EFCF0C617D3A0C36C4614F35E3257DA3B0E150614741EF40C89B7E701BA79',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/712DD317E8DE4DDC5CBF8481BBE0DB1D48A16C8C28057D502A38F3671295C0AB',
          exponent: 0,
          aliases: [
            'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
          ]
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/712DD317E8DE4DDC5CBF8481BBE0DB1D48A16C8C28057D502A38F3671295C0AB',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/05C6750C27A83A1B090F85F39A846733917EF76B03820A5E41AA870FFDCEBD4C',
          exponent: 0,
          aliases: [
            'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F'
          ]
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/05C6750C27A83A1B090F85F39A846733917EF76B03820A5E41AA870FFDCEBD4C',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }
      ]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [
        {
          denom:
            'ibc/5DC6E13E07442A24C815AD539519BB565110795E6E690F0D3423F26C46FB96FF',
          exponent: 0,
          aliases: [
            'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB'
          ]
        },
        {
          denom: 'lamb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5DC6E13E07442A24C815AD539519BB565110795E6E690F0D3423F26C46FB96FF',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }
      ]
    },
    {
      description:
        'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/FD4F1E550F2A8E5F070A39D371D28324BFEEE97B656A181C116F5C1C7BFCAD46',
          exponent: 0,
          aliases: [
            'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC'
          ]
        },
        {
          denom: 'usk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FD4F1E550F2A8E5F070A39D371D28324BFEEE97B656A181C116F5C1C7BFCAD46',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }
      ]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [
        {
          denom:
            'ibc/EA212F486F566288FA3B5606D6836FA6AFFEC364C912BF3620808E804C602FB4',
          exponent: 0,
          aliases: [
            'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC'
          ]
        },
        {
          denom: 'FUND',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EA212F486F566288FA3B5606D6836FA6AFFEC364C912BF3620808E804C602FB4',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom:
            'ibc/CAFAB78DAA4E86F4D22F89D2F87611CE1DD5577D6E0BDDD477AC769946C88A14',
          exponent: 0,
          aliases: [
            'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA'
          ]
        },
        {
          denom: 'jkl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CAFAB78DAA4E86F4D22F89D2F87611CE1DD5577D6E0BDDD477AC769946C88A14',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/DA059A8539A06CA3A21FBE3AE0E2064B54EA7E25C9E072DEC5D73503B9ACB789',
          exponent: 0,
          aliases: [
            'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3'
          ]
        },
        {
          denom: 'alter',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DA059A8539A06CA3A21FBE3AE0E2064B54EA7E25C9E072DEC5D73503B9ACB789',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/45CFB12171536AC0E7BA51C3434A258935289E9C6FF73237759A72425F32995A',
          exponent: 0,
          aliases: [
            'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8'
          ]
        },
        {
          denom: 'butt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/45CFB12171536AC0E7BA51C3434A258935289E9C6FF73237759A72425F32995A',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/FD70FF1C215948E9F4E499B92A8976FCD43F9C3E4C2CBBE0260F98EF1BC05623',
          exponent: 0,
          aliases: [
            'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C'
          ]
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FD70FF1C215948E9F4E499B92A8976FCD43F9C3E4C2CBBE0260F98EF1BC05623',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/C47E5219EF552A9A3BFEE51DF17E7A994638BC7E817A714F700FC5DC4B200C15',
          exponent: 0,
          aliases: [
            'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213'
          ]
        },
        {
          denom: 'sienna',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C47E5219EF552A9A3BFEE51DF17E7A994638BC7E817A714F700FC5DC4B200C15',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }
      ]
    },
    {
      description:
        'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/5B54FAE264332EFA2A97AAD3B0D7614FE5DC3D76A95590E3F5C24D219EEDA0C9',
          exponent: 0,
          aliases: [
            'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4'
          ]
        },
        {
          denom: 'stkd-scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5B54FAE264332EFA2A97AAD3B0D7614FE5DC3D76A95590E3F5C24D219EEDA0C9',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }
      ]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [
        {
          denom:
            'ibc/9FAD0B23024D43319947C1C4598645560C7033F376BB2AFBF6A2980DBA7C270E',
          exponent: 0,
          aliases: [
            'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88'
          ]
        },
        {
          denom: 'bze',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9FAD0B23024D43319947C1C4598645560C7033F376BB2AFBF6A2980DBA7C270E',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/336A19931E5FF1CAB5D9167C7397EB1F1CFA2CED9D2CC8706CED04F305A5AECB',
          exponent: 0,
          aliases: [
            'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF'
          ]
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/336A19931E5FF1CAB5D9167C7397EB1F1CFA2CED9D2CC8706CED04F305A5AECB',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/08C30EA509CA53361FC9D2D5479D3F602899A03AECF1D08EC53894EC2CD17A68',
          exponent: 0,
          aliases: [
            'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06'
          ]
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/08C30EA509CA53361FC9D2D5479D3F602899A03AECF1D08EC53894EC2CD17A68',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/F08F2E6164998CBE3ACE403CE556EC6458AAD94C53B183C3B90A3790954466E9',
          exponent: 0,
          aliases: [
            'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E'
          ]
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F08F2E6164998CBE3ACE403CE556EC6458AAD94C53B183C3B90A3790954466E9',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Imversed',
      denom_units: [
        {
          denom:
            'ibc/50BE1883608D1617C93B8261AB20B608C19CE149B182EAB72EB373E302F7F91D',
          exponent: 0,
          aliases: [
            'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4'
          ]
        },
        {
          denom: 'imv',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/50BE1883608D1617C93B8261AB20B608C19CE149B182EAB72EB373E302F7F91D',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        }
      ]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [
        {
          denom:
            'ibc/6F0BAF194BCEAF635E706E07EB02927E7E9CEE12541E23670F562A2F5C7A5087',
          exponent: 0,
          aliases: [
            'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C'
          ]
        },
        {
          denom: 'medas',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6F0BAF194BCEAF635E706E07EB02927E7E9CEE12541E23670F562A2F5C7A5087',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }
      ],
      keywords: ['medas']
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/4FD2A4FEA3FC65FB0C04888FC145101C167E83FA44B00FC853159BF4BED6D0CC',
          exponent: 0,
          aliases: [
            'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B'
          ]
        },
        {
          denom: 'phmn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4FD2A4FEA3FC65FB0C04888FC145101C167E83FA44B00FC853159BF4BED6D0CC',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/B0811B32A36EA8062BEC6E1395BA10F6266DA6B15DFD3E45EEC403798650119B',
          exponent: 0,
          aliases: [
            'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55'
          ]
        },
        {
          denom: 'amber',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B0811B32A36EA8062BEC6E1395BA10F6266DA6B15DFD3E45EEC403798650119B',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }
      ]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [
        {
          denom:
            'ibc/3CFB40461F9550F75B0280F26AF32039F05536936DDB449AD7F5B42F5A971747',
          exponent: 0,
          aliases: [
            'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163'
          ]
        },
        {
          denom: 'nom',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3CFB40461F9550F75B0280F26AF32039F05536936DDB449AD7F5B42F5A971747',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }
      ],
      keywords: ['dex', 'stablecoin', 'bridge', 'staking']
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/7F3E093E7378D07F65D163F7188EA54CF9DBE046A0D9D05E5C815A839D58D3D3',
          exponent: 0,
          aliases: [
            'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC'
          ]
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7F3E093E7378D07F65D163F7188EA54CF9DBE046A0D9D05E5C815A839D58D3D3',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Dyson Protocol',
      denom_units: [
        {
          denom:
            'ibc/5768581F47D427C72F4D2EF7E027B02AEEE94F91D97F9963AD2D746995E90F9F',
          exponent: 0,
          aliases: [
            'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5768581F47D427C72F4D2EF7E027B02AEEE94F91D97F9963AD2D746995E90F9F',
      name: 'Dyson Protocol',
      display:
        'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/9008D03E6E5C1855DA41D7C02936BD588FE0180023E5264C0DC76ACE774CBE87',
          exponent: 0,
          aliases: [
            'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099'
          ]
        },
        {
          denom: 'hopers',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9008D03E6E5C1855DA41D7C02936BD588FE0180023E5264C0DC76ACE774CBE87',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/E0EE2830E47223406FA942909CD995DF24A8BF63152666996CDC27AC599FD520',
          exponent: 0,
          aliases: [
            'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F'
          ]
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E0EE2830E47223406FA942909CD995DF24A8BF63152666996CDC27AC599FD520',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom:
            'ibc/CE4E134596CFC666FBEC521B55D7C04D16F46B9ACBEC4A6E9527C8AE12011654',
          exponent: 0,
          aliases: [
            'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF'
          ]
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CE4E134596CFC666FBEC521B55D7C04D16F46B9ACBEC4A6E9527C8AE12011654',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }
      ]
    },
    {
      description:
        "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
      denom_units: [
        {
          denom:
            'ibc/DAF5C19BB4C3820F10E1EE8BFC6EEA3354E169B01EA89FFE6F004FA6E5E3FBF6',
          exponent: 0,
          aliases: [
            'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4'
          ]
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DAF5C19BB4C3820F10E1EE8BFC6EEA3354E169B01EA89FFE6F004FA6E5E3FBF6',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }
      ]
    },
    {
      description:
        'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom:
            'ibc/0D306A172D83D20E4C4F717A21028388591ACBBC01DBBAA34408F16CDD7A6D32',
          exponent: 0,
          aliases: [
            'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F'
          ]
        },
        {
          denom: 'canto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0D306A172D83D20E4C4F717A21028388591ACBBC01DBBAA34408F16CDD7A6D32',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [
        {
          denom:
            'ibc/BFCE363F1F2E17A6675A08E6C738D57D31B0C85C62FE1D03987B269388D9350C',
          exponent: 0,
          aliases: [
            'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83'
          ]
        },
        {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BFCE363F1F2E17A6675A08E6C738D57D31B0C85C62FE1D03987B269388D9350C',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }
      ]
    },
    {
      description: 'WYND DAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/96229F4725DAC4B1B873B0A15510E8064A6301F3324726E9431B134FD7F2C477',
          exponent: 0,
          aliases: [
            'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3'
          ]
        },
        {
          denom: 'wynd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/96229F4725DAC4B1B873B0A15510E8064A6301F3324726E9431B134FD7F2C477',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/6AA5CD6EB92993B4BBFD241822EBD8E8BF07A87144280E0132AA343C51CA37FA',
          exponent: 0,
          aliases: [
            'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A'
          ]
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6AA5CD6EB92993B4BBFD241822EBD8E8BF07A87144280E0132AA343C51CA37FA',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/32B2BF1133FA3F3FB4265C0CFDB0360796C60A777138D216FE2084131CD2BC49',
          exponent: 0,
          aliases: [
            'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C'
          ]
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/32B2BF1133FA3F3FB4265C0CFDB0360796C60A777138D216FE2084131CD2BC49',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        }
      ]
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/54F8200621BBAC86E5A98B3BEF7C467789B7ECB410C1AA052673977CAC849AE7',
          exponent: 0,
          aliases: [
            'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580'
          ]
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/54F8200621BBAC86E5A98B3BEF7C467789B7ECB410C1AA052673977CAC849AE7',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/5AB31E5D5B996B8F636ABDB4A9424F070219DAC427F780AA7163F4EA9E0A0E82',
          exponent: 0,
          aliases: [
            'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5'
          ]
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5AB31E5D5B996B8F636ABDB4A9424F070219DAC427F780AA7163F4EA9E0A0E82',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/220A176532FF94E64DE58F5D59715C0D5D34FF2701AF7685A78C0B3E2CFB7949',
          exponent: 0,
          aliases: [
            'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372'
          ]
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/220A176532FF94E64DE58F5D59715C0D5D34FF2701AF7685A78C0B3E2CFB7949',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/22B96F24983D75036208AAAD46A8CF61D64145F0A8B9D93534A5533BEE595E18',
          exponent: 0,
          aliases: [
            'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01'
          ]
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/22B96F24983D75036208AAAD46A8CF61D64145F0A8B9D93534A5533BEE595E18',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }
      ]
    },
    {
      description: 'nRide Token',
      denom_units: [
        {
          denom:
            'ibc/7CF18729D44093168CA34707281CA5C9EC25F1B367E21491AED083D252493EDC',
          exponent: 0,
          aliases: [
            'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C'
          ]
        },
        {
          denom: 'nride',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7CF18729D44093168CA34707281CA5C9EC25F1B367E21491AED083D252493EDC',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }
      ]
    },
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom:
            'ibc/808D5A49E0E7BC221D8718F953199803FB45536F561E99B83028C954F849D149',
          exponent: 0,
          aliases: [
            'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F'
          ]
        },
        {
          denom: 'ebl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/808D5A49E0E7BC221D8718F953199803FB45536F561E99B83028C954F849D149',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/5EB4450C4AB3DA92C9D28D6997F5FAF44F3F9D039CCF058268523E26BDC1860F',
          exponent: 0,
          aliases: [
            'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC'
          ]
        },
        {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5EB4450C4AB3DA92C9D28D6997F5FAF44F3F9D039CCF058268523E26BDC1860F',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/C66A07F8689F02329527CF02E8484AF424744FEF0B2E0B4B2864F6148E0B073E',
          exponent: 0,
          aliases: [
            'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A'
          ]
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C66A07F8689F02329527CF02E8484AF424744FEF0B2E0B4B2864F6148E0B073E',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [
        {
          denom:
            'ibc/AD09AE49ED639D5CD0D42E5DD6DB760FC6E1FFBE3BEAD5E99C0F59DCFB077EB4',
          exponent: 0,
          aliases: [
            'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206'
          ]
        },
        {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AD09AE49ED639D5CD0D42E5DD6DB760FC6E1FFBE3BEAD5E99C0F59DCFB077EB4',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }
      ]
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denom_units: [
        {
          denom:
            'ibc/F169E024F76CC831EBDE5AB74DC30F245A24A486B198EC880F9B2AAA1B147987',
          exponent: 0,
          aliases: [
            'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6'
          ]
        },
        {
          denom: 'fox',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F169E024F76CC831EBDE5AB74DC30F245A24A486B198EC880F9B2AAA1B147987',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }
      ]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/636B6E669BE713B5FB9C8C6A37C2E21D732AFA5132FDD5DA132B1EEA9F5D958A',
          exponent: 0,
          aliases: [
            'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D'
          ]
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/636B6E669BE713B5FB9C8C6A37C2E21D732AFA5132FDD5DA132B1EEA9F5D958A',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }
      ]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [
        {
          denom:
            'ibc/43A4F97E015BFAF4C7EA956AF3817AC496BDC8AAED28F1F65B5DE85C938EA97F',
          exponent: 0,
          aliases: [
            'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28'
          ]
        },
        {
          denom: 'ARKH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/43A4F97E015BFAF4C7EA956AF3817AC496BDC8AAED28F1F65B5DE85C938EA97F',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/24868E9B12D2DFC92B819BD65BC3A6285BE900684A177324F1F95F55E2B6E867',
          exponent: 0,
          aliases: [
            'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC'
          ]
        },
        {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/24868E9B12D2DFC92B819BD65BC3A6285BE900684A177324F1F95F55E2B6E867',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }
      ]
    },
    {
      description:
        'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [
        {
          denom:
            'ibc/B39326264A1BE976927C934524C4B1E60BC1D8D5F6629E5DA4D54B36890DBFA5',
          exponent: 0,
          aliases: [
            'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9'
          ]
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B39326264A1BE976927C934524C4B1E60BC1D8D5F6629E5DA4D54B36890DBFA5',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/C9BE94690630ACCCC02409C222D438BBCE348A1FB6754BD7E3554F7BCA8F8398',
          exponent: 0,
          aliases: [
            'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D'
          ]
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C9BE94690630ACCCC02409C222D438BBCE348A1FB6754BD7E3554F7BCA8F8398',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }
      ]
    },
    {
      description: 'Evmos Guardians governance token.',
      denom_units: [
        {
          denom:
            'ibc/F479BA04B5F2011BE88DDD5D42CF858452B3F6642BDC7499A412257D80142C4E',
          exponent: 0,
          aliases: [
            'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA'
          ]
        },
        {
          denom: 'grdn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F479BA04B5F2011BE88DDD5D42CF858452B3F6642BDC7499A412257D80142C4E',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }
      ]
    },
    {
      description: 'Mini Punks Token',
      denom_units: [
        {
          denom:
            'ibc/C0B41235785E3EDBD201C93006D04025146028564671377AE261BB673462302D',
          exponent: 0,
          aliases: [
            'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E'
          ]
        },
        {
          denom: 'mnpu',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C0B41235785E3EDBD201C93006D04025146028564671377AE261BB673462302D',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }
      ]
    },
    {
      description: 'Shiba Cosmos',
      denom_units: [
        {
          denom:
            'ibc/695E51F51C61637AAA6078030F291C234FDFD1D8AC101FB057DDF19BF44184A9',
          exponent: 0,
          aliases: [
            'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8'
          ]
        },
        {
          denom: 'shibac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/695E51F51C61637AAA6078030F291C234FDFD1D8AC101FB057DDF19BF44184A9',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }
      ]
    },
    {
      description: 'Sikoba Governance Token',
      denom_units: [
        {
          denom:
            'ibc/E077C84EB948272C654F23452DDD00E62B72634D516C643683184DC6DEFD338A',
          exponent: 0,
          aliases: [
            'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E'
          ]
        },
        {
          denom: 'sikoba',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E077C84EB948272C654F23452DDD00E62B72634D516C643683184DC6DEFD338A',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }
      ]
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom:
            'ibc/2DE651316E4474C0CC053ABFAD4A7C79EF3602E71DB619432A40A349CD4B9E7B',
          exponent: 0,
          aliases: [
            'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68'
          ]
        },
        {
          denom: 'nct',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2DE651316E4474C0CC053ABFAD4A7C79EF3602E71DB619432A40A349CD4B9E7B',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }
      ]
    },
    {
      description: 'Celestims',
      denom_units: [
        {
          denom:
            'ibc/B87D56478136DB967385F0C8D4E67AEA4AD3C6E6F3D5B9301DB6AD7AFC8859C9',
          exponent: 0,
          aliases: [
            'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA'
          ]
        },
        {
          denom: 'clst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B87D56478136DB967385F0C8D4E67AEA4AD3C6E6F3D5B9301DB6AD7AFC8859C9',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }
      ]
    },
    {
      description: 'The First Doge on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/6DC1F505185CA2A6546A88704121FE965FEBED526963D93158D92BD6BAB9EF83',
          exponent: 0,
          aliases: [
            'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156'
          ]
        },
        {
          denom: 'osdoge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6DC1F505185CA2A6546A88704121FE965FEBED526963D93158D92BD6BAB9EF83',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }
      ]
    },
    {
      description: 'Apemos',
      denom_units: [
        {
          denom:
            'ibc/C271F8943F6EDBD8BAA75697BA1C2EBE2B714C0EFB7D9940D2F69D36ACEA126B',
          exponent: 0,
          aliases: [
            'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D'
          ]
        },
        {
          denom: 'apemos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C271F8943F6EDBD8BAA75697BA1C2EBE2B714C0EFB7D9940D2F69D36ACEA126B',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }
      ]
    },
    {
      description: "Evmos Guardians' Invaders DAO token.",
      denom_units: [
        {
          denom:
            'ibc/7DCAA435BB02284EB4C1A0247D37B31CA8BCDB92569CBBA32BF8C0FAAAD11823',
          exponent: 0,
          aliases: [
            'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54'
          ]
        },
        {
          denom: 'invdrs',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7DCAA435BB02284EB4C1A0247D37B31CA8BCDB92569CBBA32BF8C0FAAAD11823',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }
      ]
    },
    {
      description: 'Doge Apr',
      denom_units: [
        {
          denom:
            'ibc/496D28017BD55E406416A6239EFFB973929E764C2740E1112846DEEAAA50ECF0',
          exponent: 0,
          aliases: [
            'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250'
          ]
        },
        {
          denom: 'doga',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/496D28017BD55E406416A6239EFFB973929E764C2740E1112846DEEAAA50ECF0',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }
      ]
    },
    {
      description: 'Catmos',
      denom_units: [
        {
          denom:
            'ibc/E2B6F1FEF1B596E4D6B46C872E84FFE92C49652352BD6619D090A3570291EAA9',
          exponent: 0,
          aliases: [
            'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835'
          ]
        },
        {
          denom: 'catmos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E2B6F1FEF1B596E4D6B46C872E84FFE92C49652352BD6619D090A3570291EAA9',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denom_units: [
        {
          denom:
            'ibc/25C28037EFA698CFE65D27F32E9E48C90D381392145A995FEA8785AC82B79F88',
          exponent: 0,
          aliases: [
            'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A'
          ]
        },
        {
          denom: 'summit',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/25C28037EFA698CFE65D27F32E9E48C90D381392145A995FEA8785AC82B79F88',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }
      ]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom:
            'ibc/C123D6171B500DCE33CE783342376ED3C5FC769EC00984F5837F37964DC7A189',
          exponent: 0,
          aliases: [
            'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F'
          ]
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C123D6171B500DCE33CE783342376ED3C5FC769EC00984F5837F37964DC7A189',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }
      ]
    },
    {
      description: 'Spacer',
      denom_units: [
        {
          denom:
            'ibc/0A163B4AD2939A8844A737603E1B4CB5A81CA099F9CDE18595B254FC2D81CD85',
          exponent: 0,
          aliases: [
            'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C'
          ]
        },
        {
          denom: 'spacer',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0A163B4AD2939A8844A737603E1B4CB5A81CA099F9CDE18595B254FC2D81CD85',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }
      ]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denom_units: [
        {
          denom:
            'ibc/FDB898F9DA67FE6D7B0CD51C1CB06B15B55679A3B63CD29CCFCED68BC0FD7FFC',
          exponent: 0,
          aliases: [
            'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29'
          ]
        },
        {
          denom: 'light',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FDB898F9DA67FE6D7B0CD51C1CB06B15B55679A3B63CD29CCFCED68BC0FD7FFC',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/32594373DFEA4751EB3EACCF8A686C5B02AF14C5D90C1ED07823B2DF14C0FC00',
          exponent: 0,
          aliases: [
            'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7'
          ]
        },
        {
          denom: 'silk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/32594373DFEA4751EB3EACCF8A686C5B02AF14C5D90C1ED07823B2DF14C0FC00',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }
      ]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denom_units: [
        {
          denom:
            'ibc/A5EB713C681761FBF3F7614B4AE651E2C803A7409C2FB2CD40F6F67C925CDB3A',
          exponent: 0,
          aliases: [
            'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF'
          ]
        },
        {
          denom: 'mile',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A5EB713C681761FBF3F7614B4AE651E2C803A7409C2FB2CD40F6F67C925CDB3A',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denom_units: [
        {
          denom:
            'ibc/89D9AB4B92059DDCEBDEA9B57A82ABB212C0699364981443BF434533B0123C42',
          exponent: 0,
          aliases: [
            'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B'
          ]
        },
        {
          denom: 'manna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/89D9AB4B92059DDCEBDEA9B57A82ABB212C0699364981443BF434533B0123C42',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }
      ]
    },
    {
      description:
        "Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin's model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.",
      denom_units: [
        {
          denom:
            'ibc/8CE28DFEE253557FE8DAE6EB9035E10AAB6C3950A3E0F58C43B7A22567DA806B',
          exponent: 0,
          aliases: [
            'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D'
          ]
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8CE28DFEE253557FE8DAE6EB9035E10AAB6C3950A3E0F58C43B7A22567DA806B',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }
      ]
    },
    {
      description: 'Void',
      denom_units: [
        {
          denom:
            'ibc/27CBFCBCEAF7006538B095A20AC2D3991CD6796FEFBE7500BBAFA52D28F72560',
          exponent: 0,
          aliases: [
            'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960'
          ]
        },
        {
          denom: 'void',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/27CBFCBCEAF7006538B095A20AC2D3991CD6796FEFBE7500BBAFA52D28F72560',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/FDCFFA3840F36B276F3B19B5FC9F5359F01A1ADFB8479BC96CFFFA216C811BAA',
          exponent: 0,
          aliases: [
            'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A'
          ]
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FDCFFA3840F36B276F3B19B5FC9F5359F01A1ADFB8479BC96CFFFA216C811BAA',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }
      ]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [
        {
          denom:
            'ibc/CF6A95ACA57D736F72728E1FA19E040A729E1A29993D06F396720F16A34FA393',
          exponent: 0,
          aliases: [
            'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8'
          ]
        },
        {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CF6A95ACA57D736F72728E1FA19E040A729E1A29993D06F396720F16A34FA393',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }
      ],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denom_units: [
        {
          denom:
            'ibc/73F36780DBC26AA3E6DA3EAE263E765F92AA5C0BDF35F941AA785E89497795BB',
          exponent: 0,
          aliases: [
            'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6'
          ]
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/73F36780DBC26AA3E6DA3EAE263E765F92AA5C0BDF35F941AA785E89497795BB',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }
      ]
    },
    {
      description: 'Silica',
      denom_units: [
        {
          denom:
            'ibc/F5AA260F322119215C9A86DC2A6B322F79FD747AE99638E01545FA5A74D313E5',
          exponent: 0,
          aliases: [
            'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07'
          ]
        },
        {
          denom: 'silica',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F5AA260F322119215C9A86DC2A6B322F79FD747AE99638E01545FA5A74D313E5',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }
      ]
    },
    {
      description: 'Pepec',
      denom_units: [
        {
          denom:
            'ibc/95CE54C9424E66E02E3EA95DB35724D4B2F4F1EE2B03579FCB22B376B6A73662',
          exponent: 0,
          aliases: [
            'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93'
          ]
        },
        {
          denom: 'pepec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/95CE54C9424E66E02E3EA95DB35724D4B2F4F1EE2B03579FCB22B376B6A73662',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }
      ]
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/66FCDF664EF5DD85E7E8A5BDFB5A677B60658D393ED326842164B4B2DA032DC8',
          exponent: 0,
          aliases: [
            'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B'
          ]
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/66FCDF664EF5DD85E7E8A5BDFB5A677B60658D393ED326842164B4B2DA032DC8',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4B39EC56434C4D8FAD896E608BD3E915601CCBF77265C5645874A42A50EAA6E4',
          exponent: 0,
          aliases: [
            'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx'
          ]
        },
        {
          denom: 'ibcx',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'ibc/4B39EC56434C4D8FAD896E608BD3E915601CCBF77265C5645874A42A50EAA6E4',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }
      ],
      coingecko_id: 'ibc-index',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description:
        'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denom_units: [
        {
          denom:
            'ibc/3F12037D404FDC33A520A6122758FEE1485EE57F4BF1A12249A5FF53C9CF4247',
          exponent: 0,
          aliases: [
            'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A'
          ]
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3F12037D404FDC33A520A6122758FEE1485EE57F4BF1A12249A5FF53C9CF4247',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      ]
    },
    {
      description:
        'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denom_units: [
        {
          denom:
            'ibc/D9A952E1645A1655B67027E6C78EB2559AE559C5F343513DC2CE1C21CA0EFDE3',
          exponent: 0,
          aliases: [
            'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222'
          ]
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D9A952E1645A1655B67027E6C78EB2559AE559C5F343513DC2CE1C21CA0EFDE3',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      ]
    },
    {
      description:
        "sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become's eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.",
      denom_units: [
        {
          denom:
            'ibc/AFC11D181B335439AD49294B2C642CDF06660451A64030F756B843FF7D1F3BCC',
          exponent: 0,
          aliases: [
            'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46'
          ]
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AFC11D181B335439AD49294B2C642CDF06660451A64030F756B843FF7D1F3BCC',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6B29CECEF0F44C71240042C2E257BFCA0D71A0C4C927E170364F7CFFC29C5C16',
          exponent: 0,
          aliases: [
            'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C'
          ]
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B29CECEF0F44C71240042C2E257BFCA0D71A0C4C927E170364F7CFFC29C5C16',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }
      ]
    },
    {
      description: 'The native token of Gitopia',
      denom_units: [
        {
          denom:
            'ibc/36B5CECEFC20F74A5084E894A5B358E1EDC33E68D093DE2961CA6AFB4C886540',
          exponent: 0,
          aliases: [
            'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3'
          ]
        },
        {
          denom: 'LORE',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/36B5CECEFC20F74A5084E894A5B358E1EDC33E68D093DE2961CA6AFB4C886540',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }
      ]
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denom_units: [
        {
          denom:
            'ibc/2673A63455ED898740EE88A1E9FFD70BCF775A584BAD42E50076F514A11F0D62',
          exponent: 0,
          aliases: [
            'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0'
          ]
        },
        {
          denom: 'roar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2673A63455ED898740EE88A1E9FFD70BCF775A584BAD42E50076F514A11F0D62',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/17ED53E5BFD44ADC716156C5CCE97417F9489E34C4E60725192F1F3AB1E2D2FB',
          exponent: 0,
          aliases: [
            'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F'
          ]
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/17ED53E5BFD44ADC716156C5CCE97417F9489E34C4E60725192F1F3AB1E2D2FB',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5C9F3AA2AB264730BCF28BF465A06793BB2B2843C1FB55E011D7E3849159D934',
          exponent: 0,
          aliases: [
            'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx'
          ]
        },
        {
          denom: 'stibcx',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'ibc/5C9F3AA2AB264730BCF28BF465A06793BB2B2843C1FB55E011D7E3849159D934',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/24565C7037FE0139C6897E20DE956761C2B148C0B0790DA9BF85C3E383C00F2A',
          exponent: 0,
          aliases: [
            'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782'
          ]
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/24565C7037FE0139C6897E20DE956761C2B148C0B0790DA9BF85C3E383C00F2A',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/78F5615AC5FE7676914853CABA18A3A19AA16187F1382FEE2145F99DFFB81D09',
          exponent: 0,
          aliases: [
            'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3'
          ]
        },
        {
          denom: 'cub',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/78F5615AC5FE7676914853CABA18A3A19AA16187F1382FEE2145F99DFFB81D09',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }
      ]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/9243838570A7812A6B1F4DC77455867CE213FD6CF1BB74435FAD1B3AD8371DB1',
          exponent: 0,
          aliases: [
            'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E'
          ]
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9243838570A7812A6B1F4DC77455867CE213FD6CF1BB74435FAD1B3AD8371DB1',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/C727DE941C39B6A780B10FF3B3CD72B7DAFAF625C2902433C3CD5A672B33A94B',
          exponent: 0,
          aliases: [
            'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682'
          ]
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C727DE941C39B6A780B10FF3B3CD72B7DAFAF625C2902433C3CD5A672B33A94B',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denom_units: [
        {
          denom:
            'ibc/1563FAB0D47868AD05A04A82A26E881010C4BB2A7C36840A5A23BC11EB98F83A',
          exponent: 0,
          aliases: [
            'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE'
          ]
        },
        {
          denom: 'casa',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1563FAB0D47868AD05A04A82A26E881010C4BB2A7C36840A5A23BC11EB98F83A',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom:
            'ibc/804D2A846E56D40931A2F1CD9FD89A00D0FF654F8FD087F675631D2AB48BC218',
          exponent: 0,
          aliases: [
            'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516'
          ]
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/804D2A846E56D40931A2F1CD9FD89A00D0FF654F8FD087F675631D2AB48BC218',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/7F4317799192ABD9116205FA71AF0D9FEBF2D225AE6B613F98BD3C5FAF27E1E6',
          exponent: 0,
          aliases: [
            'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C'
          ]
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7F4317799192ABD9116205FA71AF0D9FEBF2D225AE6B613F98BD3C5FAF27E1E6',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/2E15F6BDB40B012FEC7E7AD83DCBB842C4E1C00C762512AC422275459D5928D8',
          exponent: 0,
          aliases: [
            'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2E15F6BDB40B012FEC7E7AD83DCBB842C4E1C00C762512AC422275459D5928D8',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/E86C369839AE658834D23C0894E1C9A3ED91E021D8E4E8548962B49D3915AC18',
          exponent: 0,
          aliases: [
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477'
          ]
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E86C369839AE658834D23C0894E1C9A3ED91E021D8E4E8548962B49D3915AC18',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }
      ]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom:
            'ibc/4E7750AF29F10B36999C1B3391817445BA9DF232E85E4DEF09581ED3E398E325',
          exponent: 0,
          aliases: [
            'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85'
          ]
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4E7750AF29F10B36999C1B3391817445BA9DF232E85E4DEF09581ED3E398E325',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [
        {
          denom:
            'ibc/7AA4005FC5EDF8B501E7F53E044A6AE6E3FD3D3B2FB2FF4D99B6AAE679C6488D',
          exponent: 0,
          aliases: [
            'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38'
          ]
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7AA4005FC5EDF8B501E7F53E044A6AE6E3FD3D3B2FB2FF4D99B6AAE679C6488D',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }
      ]
    },
    {
      description:
        'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denom_units: [
        {
          denom:
            'ibc/F5205BAE870BF86FDE9577458CF0D1B51FE5D45A627E02479D3B84F5E7D0ECB4',
          exponent: 0,
          aliases: [
            'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E'
          ]
        },
        {
          denom: 'watr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F5205BAE870BF86FDE9577458CF0D1B51FE5D45A627E02479D3B84F5E7D0ECB4',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }
      ]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [
        {
          denom:
            'ibc/DC5CEC4EBF87B0404AF2A5113EF3661AFCC6329F3360A72AB6D09571E9580CBB',
          exponent: 0,
          aliases: [
            'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13'
          ]
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DC5CEC4EBF87B0404AF2A5113EF3661AFCC6329F3360A72AB6D09571E9580CBB',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }
      ]
    },
    {
      description:
        'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denom_units: [
        {
          denom:
            'ibc/B063BCBCD45084893C9889EBE472D666F7E6F56300897DCECDFD7EB88C3E8609',
          exponent: 0,
          aliases: [
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B063BCBCD45084893C9889EBE472D666F7E6F56300897DCECDFD7EB88C3E8609',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/126F26B7B86115B6FC29F96E35FDFCD7606C9DC459909B69F8E5AA4D07E4C18C',
          exponent: 0,
          aliases: [
            'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO'
          ]
        },
        {
          denom: 'ampOSMO',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'ibc/126F26B7B86115B6FC29F96E35FDFCD7606C9DC459909B69F8E5AA4D07E4C18C',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom:
            'ibc/1E2B4BE38E730A302B38CE779FDFD68640E5A953BE411F751D5A724BD5DBB64D',
          exponent: 0,
          aliases: [
            'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D'
          ]
        },
        {
          denom: 'sei',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E2B4BE38E730A302B38CE779FDFD68640E5A953BE411F751D5A724BD5DBB64D',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [
        {
          denom:
            'ibc/77218DF42C2BA214089CA6F98606F7A654DDA6400020144F72836E87C01F42A4',
          exponent: 0,
          aliases: [
            'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208'
          ]
        },
        {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/77218DF42C2BA214089CA6F98606F7A654DDA6400020144F72836E87C01F42A4',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom:
            'ibc/35DF6DD308C0F87E8D52854A5E6FEAA7ABAAA8007498FF09EF7118833899F779',
          exponent: 0,
          aliases: [
            'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED'
          ]
        },
        {
          denom: 'pasg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/35DF6DD308C0F87E8D52854A5E6FEAA7ABAAA8007498FF09EF7118833899F779',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4819C1DE015E792B50118A73D2EA378A793C6CD8AFFA62F37E741878B828DB5C',
          exponent: 0,
          aliases: [
            'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B'
          ]
        },
        {
          denom: 'stsomm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4819C1DE015E792B50118A73D2EA378A793C6CD8AFFA62F37E741878B828DB5C',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }
      ]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [
        {
          denom:
            'ibc/015278484477EAE93DDD3626739E392E8857F2EF06054B9335693EBCBEB31382',
          exponent: 0,
          aliases: [
            'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA'
          ]
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/015278484477EAE93DDD3626739E392E8857F2EF06054B9335693EBCBEB31382',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }
      ]
    },
    {
      description: 'The Official Bonk Inu token',
      denom_units: [
        {
          denom:
            'ibc/5ED21FC9A8B687F7C317F40709BD3CDD5FF46F060FC62DBF3B04BB96C766E60D',
          exponent: 0,
          aliases: [
            'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E'
          ]
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5ED21FC9A8B687F7C317F40709BD3CDD5FF46F060FC62DBF3B04BB96C766E60D',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }
      ]
    },
    {
      description:
        'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [
        {
          denom:
            'ibc/0C4318C674193797B5C14AA82CD475998F2E163BD2AC0FF04CC91653F22BF6CD',
          exponent: 0,
          aliases: [
            'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C'
          ]
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0C4318C674193797B5C14AA82CD475998F2E163BD2AC0FF04CC91653F22BF6CD',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
        }
      ]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [
        {
          denom:
            'ibc/AC2D4B8A271710E2673175A107C85EB80EB35B5DEED7C755AEBCFCCFF7ABA7F2',
          exponent: 0,
          aliases: [
            'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5'
          ]
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AC2D4B8A271710E2673175A107C85EB80EB35B5DEED7C755AEBCFCCFF7ABA7F2',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }
      ]
    },
    {
      description:
        'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [
        {
          denom:
            'ibc/45AE6D5C7A63339BF6E0200A0FA78CF9D495C2FDC67BD720198EE9C17AD3BE72',
          exponent: 0,
          aliases: [
            'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE'
          ]
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/45AE6D5C7A63339BF6E0200A0FA78CF9D495C2FDC67BD720198EE9C17AD3BE72',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg'
      },
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
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/35066AD2BBA1C1C8EAB5BE27F366DBA453B1A58008E1143FFCD53FC6EC33CD0A',
          exponent: 0,
          aliases: [
            'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B'
          ]
        },
        {
          denom: 'mnta',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/35066AD2BBA1C1C8EAB5BE27F366DBA453B1A58008E1143FFCD53FC6EC33CD0A',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9C057AB28CAEAADB678C4431B1D155743A319A1B58817DABA3B5BE0F4E8B1788',
          exponent: 0,
          aliases: [
            'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9'
          ]
        },
        {
          denom: 'dgl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9C057AB28CAEAADB678C4431B1D155743A319A1B58817DABA3B5BE0F4E8B1788',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }
      ]
    },
    {
      description:
        'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [
        {
          denom:
            'ibc/836B92AAFD49EFBE03CDB11E0686E3C4169EA938D03D1F6D94A666BAD46229FE',
          exponent: 0,
          aliases: [
            'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695'
          ]
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/836B92AAFD49EFBE03CDB11E0686E3C4169EA938D03D1F6D94A666BAD46229FE',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ]
    },
    {
      description:
        'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [
        {
          denom:
            'ibc/CB714AFF2290DA8281D22ABBA331DD07E9054AF506326516046D97DB8CA12B05',
          exponent: 0,
          aliases: [
            'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC'
          ]
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CB714AFF2290DA8281D22ABBA331DD07E9054AF506326516046D97DB8CA12B05',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/247DEF7C0E022DC3FAF5EB13A38C616252B5B85651803E03710CCBD581673C87',
          exponent: 0,
          aliases: [
            'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/247DEF7C0E022DC3FAF5EB13A38C616252B5B85651803E03710CCBD581673C87',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description:
        'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [
        {
          denom:
            'ibc/0BB23E756DD6BAC50257DA0BF943740B59C6F4AD6DA0C5D3FC137C713F46064B',
          exponent: 0,
          aliases: [
            'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668'
          ]
        },
        {
          denom: 'YieldETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0BB23E756DD6BAC50257DA0BF943740B59C6F4AD6DA0C5D3FC137C713F46064B',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
      ]
    },
    {
      description: 'The native staking token of XPLA.',
      denom_units: [
        {
          denom:
            'ibc/2ACA73FA18FD1FE0F936CF840919DA849189B8D131F9FD49B2AD034954CEA7A9',
          exponent: 0,
          aliases: [
            'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8'
          ]
        },
        {
          denom: 'xpla',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2ACA73FA18FD1FE0F936CF840919DA849189B8D131F9FD49B2AD034954CEA7A9',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }
      ]
    },
    {
      description:
        'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [
        {
          denom:
            'ibc/B90FC0647C920A3F76368D11FE854A75E5C275ECCC4A16641B4C965F8F674BF0',
          exponent: 0,
          aliases: [
            'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6'
          ]
        },
        {
          denom: 'oin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B90FC0647C920A3F76368D11FE854A75E5C275ECCC4A16641B4C965F8F674BF0',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }
      ]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [
        {
          denom:
            'ibc/622A676437FEE6723DC13B3F88E15EBB4315BDEDA98AF8F48CFD99725F9790E0',
          exponent: 0,
          aliases: [
            'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71'
          ]
        },
        {
          denom: 'neok',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/622A676437FEE6723DC13B3F88E15EBB4315BDEDA98AF8F48CFD99725F9790E0',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }
      ]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [
        {
          denom:
            'ibc/6BADD2C46506B84FE4D462986AA322D96087445BED67D6F18580D585149DCA4C',
          exponent: 0,
          aliases: [
            'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF'
          ]
        },
        {
          denom: 'rio',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6BADD2C46506B84FE4D462986AA322D96087445BED67D6F18580D585149DCA4C',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }
      ]
    },
    {
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'ibc/D909F180B345BB1E4FB098377F04C240DD4DB7BA17C2831547C02168686C6F9D',
          exponent: 0,
          aliases: [
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          ]
        },
        {
          denom: 'cdt',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/D909F180B345BB1E4FB098377F04C240DD4DB7BA17C2831547C02168686C6F9D',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }
      ],
      coingecko_id: 'collateralized-debt-token',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'ibc/A3372FC7EB2060C6EEDBD370AE0964B1049A4F9F23314910E07928D95F5045D1',
          exponent: 0,
          aliases: [
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          ]
        },
        {
          denom: 'mbrn',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/A3372FC7EB2060C6EEDBD370AE0964B1049A4F9F23314910E07928D95F5045D1',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }
      ],
      coingecko_id: 'membrane',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [
        {
          denom:
            'ibc/3DA7C3ABD1F24776E85E358B1D051E05C1BB04A9B08D2F5AC5A947EF4D2F984B',
          exponent: 0,
          aliases: [
            'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA'
          ]
        },
        {
          denom: 'sge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3DA7C3ABD1F24776E85E358B1D051E05C1BB04A9B08D2F5AC5A947EF4D2F984B',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom:
            'ibc/CDDA5BF5FDF233ED49BFE513D5652FAB109E4DBAC0647731E4234528DF885B93',
          exponent: 0,
          aliases: [
            'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862'
          ]
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CDDA5BF5FDF233ED49BFE513D5652FAB109E4DBAC0647731E4234528DF885B93',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
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
          denom:
            'ibc/D8EF1FBA15D6D5EC620C04E8D254EC701EF2A4A49B0045F49CDCB20A327199D3',
          exponent: 0,
          aliases: [
            'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7'
          ]
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D8EF1FBA15D6D5EC620C04E8D254EC701EF2A4A49B0045F49CDCB20A327199D3',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/ADC31808DC18EDA6291D857E0F36BC77127EE25E14F772BCE155621B54EE1400',
          exponent: 0,
          aliases: [
            'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B'
          ]
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/ADC31808DC18EDA6291D857E0F36BC77127EE25E14F772BCE155621B54EE1400',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [
        {
          denom:
            'ibc/C49101C9496666A9A872D22B76ED1DCFBE11991E11CDC22A75F76CBE270B94FF',
          exponent: 0,
          aliases: [
            'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A'
          ]
        },
        {
          denom: 'DORA',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C49101C9496666A9A872D22B76ED1DCFBE11991E11CDC22A75F76CBE270B94FF',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }
      ]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom:
            'ibc/07B53FBF19B2982942652835194389AABBBA4E68760F62B5E409EB92DB2E5E0E',
          exponent: 0,
          aliases: [
            'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65'
          ]
        },
        {
          denom: 'core',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/07B53FBF19B2982942652835194389AABBBA4E68760F62B5E409EB92DB2E5E0E',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }
      ],
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft']
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/AD4B55B4D96A75CA3A4608DF6C7E54CFCCE3335992E16BA7708D5522FE641323',
          exponent: 0,
          aliases: [
            'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877'
          ]
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AD4B55B4D96A75CA3A4608DF6C7E54CFCCE3335992E16BA7708D5522FE641323',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/C642A7E1C5FC31980940CAEED21D7200DB7230CB3CDF18CC379F95A1D34C407B',
          exponent: 0,
          aliases: [
            'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C642A7E1C5FC31980940CAEED21D7200DB7230CB3CDF18CC379F95A1D34C407B',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }
      ]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [
        {
          denom:
            'ibc/72DAC6ECBE885A334576ECFC390B4D6D770CF7E4FFE2682D77890F479B4066E4',
          exponent: 0,
          aliases: [
            'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9'
          ]
        },
        {
          denom: 'WFX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/72DAC6ECBE885A334576ECFC390B4D6D770CF7E4FFE2682D77890F479B4066E4',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
      ]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/3332C190D8842AF453D1B4C8DB04AA8D4303E1203F58D4EFE3554F7BF495A3DE',
          exponent: 0,
          aliases: [
            'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F'
          ]
        },
        {
          denom: 'nbtc',
          exponent: 14
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3332C190D8842AF453D1B4C8DB04AA8D4303E1203F58D4EFE3554F7BF495A3DE',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/5760107AF0BBF34C0875F176110F97CFE2D6B4CA5175B2C1D6CC1B4C08E6778C',
          exponent: 0,
          aliases: [
            'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90'
          ]
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5760107AF0BBF34C0875F176110F97CFE2D6B4CA5175B2C1D6CC1B4C08E6778C',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      ],
      keywords: ['nois', 'randomness', 'drand', 'wasm']
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [
        {
          denom:
            'ibc/5D98FB84A053607675006ED29A165F67B51FDFCEDDBEE1CFCB0F36BE5A78E44C',
          exponent: 0,
          aliases: [
            'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo'
          ]
        },
        {
          denom: 'sqosmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/5D98FB84A053607675006ED29A165F67B51FDFCEDDBEE1CFCB0F36BE5A78E44C',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom:
            'ibc/49D3E25B3142172E0AFFF8FA318D480361DBD0740A9C9EB7B4D0300FD7995ED6',
          exponent: 0,
          aliases: [
            'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7'
          ]
        },
        {
          denom: 'nstk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/49D3E25B3142172E0AFFF8FA318D480361DBD0740A9C9EB7B4D0300FD7995ED6',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/A13AA3B7F883624209295BC6A92C95B9991998D7576539B00D1462EEE4C0E8FC',
          exponent: 0,
          aliases: [
            'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02'
          ]
        },
        {
          denom: 'BRNCH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A13AA3B7F883624209295BC6A92C95B9991998D7576539B00D1462EEE4C0E8FC',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }
      ]
    },
    {
      description:
        'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denom_units: [
        {
          denom:
            'ibc/2B48E372A36B34F7F81AE717F3805535CB553E3419DF0545B39516E8A941D3DE',
          exponent: 0,
          aliases: [
            'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5'
          ]
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2B48E372A36B34F7F81AE717F3805535CB553E3419DF0545B39516E8A941D3DE',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom:
            'ibc/E35C7FCAF6616E74279A71715D24A54E46114EA11F96D5A1F916531A2142CA47',
          exponent: 0,
          aliases: [
            'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom'
          ]
        },
        {
          denom: 'sqatom',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/E35C7FCAF6616E74279A71715D24A54E46114EA11F96D5A1F916531A2142CA47',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom:
            'ibc/A11C220A3AA505044D32DEB089A5FA00B96187CD7A1CBA57890FBFEF21AD302B',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/A11C220A3AA505044D32DEB089A5FA00B96187CD7A1CBA57890FBFEF21AD302B',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }
      ],
      keywords: ['osmosis_unlisted'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [
        {
          denom:
            'ibc/AB52617B28668B094C3267D1F258898C647CB2E8DD72883DCBF3078B8E47AE66',
          exponent: 0,
          aliases: [
            'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D'
          ]
        },
        {
          denom: 'qwoyn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AB52617B28668B094C3267D1F258898C647CB2E8DD72883DCBF3078B8E47AE66',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }
      ]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/EA5E5A3574E94A17A2036A99B96408D88BF2DAC920815DC6A201E1E3D810021B',
          exponent: 0,
          aliases: [
            'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EA5E5A3574E94A17A2036A99B96408D88BF2DAC920815DC6A201E1E3D810021B',
      name: 'Bostrom Hydrogen',
      display:
        'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }
      ]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [
        {
          denom:
            'ibc/744D9B6BD47E9DD452376F74D021CD9FE2A8553E76956C3747CA672508D7E722',
          exponent: 0,
          aliases: [
            'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/744D9B6BD47E9DD452376F74D021CD9FE2A8553E76956C3747CA672508D7E722',
      name: 'Bostrom Tocyb',
      display:
        'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/6BE0F98B97AFCD900F6FDA54822674EBE0C5257ED5885F3FCBFCD1BA24C30990',
          exponent: 0,
          aliases: [
            'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA'
          ]
        },
        {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6BE0F98B97AFCD900F6FDA54822674EBE0C5257ED5885F3FCBFCD1BA24C30990',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/FEA66C3DAAAE9081FA6412723941264FD2CDB1AF8F07717358DB207D6D081FC8',
          exponent: 0,
          aliases: [
            'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424'
          ]
        },
        {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FEA66C3DAAAE9081FA6412723941264FD2CDB1AF8F07717358DB207D6D081FC8',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }
      ]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [
        {
          denom:
            'ibc/45DB2007C7DD332DC66CA7452CF69489D9158D3DE6978379D4644FD0E74001F8',
          exponent: 0,
          aliases: [
            'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7'
          ]
        },
        {
          denom: 'source',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/45DB2007C7DD332DC66CA7452CF69489D9158D3DE6978379D4644FD0E74001F8',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }
      ]
    },
    {
      description:
        "Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth's oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth's oracle program combines publishers' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth's oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.",
      denom_units: [
        {
          denom:
            'ibc/AA051EF7CE89A1F967148CC6A8D440453094B818E0D44BDF794E41F5FD2D3563',
          exponent: 0,
          aliases: [
            'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5'
          ]
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AA051EF7CE89A1F967148CC6A8D440453094B818E0D44BDF794E41F5FD2D3563',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/FB7DD99F7B1485935E8D3ACBBE7DE45B578DC99B76418965037A3AC4A720BD2D',
          exponent: 0,
          aliases: [
            'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E'
          ]
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FB7DD99F7B1485935E8D3ACBBE7DE45B578DC99B76418965037A3AC4A720BD2D',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ]
    },
    {
      description: 'Levana native token',
      denom_units: [
        {
          denom:
            'ibc/B64A07C006C0F5E260A8AD50BD53568F1FD4A0D75B7A9F8765C81BEAFDA62053',
          exponent: 0,
          aliases: [
            'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/B64A07C006C0F5E260A8AD50BD53568F1FD4A0D75B7A9F8765C81BEAFDA62053',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png'
        }
      ],
      coingecko_id: 'levana-protocol',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'Puppy',
      denom_units: [
        {
          denom:
            'ibc/A2EEC3A43AB03D6C23EA960FA002F4E4294A0DDCE6CC2AAE320C39B56D620C4F',
          exponent: 0,
          aliases: [
            'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963'
          ]
        },
        {
          denom: 'puppy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A2EEC3A43AB03D6C23EA960FA002F4E4294A0DDCE6CC2AAE320C39B56D620C4F',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/B4D25EADE9AEA72AD765EBF04580D5E1EC36A99FE5829E78EB597CDA49BA14EF',
          exponent: 0,
          aliases: [
            'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD'
          ]
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B4D25EADE9AEA72AD765EBF04580D5E1EC36A99FE5829E78EB597CDA49BA14EF',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ]
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/EA2F9730C3496ED83479D9238515311A9AFA60E3D24A3419BECDF2A2A8152F8C',
          exponent: 0,
          aliases: [
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          ]
        },
        {
          denom: 'milkTIA',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/EA2F9730C3496ED83479D9238515311A9AFA60E3D24A3419BECDF2A2A8152F8C',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }
      ],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/E53D7364BF10D9607C6E9CD0A4B7137C9C82BBB15428CF4B40E1FEA33AE20AF4',
          exponent: 0,
          aliases: [
            'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC'
          ]
        },
        {
          denom: 'ASH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E53D7364BF10D9607C6E9CD0A4B7137C9C82BBB15428CF4B40E1FEA33AE20AF4',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }
      ]
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/0E4544ACB88EA5B9E32BDC5B59A22FABAE9C81F98114162F90D4D6E8BA46EA1B',
          exponent: 0,
          aliases: [
            'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493'
          ]
        },
        {
          denom: 'RAC',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0E4544ACB88EA5B9E32BDC5B59A22FABAE9C81F98114162F90D4D6E8BA46EA1B',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }
      ]
    },
    {
      description: 'GUPPY',
      denom_units: [
        {
          denom:
            'ibc/AABF5588CC8EF6A8B5311ED263B79653569AEFCCC9C39C38C247C9D81CDEE80A',
          exponent: 0,
          aliases: [
            'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D'
          ]
        },
        {
          denom: 'GUPPY',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AABF5588CC8EF6A8B5311ED263B79653569AEFCCC9C39C38C247C9D81CDEE80A',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [
        {
          denom:
            'ibc/3919DC044895EAF340988E462444A51C8E3B72308CBD1066D01CF93EFF2266A9',
          exponent: 0,
          aliases: [
            'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA'
          ]
        },
        {
          denom: 'ISLM',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3919DC044895EAF340988E462444A51C8E3B72308CBD1066D01CF93EFF2266A9',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }
      ]
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom:
            'ibc/C84F9A2953156F52C0EA85CCFEB01757CABC09442C29721F7FE1C9A5C1A33FDC',
          exponent: 0,
          aliases: [
            'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D'
          ]
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C84F9A2953156F52C0EA85CCFEB01757CABC09442C29721F7FE1C9A5C1A33FDC',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/E03757CD9D4188D46A03A99C4BFBB29249A65685E5462272009B2A2097E57CF6',
          exponent: 0,
          aliases: [
            'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99'
          ]
        },
        {
          denom: 'page',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E03757CD9D4188D46A03A99C4BFBB29249A65685E5462272009B2A2097E57CF6',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }
      ]
    },
    {
      description: 'PURSE Token',
      denom_units: [
        {
          denom:
            'ibc/C4A3938C09D679F48362CAC88274C0E67830B2A3C2052BEB7652AE7FADB847BC',
          exponent: 0,
          aliases: [
            'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519'
          ]
        },
        {
          denom: 'PURSE',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C4A3938C09D679F48362CAC88274C0E67830B2A3C2052BEB7652AE7FADB847BC',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom:
            'ibc/C2ABCE9B4A2C703EB0AB5CAEDA6DCAAFE6AF5AB8EE2FADDEBB9CF3E04E0939E1',
          exponent: 0,
          aliases: [
            'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3'
          ]
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C2ABCE9B4A2C703EB0AB5CAEDA6DCAAFE6AF5AB8EE2FADDEBB9CF3E04E0939E1',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }
      ]
    },
    {
      description: 'Kleomedes Token',
      denom_units: [
        {
          denom:
            'ibc/A5F865E1931E3F1D7C6EE28820A3E05B158516C8F44F6D52C83EFCD119C6390E',
          exponent: 0,
          aliases: [
            'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF'
          ]
        },
        {
          denom: 'kleo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A5F865E1931E3F1D7C6EE28820A3E05B158516C8F44F6D52C83EFCD119C6390E',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }
      ]
    },
    {
      description: "NYX Token (NYX) is the Nym Network's native token.",
      denom_units: [
        {
          denom:
            'ibc/3FECA1464DA791D4A7670AD8EC9A7601B9F4C6CA8A3B367648E9BD378149DD61',
          exponent: 0,
          aliases: [
            'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317'
          ]
        },
        {
          denom: 'nyx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3FECA1464DA791D4A7670AD8EC9A7601B9F4C6CA8A3B367648E9BD378149DD61',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
      denom_units: [
        {
          denom:
            'ibc/8C29581DBB3FCED898231E3397FA6851B34A704054AB4FCAFCF7F8AFFAFFE2D7',
          exponent: 0,
          aliases: [
            'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539'
          ]
        },
        {
          denom: 'nym',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8C29581DBB3FCED898231E3397FA6851B34A704054AB4FCAFCF7F8AFFAFFE2D7',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }
      ]
    },
    {
      description: 'has a hat',
      denom_units: [
        {
          denom:
            'ibc/FEECEEC6CCB6A62719470E89401CFDE836E2BED4E40B9B9294882D6D5E64AA3D',
          exponent: 0,
          aliases: [
            'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7'
          ]
        },
        {
          denom: 'achihuahuawifhat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FEECEEC6CCB6A62719470E89401CFDE836E2BED4E40B9B9294882D6D5E64AA3D',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
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
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'ibc/3E6E493AE3A1844C2E2130E84029C04E8D278E577690B315D011ED78C246C9C7',
          exponent: 0,
          aliases: [
            'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C'
          ]
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3E6E493AE3A1844C2E2130E84029C04E8D278E577690B315D011ED78C246C9C7',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ]
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      denom_units: [
        {
          denom:
            'ibc/AFAA3B4C6570F305373DA0D458C0EABA8FD3187AE4EBE0EE0B721B4CFA6C1E72',
          exponent: 0,
          aliases: [
            'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE'
          ]
        },
        {
          denom: 'jape',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AFAA3B4C6570F305373DA0D458C0EABA8FD3187AE4EBE0EE0B721B4CFA6C1E72',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }
      ]
    },
    {
      description: 'Woof',
      denom_units: [
        {
          denom:
            'ibc/4763350DAF397EDB2B5EF7439ED604A0D2F2FF34CE4B743A22ACF75C70F54535',
          exponent: 0,
          aliases: [
            'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53'
          ]
        },
        {
          denom: 'WOOF',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4763350DAF397EDB2B5EF7439ED604A0D2F2FF34CE4B743A22ACF75C70F54535',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
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
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/E12D9224966C3381B8DA896BE426D774830C82F730721B1CE804C4E03EA13054',
          exponent: 0,
          aliases: [
            'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F'
          ]
        },
        {
          denom: 'sneaky',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E12D9224966C3381B8DA896BE426D774830C82F730721B1CE804C4E03EA13054',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/AF4CF77A64B784DE1C40471BBB366722DBE7FFEB8C42C71D2B7FB447BA193549',
          exponent: 0,
          aliases: [
            'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc'
          ]
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'ibc/AF4CF77A64B784DE1C40471BBB366722DBE7FFEB8C42C71D2B7FB447BA193549',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom:
            'ibc/36299D9A323E8B629254709DE51B3D0F965A35FAC178067AF3DEB7583E84B1E4',
          exponent: 0,
          aliases: [
            'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23'
          ]
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/36299D9A323E8B629254709DE51B3D0F965A35FAC178067AF3DEB7583E84B1E4',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denom_units: [
        {
          denom:
            'ibc/C5FF3F5759D6C55E983930D295D12968DDEF358CC59AE09C3085283F7BBEBC19',
          exponent: 0,
          aliases: [
            'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A'
          ]
        },
        {
          denom: 'sgnl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C5FF3F5759D6C55E983930D295D12968DDEF358CC59AE09C3085283F7BBEBC19',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }
      ]
    },
    {
      description:
        "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      denom_units: [
        {
          denom:
            'ibc/BEEBCB44C03068B40BD4709196D5205ED2F78878611D41BC56DD223410AEF4AF',
          exponent: 0,
          aliases: ['factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO']
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'ibc/BEEBCB44C03068B40BD4709196D5205ED2F78878611D41BC56DD223410AEF4AF',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom:
            'ibc/E4583A41DD728B66583FEC88608A11CCCF0BEFFE7213DA0D47A770AE80908B98',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'ibc/E4583A41DD728B66583FEC88608A11CCCF0BEFFE7213DA0D47A770AE80908B98',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/37D1676E6DF5560CB8EBE6F46B1887506460C28673B766678EAF697DC9AD6487',
          exponent: 0,
          aliases: [
            'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1'
          ]
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/37D1676E6DF5560CB8EBE6F46B1887506460C28673B766678EAF697DC9AD6487',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked DYDX",
      denom_units: [
        {
          denom:
            'ibc/FEE633638D3E235707C6D7919EB1B41FB0EABCB57D24F88BCC4234E8DE98C65B',
          exponent: 0,
          aliases: [
            'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C'
          ]
        },
        {
          denom: 'stDYDX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FEE633638D3E235707C6D7919EB1B41FB0EABCB57D24F88BCC4234E8DE98C65B',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/D539D691A248CF91B1EA86D5A25A4FC991CCD11A992C7BE2C27DF95471759ED9',
          exponent: 0,
          aliases: [
            'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9'
          ]
        },
        {
          denom: 'stTIA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D539D691A248CF91B1EA86D5A25A4FC991CCD11A992C7BE2C27DF95471759ED9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }
      ]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [
        {
          denom:
            'ibc/B2D343F5D4204F65052BB667A104FC5D605412932B9F912D2D25089426278547',
          exponent: 0,
          aliases: [
            'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B2D343F5D4204F65052BB667A104FC5D605412932B9F912D2D25089426278547',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom:
            'ibc/169F14EF1359F28365DB5E42128A0C49710007E27EE7EBA1B5E0C680DC796240',
          exponent: 0,
          aliases: [
            'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110'
          ]
        },
        {
          denom: 'dym',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/169F14EF1359F28365DB5E42128A0C49710007E27EE7EBA1B5E0C680DC796240',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }
      ]
    },
    {
      description:
        'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denom_units: [
        {
          denom:
            'ibc/092D557C80CC97070CF0BB106E03B6D4B8009B678E288BD7B13E339027137E7E',
          exponent: 0,
          aliases: ['factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR']
        },
        {
          denom: 'RAPTR',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'ibc/092D557C80CC97070CF0BB106E03B6D4B8009B678E288BD7B13E339027137E7E',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
        }
      ],
      keywords: ['osmosis_unlisted'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/772155EEF00BA870FBE1345909200160C789501A1898E7AD8A82D14F3100D411',
          exponent: 0,
          aliases: [
            'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43'
          ]
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/772155EEF00BA870FBE1345909200160C789501A1898E7AD8A82D14F3100D411',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Sail DAO Token',
      denom_units: [
        {
          denom:
            'ibc/8AB88C0D359840C50442995B8053323F94BAC6AF040E12F7F2517EDD5475A909',
          exponent: 0,
          aliases: [
            'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail'
          ]
        },
        {
          denom: 'sail',
          exponent: 6
        }
      ],
      base: 'ibc/8AB88C0D359840C50442995B8053323F94BAC6AF040E12F7F2517EDD5475A909',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/C4DD2EA6C8EF05200B421AE1A7F32456E7DAA4CCCAAB46E15DA7708FA4FAD86B',
          exponent: 0,
          aliases: [
            'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C'
          ]
        },
        {
          denom: 'nom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C4DD2EA6C8EF05200B421AE1A7F32456E7DAA4CCCAAB46E15DA7708FA4FAD86B',
      name: 'Nomic',
      display: 'nomic',
      symbol: 'nomic.NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom:
            'ibc/A0D3354FEE016A4C95710FFF127DD73A50C0F26474A833061F80A86F4B59B41C',
          exponent: 0,
          aliases: [
            'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          ]
        },
        {
          denom: 'BADKID',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'ibc/A0D3354FEE016A4C95710FFF127DD73A50C0F26474A833061F80A86F4B59B41C',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-259',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }
      ]
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/A805A35333912DC7910E8BC433AA37B819B6CD9BC6C95BD3D05CF3B98A8C0F79',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      base: 'ibc/A805A35333912DC7910E8BC433AA37B819B6CD9BC6C95BD3D05CF3B98A8C0F79',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      base: 'ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingecko_id: 'stkatom',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'stk/uatom',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [
        {
          denom:
            'ibc/FF5515105E7C0C94581CE60A446BC2BD9F522E94123440D447AEA3AAF2BEC0E6',
          exponent: 0,
          aliases: [
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FF5515105E7C0C94581CE60A446BC2BD9F522E94123440D447AEA3AAF2BEC0E6',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      keywords: ['canon'],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/92AF8454D98E933913F4B2EA4733C74F47B13BF89A8626E03F964B6D15F9204C',
          exponent: 0,
          aliases: [
            'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/92AF8454D98E933913F4B2EA4733C74F47B13BF89A8626E03F964B6D15F9204C',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom:
              'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'Tether USDT on Persistence',
      denom_units: [
        {
          denom:
            'ibc/53AC66B96AEE3E7EB02A347C0A5F1FD0861F4F9CB053097D6297F840AB66B903',
          exponent: 0,
          aliases: [
            'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4'
          ]
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/53AC66B96AEE3E7EB02A347C0A5F1FD0861F4F9CB053097D6297F840AB66B903',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom:
              'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/218BA1CD941B0CB15A51E8E6F132B3739C563794F248C651C69645338BBC8978',
          exponent: 0,
          aliases: [
            'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0'
          ]
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/218BA1CD941B0CB15A51E8E6F132B3739C563794F248C651C69645338BBC8978',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom:
              'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      description: 'dydx staking token',
      denom_units: [
        {
          denom:
            'ibc/371AB0334D13195FA5610EACAECDB6CBA9927CB26C03F86E1E00A5B703771A4F',
          exponent: 0,
          aliases: [
            'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E'
          ]
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/371AB0334D13195FA5610EACAECDB6CBA9927CB26C03F86E1E00A5B703771A4F',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom:
              'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/FE2B3234867CA424022E11AB4FB4A5D65AD2AFD666C1026F293822C92B42021C',
          exponent: 0,
          aliases: ['stk/uosmo']
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      base: 'ibc/FE2B3234867CA424022E11AB4FB4A5D65AD2AFD666C1026F293822C92B42021C',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      coingecko_id: 'pstake-staked-osmo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'stk/uosmo',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked DYDX',
      denom_units: [
        {
          denom:
            'ibc/5B92FFD83A9384D10DFFD9714A81987CF4B982326460A725C3A4664AEC0B33B1',
          exponent: 0,
          aliases: ['stk/adydx']
        },
        {
          denom: 'stkdydx',
          exponent: 18,
          aliases: ['stk/dydx']
        }
      ],
      base: 'ibc/5B92FFD83A9384D10DFFD9714A81987CF4B982326460A725C3A4664AEC0B33B1',
      name: 'PSTAKE staked DYDX',
      display: 'stkdydx',
      symbol: 'stkDYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'stk/adydx',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom:
            'ibc/F2A6A3D4C02E003CC3EDB84CFD1C6F8F0E21EE6815575C5FE82FAC7D96106239',
          exponent: 0,
          aliases: ['aplanq']
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      base: 'ibc/F2A6A3D4C02E003CC3EDB84CFD1C6F8F0E21EE6815575C5FE82FAC7D96106239',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [
        {
          denom:
            'ibc/F6C35EC5693C98225A927A3A4C6B006B292D470B58587BCB108BCF3796ABFDBF',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        },
        {
          denom: 'srcx',
          exponent: 9
        }
      ],
      base: 'ibc/F6C35EC5693C98225A927A3A4C6B006B292D470B58587BCB108BCF3796ABFDBF',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [
        {
          denom:
            'ibc/107ED1024220D5EE2A3E81BACD4A0B6709687F09043A53348E6D7E7647375593',
          exponent: 0,
          aliases: ['ario']
        },
        {
          denom: 'rio',
          exponent: 18
        }
      ],
      base: 'ibc/107ED1024220D5EE2A3E81BACD4A0B6709687F09043A53348E6D7E7647375593',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ario',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-115'
          }
        }
      ]
    },
    {
      description:
        'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [
        {
          denom:
            'ibc/022B0D10D04FD14452AC343EE4C1F556F9A4335BA270E5F278B1E9558005F41E',
          exponent: 0,
          aliases: ['arst']
        },
        {
          denom: 'rst',
          exponent: 18
        }
      ],
      base: 'ibc/022B0D10D04FD14452AC343EE4C1F556F9A4335BA270E5F278B1E9558005F41E',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'arst',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-115'
          }
        }
      ]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/CC4EF9E26EC1C0BDEA058F5F08778C38E140353AF6E360B079EE3124018A1CC9',
          exponent: 0,
          aliases: ['uregen']
        },
        {
          denom: 'regen',
          exponent: 6
        }
      ],
      base: 'ibc/CC4EF9E26EC1C0BDEA058F5F08778C38E140353AF6E360B079EE3124018A1CC9',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-100',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }
      ]
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom:
            'ibc/B6E4B5AEE75215447407F6D044B6708087D7E80D4D7FCCB040E07A97F5360EE3',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        },
        {
          denom: 'nct',
          exponent: 6
        }
      ],
      base: 'ibc/B6E4B5AEE75215447407F6D044B6708087D7E80D4D7FCCB040E07A97F5360EE3',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-100',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }
      ]
    },
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom:
            'ibc/A7A5C44AA67317F1B3FFB27BAFC89C9CC04F61306F6F834F89A74B8F82D252A1',
          exponent: 0,
          aliases: ['usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      base: 'ibc/A7A5C44AA67317F1B3FFB27BAFC89C9CC04F61306F6F834F89A74B8F82D252A1',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom:
            'ibc/057296871B218BA6917759FDB7DF7B9948DC6676C8C085CCC1CF002FE54D8ADE',
          exponent: 0,
          aliases: ['ufis']
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      base: 'ibc/057296871B218BA6917759FDB7DF7B9948DC6676C8C085CCC1CF002FE54D8ADE',
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
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-63'
          }
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom:
            'ibc/CA4AC8725BA74A291623BACAA8733DCC300D2A43059FB2EDB38657D794D8C7E2',
          exponent: 0,
          aliases: ['uratom']
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      base: 'ibc/CA4AC8725BA74A291623BACAA8733DCC300D2A43059FB2EDB38657D794D8C7E2',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uratom',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-63'
          }
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
          denom:
            'ibc/C261CEF966F732DA0BE95A393DA006BC210DF4FC37734659A5A39B8B98A9F130',
          exponent: 0,
          aliases: ['uriris']
        },
        {
          denom: 'riris',
          exponent: 6
        }
      ],
      base: 'ibc/C261CEF966F732DA0BE95A393DA006BC210DF4FC37734659A5A39B8B98A9F130',
      name: 'rIRIS',
      display: 'riris',
      symbol: 'rIRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uriris',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-63'
          }
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
          denom:
            'ibc/2636CEE6F6F45493C2450CE5D1FD444740761BB704320E6535405169CBBF8429',
          exponent: 0,
          aliases: ['urhuahua']
        },
        {
          denom: 'rhuahua',
          exponent: 6
        }
      ],
      base: 'ibc/2636CEE6F6F45493C2450CE5D1FD444740761BB704320E6535405169CBBF8429',
      name: 'rHUAHUA',
      display: 'rhuahua',
      symbol: 'rHUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'urhuahua',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-63'
          }
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
          denom:
            'ibc/86541676FB0BBB693E386E3EBB7B6A3D4D4620ACD02C72B396E49C2B969E0B1B',
          exponent: 0,
          aliases: ['urswth']
        },
        {
          denom: 'rswth',
          exponent: 8
        }
      ],
      base: 'ibc/86541676FB0BBB693E386E3EBB7B6A3D4D4620ACD02C72B396E49C2B969E0B1B',
      name: 'rSWTH',
      display: 'rswth',
      symbol: 'rSWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'urswth',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-63'
          }
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
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/6D84A72C48A3EA8A690083487F1586628F443FAE5F92175E4684B0744490A356',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      base: 'ibc/6D84A72C48A3EA8A690083487F1586628F443FAE5F92175E4684B0744490A356',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [
        {
          denom:
            'ibc/24288F0A2EC227D12787C52A888E25BF18F28936F91D6AD1B6902AF76E812AB1',
          exponent: 0,
          aliases: [
            'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE'
          ]
        },
        {
          denom: 'GAZE',
          exponent: 6
        }
      ],
      base: 'ibc/24288F0A2EC227D12787C52A888E25BF18F28936F91D6AD1B6902AF76E812AB1',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/4B3D057ABAC89606598DB42AD15385921BB93768EEEA72A6D0E6F0AE26F6AA17',
          exponent: 0,
          aliases: [
            'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          ]
        },
        {
          denom: 'BRNCH',
          exponent: 6
        }
      ],
      base: 'ibc/4B3D057ABAC89606598DB42AD15385921BB93768EEEA72A6D0E6F0AE26F6AA17',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [
        {
          denom:
            'ibc/1A33B79D89C91B0625C59BB5F4158A91D3991984A6975BCDB542965D77C7EDC1',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH']
        },
        {
          denom: 'OHH',
          exponent: 6
        }
      ],
      base: 'ibc/1A33B79D89C91B0625C59BB5F4158A91D3991984A6975BCDB542965D77C7EDC1',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/C7610F4CC26949D958355832981F78C1362AF627F39E0EB5DC7C3198B6755C4D',
          exponent: 0,
          aliases: [
            'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          ]
        },
        {
          denom: 'sneaky',
          exponent: 6
        }
      ],
      base: 'ibc/C7610F4CC26949D958355832981F78C1362AF627F39E0EB5DC7C3198B6755C4D',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/239BFF83852F67DF5243DB89F339FF7FDBF858437F961CAB6DA5B5ADEFB2BC07',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      base: 'ibc/239BFF83852F67DF5243DB89F339FF7FDBF858437F961CAB6DA5B5ADEFB2BC07',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      base: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/65BBFDCFCB97F876E3C0415379117A830E144E5A2FC53CEF2C6CA0C56C239F83',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      base: 'ibc/65BBFDCFCB97F876E3C0415379117A830E144E5A2FC53CEF2C6CA0C56C239F83',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      coingecko_id: 'stride-staked-stars',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      base: 'ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingecko_id: 'stride-staked-osmo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C905C540D8BEE0589D9442156F58D8BAA97CB549F44CFF68CB51AD0AEDD0B4EC',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      base: 'ibc/C905C540D8BEE0589D9442156F58D8BAA97CB549F44CFF68CB51AD0AEDD0B4EC',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingecko_id: 'stride-staked-juno',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/8A1E8428A7196BE19FA7C749B0229019DB60B0776B81896803587BE00197322E',
          exponent: 0,
          aliases: ['stuluna']
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      base: 'ibc/8A1E8428A7196BE19FA7C749B0229019DB60B0776B81896803587BE00197322E',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stuluna',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      coingecko_id: 'stride-staked-luna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C19813F6D22F91CC64D2EEDF8702904DD61E0D022972EDFE0039F70C8A6EAD24',
          exponent: 0,
          aliases: ['stinj']
        },
        {
          denom: 'stINJ',
          exponent: 18
        }
      ],
      base: 'ibc/C19813F6D22F91CC64D2EEDF8702904DD61E0D022972EDFE0039F70C8A6EAD24',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stinj',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/8B2745EE933D5CD1DB592701FD4A1F0E534BD9A6B2F369DB86FAE0342A2857A6',
          exponent: 0,
          aliases: ['staevmos']
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      base: 'ibc/8B2745EE933D5CD1DB592701FD4A1F0E534BD9A6B2F369DB86FAE0342A2857A6',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'staevmos',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      coingecko_id: 'stride-staked-evmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked DYDX",
      denom_units: [
        {
          denom:
            'ibc/688C55F14585C398B453E88F0880EF99E93D6DCF7E2FE547E01C3A38B2CD9724',
          exponent: 0,
          aliases: ['stadydx']
        },
        {
          denom: 'stDYDX',
          exponent: 18
        }
      ],
      base: 'ibc/688C55F14585C398B453E88F0880EF99E93D6DCF7E2FE547E01C3A38B2CD9724',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stadydx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/B7C002D971791D2B18FEAA2557F925BFA9DEB0B4E7CA2B414376CB39D3C1F92E',
          exponent: 0,
          aliases: ['stutia']
        },
        {
          denom: 'stTIA',
          exponent: 6
        }
      ],
      base: 'ibc/B7C002D971791D2B18FEAA2557F925BFA9DEB0B4E7CA2B414376CB39D3C1F92E',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stutia',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/A4D896411D473643AFBD9DB7F760FF616B614A038EEB7C1DF2899BF89C4D168D',
          exponent: 0,
          aliases: ['stuumee']
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      base: 'ibc/A4D896411D473643AFBD9DB7F760FF616B614A038EEB7C1DF2899BF89C4D168D',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stuumee',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      coingecko_id: 'stride-staked-umee',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6C36037FCE972E968E7A76DA55B4704707E8283E2429A539C0F6F27231F5A939',
          exponent: 0,
          aliases: ['stucmdx']
        },
        {
          denom: 'stcmdx',
          exponent: 6
        }
      ],
      base: 'ibc/6C36037FCE972E968E7A76DA55B4704707E8283E2429A539C0F6F27231F5A939',
      name: 'Stride Staked CMDX',
      display: 'stcmdx',
      symbol: 'stCMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stucmdx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/711660412231258B21AC4D3FBA5060EED592686468B9992D2A63F79E0D2B580D',
          exponent: 0,
          aliases: ['stusomm']
        },
        {
          denom: 'stsomm',
          exponent: 6
        }
      ],
      base: 'ibc/711660412231258B21AC4D3FBA5060EED592686468B9992D2A63F79E0D2B580D',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'stusomm',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-32'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      coingecko_id: 'stride-staked-sommelier',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }
      ]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [
        {
          denom:
            'ibc/91DAE8E9D19A6A770D2A787E54E1D388F8E603D89093FC4939CE36125CB8284D',
          exponent: 0,
          aliases: ['utori']
        },
        {
          denom: 'tori',
          exponent: 6
        }
      ],
      base: 'ibc/91DAE8E9D19A6A770D2A787E54E1D388F8E603D89093FC4939CE36125CB8284D',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [
        {
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-89'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/651FB42894F72E09E8148158E6B8F0F560D19C23FE6AC9ADFF27D931FDB4EA40',
          exponent: 0,
          aliases: [
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518'
          ]
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/651FB42894F72E09E8148158E6B8F0F560D19C23FE6AC9ADFF27D931FDB4EA40',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom:
              'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-89'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/633B4D924BDBC47E10FF6468059A3AC89C7E95C3A4685E677E2309D2689CD4B3',
          exponent: 0,
          aliases: [
            'ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E'
          ]
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/633B4D924BDBC47E10FF6468059A3AC89C7E95C3A4685E677E2309D2689CD4B3',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom:
              'ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-89'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E',
          exponent: 0
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/62F967361FAC37055E5CC202546AD96623382A5EF7D132112ACB83FDCAFAB70F',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom:
              'ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-89'
          }
        }
      ],
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'ukuji'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }
      ]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      base: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'ERIS Alliance Staked ampWHALE on Terra',
      denom_units: [
        {
          denom:
            'ibc/7FE2237D4220333BAE4F9028E30BCC9A8DD61CF825F39D063D5622D262C01416',
          exponent: 0,
          aliases: [
            'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt'
          ]
        },
        {
          denom: 'ampWHALEt',
          exponent: 6
        }
      ],
      base: 'ibc/7FE2237D4220333BAE4F9028E30BCC9A8DD61CF825F39D063D5622D262C01416',
      name: 'ERIS Alliance Staked ampWHALE',
      display: 'ampWHALEt',
      symbol: 'ampWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom:
              'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'ERIS Alliance Staked boneWHALE on Terra',
      denom_units: [
        {
          denom:
            'ibc/8BED0D7DF1199DF699306B751A99107FA0D92EF201377D4C7CF739D062F1B277',
          exponent: 0,
          aliases: [
            'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt'
          ]
        },
        {
          denom: 'boneWHALEt',
          exponent: 6
        }
      ],
      base: 'ibc/8BED0D7DF1199DF699306B751A99107FA0D92EF201377D4C7CF739D062F1B277',
      name: 'ERIS Alliance Staked boneWHALE',
      display: 'boneWHALEt',
      symbol: 'boneWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom:
              'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'ERIS Liquid Enterprise Staked ROAR',
      denom_units: [
        {
          denom:
            'ibc/2F58418402E70C3D834F5BEC622B703155FEE4CF4A2134EA6E93F6B5CA6EE8E5',
          exponent: 0,
          aliases: [
            'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR'
          ]
        },
        {
          denom: 'ampROAR',
          exponent: 6
        }
      ],
      base: 'ibc/2F58418402E70C3D834F5BEC622B703155FEE4CF4A2134EA6E93F6B5CA6EE8E5',
      name: 'ERIS Amplified ROAR',
      display: 'ampROAR',
      symbol: 'ampROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom:
              'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/31764B27C8CD953DECBD5D5488ACA71AC7AB22F0B148CB373CD7342892050E92',
          exponent: 0,
          aliases: [
            'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C'
          ]
        },
        {
          denom:
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/31764B27C8CD953DECBD5D5488ACA71AC7AB22F0B148CB373CD7342892050E92',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom:
              'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/B2B37101440811E90D5C82D3F2E5E0A4B1D0CA6C510821797FB9F1DC6941B6EE',
          exponent: 0,
          aliases: [
            'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278'
          ]
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B2B37101440811E90D5C82D3F2E5E0A4B1D0CA6C510821797FB9F1DC6941B6EE',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom:
              'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
      }
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/ED487C9513A933BECB5ABA64CAE441C15E5AF66C3383061FB5A8BC0F671B933F',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        },
        {
          denom: 'sienna',
          exponent: 18
        }
      ],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/ED487C9513A933BECB5ABA64CAE441C15E5AF66C3383061FB5A8BC0F671B933F',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/21038E447A2D4A1183628C0EC366FE79C2E0B0BD91F9A85E6C906CD911FD676E',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/21038E447A2D4A1183628C0EC366FE79C2E0B0BD91F9A85E6C906CD911FD676E',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/590CE97A3681BC2058FED1F69B613040209DF3F17B7BD31DFFB8671C4D2CD99B',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/590CE97A3681BC2058FED1F69B613040209DF3F17B7BD31DFFB8671C4D2CD99B',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/6500A6358F49FAB811A75E689D1B7C3B50AE6921F800569BF83929822EE7A828',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        },
        {
          denom: 'silk',
          exponent: 6
        }
      ],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/6500A6358F49FAB811A75E689D1B7C3B50AE6921F800569BF83929822EE7A828',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description:
        'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/A81564DE9A1F0D66D715B508601E27AB89E0FADDE6A3706FC15F8C80BB774563',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        },
        {
          denom: 'stkd-scrt',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/A81564DE9A1F0D66D715B508601E27AB89E0FADDE6A3706FC15F8C80BB774563',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/115373976C7BA066D7612C0FBFB64504D807770FF8248DE005942B7FDD4DAADC',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        },
        {
          denom: 'butt',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/115373976C7BA066D7612C0FBFB64504D807770FF8248DE005942B7FDD4DAADC',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      coingecko_id: 'buttcoin-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/7D366323A7EE9B278763F78734FDE3F6309CCC132707A85EA1C0C31617EF63D8',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        },
        {
          denom: 'alter',
          exponent: 6
        }
      ],
      base: 'ibc/7D366323A7EE9B278763F78734FDE3F6309CCC132707A85EA1C0C31617EF63D8',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/E4572F1DEAA76A5A7E1280B6E462176A5B1FB716CD1F445E21D9F32A85DD11A8',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        },
        {
          denom: 'amber',
          exponent: 6
        }
      ],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/E4572F1DEAA76A5A7E1280B6E462176A5B1FB716CD1F445E21D9F32A85DD11A8',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/C2786AAA8E49F710716E57DB2B092858B1C5EA8965428305B98F4C5A1A550F94',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        },
        {
          denom: 'shill',
          exponent: 6
        }
      ],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/C2786AAA8E49F710716E57DB2B092858B1C5EA8965428305B98F4C5A1A550F94',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-46',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-44'
          }
        }
      ]
    },
    {
      description:
        'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [
        {
          denom:
            'ibc/666DDD99CF7167827542586EC7FE20274DA775635AED13A8914F0613345EC721',
          exponent: 0,
          aliases: [
            'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          ]
        },
        {
          denom: 'astro',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/666DDD99CF7167827542586EC7FE20274DA775635AED13A8914F0613345EC721',
      name: 'Astroport',
      display: 'astro',
      symbol: 'ASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
      },
      coingecko_id: 'astroport-fi',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [
        {
          denom:
            'ibc/13FB0CFB5B6978A37FEAE7CA8B179FA0453C6E35E07514955AFBFD3B118B6452',
          exponent: 0,
          aliases: [
            'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k'
          ]
        },
        {
          denom: 'Dinheiros',
          exponent: 0
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/13FB0CFB5B6978A37FEAE7CA8B179FA0453C6E35E07514955AFBFD3B118B6452',
      name: 'dinheiro',
      display: 'Dinheiros',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [
        {
          denom:
            'ibc/F8E58A227AAE612E2D2399D8AC0FA9901D76CAAD97379966204942D6D817219D',
          exponent: 0,
          aliases: [
            'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8'
          ]
        },
        {
          denom: 'Reis',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/F8E58A227AAE612E2D2399D8AC0FA9901D76CAAD97379966204942D6D817219D',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Escudos is the everyday currency of dioalma.protocol, good to send money back and foward.',
      denom_units: [
        {
          denom:
            'ibc/07BCEF682BD72BCEEBD2D03E9523001064A3750025FE38A90FA20568AE5CCC42',
          exponent: 0,
          aliases: [
            'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg'
          ]
        },
        {
          denom: 'Escudos',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/07BCEF682BD72BCEEBD2D03E9523001064A3750025FE38A90FA20568AE5CCC42',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [
        {
          denom:
            'ibc/EDB247ECDEC5EC9E627149D38F7B3FB9AB7DF52E612DF935213D6CC66AD23842',
          exponent: 0,
          aliases: [
            'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q'
          ]
        },
        {
          denom: 'Alem',
          exponent: 6
        }
      ],
      type_asset: 'cw20',
      address:
        'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/EDB247ECDEC5EC9E627149D38F7B3FB9AB7DF52E612DF935213D6CC66AD23842',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address:
        'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [
        {
          denom:
            'ibc/F33B313325B1C99B646B1B786F1EA621E3794D787B90C204C30FE1D4D45970AE',
          exponent: 0,
          aliases: [
            'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct'
          ]
        },
        {
          denom: 'ampluna',
          exponent: 6
        }
      ],
      base: 'ibc/F33B313325B1C99B646B1B786F1EA621E3794D787B90C204C30FE1D4D45970AE',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      coingecko_id: 'eris-amplified-luna',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address:
        'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [
        {
          denom:
            'ibc/31ED168F5E93D988FCF223B1298113ACA818DB7BED8F7B73764C5C9FAC293609',
          exponent: 0,
          aliases: [
            'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          ]
        },
        {
          denom: 'roar',
          exponent: 6
        }
      ],
      base: 'ibc/31ED168F5E93D988FCF223B1298113ACA818DB7BED8F7B73764C5C9FAC293609',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address:
        'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [
        {
          denom:
            'ibc/464CE409C9710351EDEB880FF9323B7CE2E38DE791CA59E34FB3E9830E94C644',
          exponent: 0,
          aliases: [
            'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv'
          ]
        },
        {
          denom: 'gem',
          exponent: 6
        }
      ],
      base: 'ibc/464CE409C9710351EDEB880FF9323B7CE2E38DE791CA59E34FB3E9830E94C644',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address:
        'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [
        {
          denom:
            'ibc/4925CCFAD4FFBC63D7C52BB9AE2DE8CF7D0809124FBA1F44F4F2B7B4267D5E5A',
          exponent: 0,
          aliases: [
            'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          ]
        },
        {
          denom: 'cub',
          exponent: 6
        }
      ],
      base: 'ibc/4925CCFAD4FFBC63D7C52BB9AE2DE8CF7D0809124FBA1F44F4F2B7B4267D5E5A',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address:
        'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [
        {
          denom:
            'ibc/3766EE7E4A42BA83C4AB0DD26B144B26B7758BDAB4017E0924C95FBFC69A2589',
          exponent: 0,
          aliases: [
            'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          ]
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      base: 'ibc/3766EE7E4A42BA83C4AB0DD26B144B26B7758BDAB4017E0924C95FBFC69A2589',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address:
        'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [
        {
          denom:
            'ibc/39C46E9F45E72BA4B2DD0EF7DD7BA01B7461DEC9CDFCB7376765D824255FD30D',
          exponent: 0,
          aliases: [
            'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn'
          ]
        },
        {
          denom: 'xxx',
          exponent: 10
        }
      ],
      base: 'ibc/39C46E9F45E72BA4B2DD0EF7DD7BA01B7461DEC9CDFCB7376765D824255FD30D',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address:
        'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [
        {
          denom:
            'ibc/8403FE3558CE58B10AEBB61B3110A4FFBCF2134172DEAD07D0A9248F08235F9F',
          exponent: 0,
          aliases: [
            'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces'
          ]
        },
        {
          denom: 'GUGU',
          exponent: 6
        }
      ],
      base: 'ibc/8403FE3558CE58B10AEBB61B3110A4FFBCF2134172DEAD07D0A9248F08235F9F',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.',
      type_asset: 'cw20',
      address:
        'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [
        {
          denom:
            'ibc/665F3EBB89B38FB4A1D3B0C7FB6523F92DCDAACB38FF43C6607CA6E009B81603',
          exponent: 0,
          aliases: [
            'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
          ]
        },
        {
          denom: 'bluna',
          exponent: 6
        }
      ],
      base: 'ibc/665F3EBB89B38FB4A1D3B0C7FB6523F92DCDAACB38FF43C6607CA6E009B81603',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address:
        'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [
        {
          denom:
            'ibc/BFDEE4E7F0E8371F195C2A6CFB70E54C18361E475FC26BE3A38B36E55FCEFDD6',
          exponent: 0,
          aliases: [
            'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          ]
        },
        {
          denom: 'sayve',
          exponent: 6
        }
      ],
      base: 'ibc/BFDEE4E7F0E8371F195C2A6CFB70E54C18361E475FC26BE3A38B36E55FCEFDD6',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address:
        'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [
        {
          denom:
            'ibc/B02AA55341CC3B07CA91B9A666B906963E4427896D293332748DF2A56F72978E',
          exponent: 0,
          aliases: [
            'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3'
          ]
        },
        {
          denom: 'nico',
          exponent: 18
        }
      ],
      base: 'ibc/B02AA55341CC3B07CA91B9A666B906963E4427896D293332748DF2A56F72978E',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address:
        'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [
        {
          denom:
            'ibc/4618940637F818D07EEF445AF18CF1396EDB74590AD95D0921BA89427D00E634',
          exponent: 0,
          aliases: [
            'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala'
          ]
        },
        {
          denom: 'seas',
          exponent: 6
        }
      ],
      base: 'ibc/4618940637F818D07EEF445AF18CF1396EDB74590AD95D0921BA89427D00E634',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address:
        'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [
        {
          denom:
            'ibc/12B1C2A0B7EC7B30B105FAF966031892BF1B36BFE6E6325270E4C2B3680F9B86',
          exponent: 0,
          aliases: [
            'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v'
          ]
        },
        {
          denom: 'bitz',
          exponent: 6
        }
      ],
      base: 'ibc/12B1C2A0B7EC7B30B105FAF966031892BF1B36BFE6E6325270E4C2B3680F9B86',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address:
        'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [
        {
          denom:
            'ibc/9B9D67B245DDFA90C0A5B65D00E4DE1BA8AD1A97063974B222D5C31D3BDCF500',
          exponent: 0,
          aliases: [
            'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l'
          ]
        },
        {
          denom: 'seul',
          exponent: 6
        }
      ],
      base: 'ibc/9B9D67B245DDFA90C0A5B65D00E4DE1BA8AD1A97063974B222D5C31D3BDCF500',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address:
        'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [
        {
          denom:
            'ibc/8509DD18F060A35F04F33CB231FD3B0B98E536FC1C847888E932948BE1FAFC0B',
          exponent: 0,
          aliases: [
            'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5'
          ]
        },
        {
          denom: 'xseul',
          exponent: 6
        }
      ],
      base: 'ibc/8509DD18F060A35F04F33CB231FD3B0B98E536FC1C847888E932948BE1FAFC0B',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address:
        'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [
        {
          denom:
            'ibc/2E813F16DC70E5BA490E75F92A57477438F99E8EB48ACA1222D96B5DD83FBD45',
          exponent: 0,
          aliases: [
            'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s'
          ]
        },
        {
          denom: 'ito',
          exponent: 6
        }
      ],
      base: 'ibc/2E813F16DC70E5BA490E75F92A57477438F99E8EB48ACA1222D96B5DD83FBD45',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address:
        'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [
        {
          denom:
            'ibc/26C130767EE389A4E6793D77691420BEE7CE2393187D51F80ED4E228F509AEC6',
          exponent: 0,
          aliases: [
            'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8'
          ]
        },
        {
          denom: 'ARMANI',
          exponent: 6
        }
      ],
      base: 'ibc/26C130767EE389A4E6793D77691420BEE7CE2393187D51F80ED4E228F509AEC6',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address:
        'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [
        {
          denom:
            'ibc/04A8F9FF74E6CF0D0E7213B1252B9B21F24F831A094CBC7DBA56961C3B815692',
          exponent: 0,
          aliases: [
            'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun'
          ]
        },
        {
          denom: 'DROGO',
          exponent: 6
        }
      ],
      base: 'ibc/04A8F9FF74E6CF0D0E7213B1252B9B21F24F831A094CBC7DBA56961C3B815692',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address:
        'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [
        {
          denom:
            'ibc/5104DC6A8A79EDF17485B9F1C72857B3AB7E96F87C2FFE297E1C9DD94119FBC0',
          exponent: 0,
          aliases: [
            'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu'
          ]
        },
        {
          denom: 'ADO',
          exponent: 6
        }
      ],
      base: 'ibc/5104DC6A8A79EDF17485B9F1C72857B3AB7E96F87C2FFE297E1C9DD94119FBC0',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address:
        'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [
        {
          denom:
            'ibc/A8ADBB3708AAD2A1959E8E2564DB0938759098DCC471647B094EBD798608BC9A',
          exponent: 0,
          aliases: [
            'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h'
          ]
        },
        {
          denom: 'DNA',
          exponent: 6
        }
      ],
      base: 'ibc/A8ADBB3708AAD2A1959E8E2564DB0938759098DCC471647B094EBD798608BC9A',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    },
    {
      description:
        'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address:
        'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [
        {
          denom:
            'ibc/AF371F507606449381F82454241BF562E742312BE5744B08AF66D8840C12A5C6',
          exponent: 0,
          aliases: [
            'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          ]
        },
        {
          denom: 'bitmos',
          exponent: 6
        }
      ],
      base: 'ibc/AF371F507606449381F82454241BF562E742312BE5744B08AF66D8840C12A5C6',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
        }
      ],
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-28',
            base_denom:
              'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-36'
          }
        }
      ]
    }
  ]
};
export default assets;
