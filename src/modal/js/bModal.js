import modal from "./modal"
import {removeModal, modalEvents, getTimeString} from "./util/index"

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
  const modalId = 'modalId_' + getTimeString()

  const _modal = modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, modalId)
  document.body.append(_modal)

  EventsType && EventsFunction ? modalEvents(_modal, EventsType, EventsFunction) : ""

  const xxx = Options ? new bootstrap.Modal(_modal, Options) : new bootstrap.Modal(_modal)
  xxx.show()
  removeModal(_modal)
  return modalId
}

export default bModal
