/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqhelsinki';
const parentConfig = require('./config.hsl').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  // ticketLink: 'https://www.payiq.net/hsl',
  showTicketPrice: false,
  appBarLink: {
    name: 'PayiQ - HSL',
    href: 'https://www.payiq.net/hsl',
  },
});
