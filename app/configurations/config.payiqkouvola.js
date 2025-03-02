/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkouvola';
const parentConfig = require('./config.kouvola').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Kouvola';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // ticketLink: 'https://www.payiq.net/kouvola',
  // indexPath: 'kouvola/',
  showTicketPrice: false,
});
