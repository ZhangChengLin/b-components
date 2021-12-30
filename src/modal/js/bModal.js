import {getTimeString, removeModal, modalEvents} from "./util/index"
import modal from "./modal"

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 * @param {String} ModalSizes
 * @param {Boolean} VerticallyCentered
 * @param {Boolean} ScrollingLongContent
 * @param {Object} Options
 * @param {String} EventsType
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
  removeModal(_modal)
  return modalId
}

export default bModal
