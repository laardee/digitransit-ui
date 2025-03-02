/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqlahti';
const parentConfig = require('./config.lahti').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - Lahti';

export default configMerger(parentConfig, {
  CONFIG,
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  // indexPath: 'lahti/',
  showTicketPrice: false,
});
