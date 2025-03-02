/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqhelsinki';
const parentConfig = require('./config.hsl').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

const apptitle = 'PayiQ - HSL';

export default configMerger(parentConfig, {
  CONFIG,
  // ticketLink: 'https://www.payiq.net/hsl',
  // indexPath: 'hsl/',
  title: apptitle,
  socialMedia: {
    title: apptitle,
  },
  showTicketPrice: false,
});
