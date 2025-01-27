/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkuopio';
const parentConfig = require('./config.kuopio').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  hideHeader: true,
  showTicketPrice: false,
});
