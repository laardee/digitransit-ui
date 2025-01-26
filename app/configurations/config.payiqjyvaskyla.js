/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqjyvaskyla';
const parentConfig = require('./config.jyvaskyla').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  appBarLink: {
    name: 'PayiQ - Jyvaskyla',
    href: 'http://www.payiq.net/jyvaskyla',
  },
});
