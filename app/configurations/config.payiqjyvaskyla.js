/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqjyvaskyla';
const parentConfig = require('./config.jyvaskyla').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  ticketLink: 'https://www.payiq.net/jyvaskyla',
  appBarLink: {
    name: 'PayiQ - Jyvaskyla',
    href: 'https://www.payiq.net/jyvaskyla',
  },
});
