/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkuopio';
const parentConfig = require('./config.kuopio').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  appBarLink: {
    name: 'PayiQ - Kuopio',
    href: 'http://www.payiq.net/kuopio',
  },
});
