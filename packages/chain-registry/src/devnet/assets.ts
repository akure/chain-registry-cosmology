import { AssetList } from '@chain-registry-ak/types';

import * as _bitcannadevnet2 from './bitcannadevnet2';
import * as _celestiatestnet2 from './celestiatestnet2';
import * as _impacthubdevnet from './impacthubdevnet';
import * as _kyvedevnet from './kyvedevnet';
import * as _seidevnet3 from './seidevnet3';

const assets: AssetList[] = [
  _bitcannadevnet2.assets,
  _celestiatestnet2.assets,
  _impacthubdevnet.assets,
  _kyvedevnet.assets,
  _seidevnet3.assets
];

export default assets;
