/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkuopio';
const parentConfig = require('./config.kuopio').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  ticketLink: 'https://www.payiq.net/kuopio',
  showTicketPrice: false,
  appBarLink: {
    name: 'PayiQ - Kuopio',
    href: 'https://www.payiq.net/kuopio',
  },
});
