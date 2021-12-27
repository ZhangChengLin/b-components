import {getTimeString, removeModal, modalEvents} from "./util/index";
import modal from "./modal";


const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, LongContentType, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString()
  let mId = 'modalId_' + timeString

  document.body.append(modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, LongContentType, mId))

  EventsType && EventsFunction ? modalEvents(mId, EventsType, EventsFunction) : "";

  const modal_element = document.querySelector("#" + mId);
  const xxx = Options ? new bootstrap.Modal(modal_element, Options) : new bootstrap.Modal(modal_element);
  xxx.show();
  removeModal(mId);
  return timeString;
};

export default bModal
