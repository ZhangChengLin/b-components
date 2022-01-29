import {Modal} from 'bootstrap'

import modal from './modal'
import dialog from './modal-dialog'
import content from './modal-content'
import header from './modal-header'
import body from './modal-body'
import footer from './modal-footer'
import {removeModal, modalEvents, getTimeString} from './util/index'

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

  const _modal = modal(modalId)
  const _dialog = dialog(ModalSizes, VerticallyCentered, ScrollingLongContent)
  const _content = content()
  const _header = header(headerNodeElement)
  const _body = body(bodyNodeElement)
  const _footer = footer(footerNodeElement)

  _content.append(_header, _body, _footer)
  _dialog.append(_content)
  _modal.append(_dialog)
  document.body.append(_modal)

  EventsType && EventsFunction ? modalEvents(_modal, EventsType, EventsFunction) : ''

  const xxx = Options ? new Modal(_modal, Options) : new Modal(_modal)
  xxx.show()
  removeModal(_modal)
  return modalId
}

export default bModal
