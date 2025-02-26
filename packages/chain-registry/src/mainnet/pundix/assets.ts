import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pundix',
  assets: [
    {
      description: 'Pundi X Token',
      denom_units: [
        {
          denom:
            'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
          exponent: 0
        },
        {
          denom: 'PUNDIX',
          exponent: 18
        }
      ],
      base: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
        }
      ]
    },
    {
      description: 'PURSE Token',
      denom_units: [
        {
          denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0
        },
        {
          denom: 'PURSE',
          exponent: 18
        }
      ],
      base: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }
      ]
    }
  ]
};
export default info;
