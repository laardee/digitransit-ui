/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqmatka';
const parentConfig = require('./config.matka').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

export default configMerger(parentConfig, {
  CONFIG,
  // ticketLink: 'https://www.payiq.net/hsl',
  showTicketPrice: false,
  logo: 'payiq/iqpayment-logo-white.svg',
});
