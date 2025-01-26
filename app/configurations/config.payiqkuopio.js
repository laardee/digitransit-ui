/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkuopio';
const parentConfig = require('./config.kuopio').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  ticketLink: 'https://www.payiq.net/kuopio',
  appBarLink: {
    name: 'PayiQ - Kuopio',
    href: 'https://www.payiq.net/kuopio',
  },
});
