/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqhelsinki';
const parentConfig = require('./config.hsl').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  hideHeader: true,
  // ticketLink: 'https://www.payiq.net/hsl',
  showTicketPrice: false,
});
