/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqturku';
const parentConfig = require('./config.turku').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Turku';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // indexPath: 'turku/',
  showTicketPrice: false,
});
