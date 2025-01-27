/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqoulu';
const parentConfig = require('./config.oulu').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  showTicketPrice: false,
});
