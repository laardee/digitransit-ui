/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqkuopio';
const parentConfig = require('./config.kuopio').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Kuopio';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // indexPath: 'kuopio/',
  showTicketPrice: false,
});
