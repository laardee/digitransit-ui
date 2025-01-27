/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqturku';
const parentConfig = require('./config.turku').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  hideHeader: true,
  showTicketPrice: false,
});
