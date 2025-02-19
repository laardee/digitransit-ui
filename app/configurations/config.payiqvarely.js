/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqvarely';
const parentConfig = require('./config.varely').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  // indexPath: 'varely/',
  showTicketPrice: false,
});
