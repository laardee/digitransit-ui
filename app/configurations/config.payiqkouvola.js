/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkouvola';
const parentConfig = require('./config.kouvola').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  // ticketLink: 'https://www.payiq.net/kouvola',
  showTicketPrice: false,
});
