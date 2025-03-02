/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqoulu';
const parentConfig = require('./config.oulu').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Oulu';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // indexPath: 'oulu/',
  showTicketPrice: false,
});
