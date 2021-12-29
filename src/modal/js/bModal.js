import {getTimeString, removeModal, modalEvents} from "./util/index"
import modal from "./modal"


/**
 * @param {Node|string|Function|null} headerNodeElement
 * @param {Node|string|Function|null} bodyNodeElement
 * @param {Node|string|Function|null} footerNodeElement
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
