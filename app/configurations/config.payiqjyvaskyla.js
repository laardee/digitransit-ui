/* eslint-disable prefer-template */
import configMerger from '../util/configMerger';

const CONFIG = 'payiqjyvaskyla';
const parentConfig = require('./config.jyvaskyla').default;

delete parentConfig.ticketPurchaseLink;
delete parentConfig.ticketLink;

if (parentConfig?.geoJson?.layers) {
  parentConfig.geoJson.layers = parentConfig.geoJson.layers.filter(
    layer => layer.name.fi.toLowerCase() !== 'myyntipisteet',
  );
}

export default configMerger(parentConfig, {
  CONFIG,
  // indexPath: 'jyvaskyla/',
  showTicketPrice: false,
});
