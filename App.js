// const Proxy = require("proxy-polyfill");
const Reflect = require("harmony-reflect");

import BR from '@blueeast/bluerain-os';
import bootConfig from './bluerain.js';
bootConfig.renderApp = false;
export default BR.boot(bootConfig);

