/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqmatka';
const parentConfig = require('./config.matka').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'Payiq - Matka';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // ticketLink: 'https://www.payiq.net/hsl',
  showTicketPrice: false,
});
