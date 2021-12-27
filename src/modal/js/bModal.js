import {getTimeString, removeModal, modalEvents} from "./util/index";
import modal from "./modal";


/**
 * @param {string} headerNodeElement
 * @param {string} bodyNodeElement
 * @param {string} footerNodeElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} ScrollingLongContent
 * @param {{}} Options
 * @param {string} EventsType
 * @param {*|string} EventsFunction
 */
const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString()
  let mId = 'modalId_' + timeString

  document.body.append(modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, mId))

  EventsType && EventsFunction ? modalEvents(mId, EventsType, EventsFunction) : "";

  const modal_element = document.querySelector("#" + mId);
  const xxx = Options ? new bootstrap.Modal(modal_element, Options) : new bootstrap.Modal(modal_element);
  xxx.show();
  removeModal(mId);
  return mId;
};

export default bModal
