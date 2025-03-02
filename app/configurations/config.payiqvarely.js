/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqvarely';
const parentConfig = require('./config.varely').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Seutu+';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // indexPath: 'varely/',
  showTicketPrice: false,
});
