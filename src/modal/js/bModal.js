import {getTimeString, removeModal, modalEvents} from "./util/index"
import modal from "./modal"


/**
 * @param {Node|string|function} headerNodeElement
 * @param {Node|string|function} bodyNodeElement
 * @param {Node|string|function} footerNodeElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} ScrollingLongContent
 * @param {Object} Options
 * @param {string} EventsType
 * @param {Function} EventsFunction
 */
const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString()
  let modalId = 'modalId_' + timeString

  let _modal = modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, modalId)
  document.body.append(_modal)

  EventsType && EventsFunction ? modalEvents(modalId, EventsType, EventsFunction) : ""

  let xxx = Options ? new bootstrap.Modal(_modal, Options) : new bootstrap.Modal(_modal)
  xxx.show()
  removeModal(modalId)
  return modalId
}

export default bModal
