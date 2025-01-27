/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqlahti';
const parentConfig = require('./config.lahti').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  hideHeader: true,
  showTicketPrice: false,
});
