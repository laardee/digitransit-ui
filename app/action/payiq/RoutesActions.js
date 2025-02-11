import PayloadQueue from './PayloadQueue';

const queue = new PayloadQueue(200); // in ms

export const TRACK_ROUTE_SELECTION_ACTION_VIEW = 'view';
export const TRACK_ROUTE_SELECTION_ACTION_CLICK = 'click';
export const TRACK_ROUTE_SELECTION_ACTION_SELECT = 'select';
export function trackRouteSelection(actionContext, payload, done) {
  // eslint-disable-next-line
  console.log(actionContext, payload);

  queue.enqueue(payload);
  // const response = fetch('/api/submit', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  done();
}
