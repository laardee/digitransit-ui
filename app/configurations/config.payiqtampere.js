/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqtampere';
const parentConfig = require('./config.tampere').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Tampere';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  showTicketPrice: false,
});
