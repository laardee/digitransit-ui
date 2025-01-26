/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqhelsinki';
const parentConfig = require('./config.hsl').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  ticketLink: 'https://www.payiq.net/hsl',
  appBarLink: {
    name: 'PayiQ - HSL',
    href: 'https://www.payiq.net/hsl',
  },
});
