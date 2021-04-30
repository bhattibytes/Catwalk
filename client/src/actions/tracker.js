import moment from 'moment'
import { postInteractionReq } from '../api/tracker.js';

export function tracker(e, widget) {
  try {
    const time = moment().format();
    let element = e.target.localName + ' element';

    // Get the name of the element if present
    if (e.target.attributes.name) {
      element += ' name=' + e.target.attributes.name['nodeValue'];
    }

    // Get the className if present
    if (e.target.className) {
      element += ' class=' + e.target.className
    }

    // Create the body parameters
    const data = {
      element: element,
      widget: widget,
      time: time
    }
    // Send the request , returns a promise
    postInteractionReq(data)

  } catch(err) {
    console.log('Failed with interaction tracker....')
  }
}