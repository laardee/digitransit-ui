/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqhelsinki';
const parentConfig = require('./config.hsl').default;

delete parentConfig.ticketPurchaseLink;

export default configMerger(parentConfig, {
  CONFIG,
  appBarLink: {
    name: 'PayiQ - HSL',
    href: 'http://www.payiq.net/hsl',
  },
});
