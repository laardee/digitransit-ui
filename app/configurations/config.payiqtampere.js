/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqtampere';
const parentConfig = require('./config.tampere').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  showTicketPrice: false,
});
